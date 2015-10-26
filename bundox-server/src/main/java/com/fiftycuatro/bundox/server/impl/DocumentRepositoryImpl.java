package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.cdi.BackingStore;
import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.inject.Singleton;

import org.elasticsearch.action.deletebyquery.DeleteByQueryResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.ImmutableSettings;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentFactory;

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;
import static org.elasticsearch.index.query.QueryBuilders.boolQuery;
import static org.elasticsearch.index.query.QueryBuilders.termQuery;
import static org.elasticsearch.index.query.QueryBuilders.wildcardQuery;
import static org.elasticsearch.index.query.QueryBuilders.prefixQuery;

import org.elasticsearch.search.SearchHit;

import static org.apache.commons.lang.exception.ExceptionUtils.getStackTrace;

@Singleton
@BackingStore
public class DocumentRepositoryImpl implements DocumentRepository {

    private static final Logger log = Logger.getLogger(DocumentRepository.class.getName());
    private static final Logger logST = Logger.getLogger(DocumentRepository.class.getName() + ".stacktrace");
    
    private final String BUNDOX_INDEX = "bundox";
    
    private final Client client;

    @SuppressWarnings("resource")
    public DocumentRepositoryImpl() {
        log.info("Creating Elasticsearch Document Repository");
        Settings settings = ImmutableSettings.settingsBuilder()
                .put("cluster.name", "bundox").build();
        client = new TransportClient(settings)
                .addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
    }
    
    @PostConstruct
    public void InitializeIndices() {
        boolean hasIndex = client.admin().indices().prepareExists(BUNDOX_INDEX)
                .execute().actionGet().isExists();
        if (!hasIndex) {
            try {
                log.info(String.format("Creating and setting up index '%s'", BUNDOX_INDEX));
                XContentBuilder xb = XContentFactory.jsonBuilder();
                xb.startObject();
                    xb.field("template", BUNDOX_INDEX + "-*");
                    addSettings(xb);
                    addMappings(xb);
                xb.endObject();
                
                client.admin().indices().preparePutTemplate(BUNDOX_INDEX)
                    .setSource(xb)
                    .execute().actionGet();
                log.info(String.format("Mapping templates '%s' sucessfully created", BUNDOX_INDEX+"-*"));

                client.admin().indices().prepareCreate(BUNDOX_INDEX)
                        .execute().actionGet();
                log.info(String.format("Index '%s' sucessfully created", BUNDOX_INDEX));
            }
            catch (IOException e) {
                log.info(String.format("Error while setting up index '%s'. %s", BUNDOX_INDEX, e.getMessage()));
                logST.fine(getStackTrace(e));
            }
        }
        else {
            log.info(String.format("%s index already exists.", BUNDOX_INDEX));
        }
    }

    @PreDestroy
    public void Cleanup() {
        log.info("Cleaning up Elasticsearch Document Repository for shutdown");
        client.close();
    }
    
    private void addSettings(XContentBuilder xb) throws IOException {
        xb.startObject("settings");
            xb.startObject("analysis");
                addNGramFilter(xb, 2, 20);
                xb.startObject("analyzer");
                    addNGramAnalyzer(xb);
                    addWhitespaceAnalyzer(xb);
                    addLowercaseAnalyzer(xb);
                xb.endObject();
            xb.endObject();
        xb.endObject();
    }
    
    private void addNGramFilter(XContentBuilder xb, int min, int max) throws IOException {
        xb.startObject("filter");
            xb.startObject("nGram_filter");
                xb.field("type", "nGram");
                xb.field("min_gram", min);
                xb.field("max_gram", max);
                xb.field("token_chars", "letter", "digit", "punctuation", "symbol");
            xb.endObject();
        xb.endObject();
    }
    
    private void addNGramAnalyzer(XContentBuilder xb) throws IOException {
        xb.startObject("nGram_analyzer");
            xb.field("type", "custom");
            xb.field("tokenizer", "whitespace");
            xb.field("filter", "lowercase", "asciifolding", "nGram_filter");
        xb.endObject();       
    }

    private void addLowercaseAnalyzer(XContentBuilder xb) throws IOException {
        xb.startObject("lowercase_analyzer");
            xb.field("type", "custom");
            xb.field("tokenizer", "keyword");
            xb.field("filter", "lowercase");
        xb.endObject();       
    }
    
    private void addWhitespaceAnalyzer(XContentBuilder xb) throws IOException {
        xb.startObject("whitespace_analyzer");
            xb.field("type", "custom");
            xb.field("tokenizer", "whitespace");
            xb.field("filter", "lowercase", "asciifolding");
        xb.endObject();
    }
    
    private void addMappings(XContentBuilder xb) throws IOException {
        xb.startObject("mappings");
            addDocumentationItemMapping(xb);
        xb.endObject();    
    }
    
    private void addDocumentationItemMapping(XContentBuilder xb) throws IOException {
        xb.startObject("documentationItem");
            xb.startObject("_all");
                xb.field("index_analyzer", "nGram_analyzer");
                xb.field("search_analyzer", "nGram_analyzer");   
            xb.endObject();
            xb.startObject("properties");
                xb.startObject("subject");
                    xb.field("type", "string");
                    xb.field("index_analyzer", "lowercase_analyzer");
                xb.endObject();
                xb.startObject("document_id");
                    xb.field("type", "string");
                    xb.field("index", "not_analyzed");
                    xb.field("include_in_all", false);
                xb.endObject();
                xb.startObject("path");
                    xb.field("type", "string");
                    xb.field("include_in_all", false);
                    xb.field("index", "no");
                xb.endObject();
                xb.startObject("type");
                    xb.field("type", "string");
                    xb.field("include_in_all", false);
                    xb.field("index", "not_analyzed");
                xb.endObject();
                xb.startObject("namespace");
                    xb.field("type", "string");
                    xb.field("include_in_all", false);
                    xb.field("index", "not_analyzed");
                xb.endObject();
            xb.endObject();
        xb.endObject();
    }

    @Override
    public List<Document> getAllDocuments() {
        SearchResponse response = client.prepareSearch(BUNDOX_INDEX)
                .setTypes("document")
                .execute()
                .actionGet();
        List<Document> documents = new ArrayList<>();
        for (SearchHit hit : response.getHits().getHits()) {
            Map<String, Object> result = hit.getSource();
            documents.add(new Document(
                    result.get("name").toString(),
                    result.get("version").toString(),
                    result.get("family").toString(),
                    result.get("index_path").toString(),
                    result.get("format_family").toString()
            ));
        }
        return documents;
    }

    @Override
    public List<Document> findDocumentsByName(String name) {
        SearchResponse response = client.prepareSearch(BUNDOX_INDEX)
                .setTypes("document")
                .setQuery(termQuery("name", name.toLowerCase()))
                .execute()
                .actionGet();
        List<Document> documents = new ArrayList<>();
        for (SearchHit hit : response.getHits().getHits()) {

            Map<String, Object> result = hit.getSource();
            documents.add(new Document(
                    result.get("name").toString(),
                    result.get("version").toString(),
                    result.get("family").toString(),
                    result.get("index_path").toString(),
                    result.get("format_family").toString()
            ));
        }
        return documents;
    }

    @Override
    public List<Document> findDocumentsByNameAndVersion(String name, String version) {
        SearchResponse response = client.prepareSearch(BUNDOX_INDEX)
                .setTypes("document")
                .setQuery(termQuery("name", name.toLowerCase()))
                .setQuery(termQuery("version", version.toLowerCase()))
                .execute()
                .actionGet();
        List<Document> documents = new ArrayList<>();
        for (SearchHit hit : response.getHits().getHits()) {

            Map<String, Object> result = hit.getSource();
            documents.add(new Document(
                    result.get("name").toString(),
                    result.get("version").toString(),
                    result.get("family").toString(),
                    result.get("index_path").toString(),
                    result.get("format_family").toString()
            ));
        }
        return documents;
    }

    @Override
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {
        searchTerm = searchTerm.toLowerCase();
        SearchResponse response = client.prepareSearch(getDocumentationIndexNames(documents))
                .setTypes("documentationItem")
                .setQuery(boolQuery()
                            .must(wildcardQuery("subject", wildcardify(searchTerm)))
                            .should(termQuery("subject", searchTerm).boost(10))
                            .should(prefixQuery("subject", searchTerm).boost(2))
                            .should(wildcardQuery("subject", wildcardify(searchTerm).substring(1))))
                .setFrom(0).setSize(maxResults).setExplain(true)
                .execute()
                .actionGet();
        List<DocumentationItem> documentation = new ArrayList<>();
        Map<String, Document> localDocumentIndex = createDocumentIndex(documents);
        for (SearchHit hit : response.getHits().getHits()) {
            Map<String, Object> result = hit.getSource();
            documentation.add(new DocumentationItem(
                    result.get("subject").toString(),
                    localDocumentIndex.get(result.get("document_id")),
                    result.get("path").toString(),
                    result.get("type").toString(),
                    result.get("namespace").toString()
            ));
        }
        return documentation;
    }

    private Map<String, Document> createDocumentIndex(List<Document> documents) {
        Map<String, Document> index = new HashMap<>();
        for (Document doc : documents) {
            index.put(doc.getId(), doc);
        }
        return index;
    }

    private String wildcardify(String term) {
        return term.replaceAll("", "*");
    }

    @Override
    public void storeDocuments(List<Document> documents) {
        documents.stream()
                .forEach(document -> {
                    try {

                        client.prepareIndex(BUNDOX_INDEX, "document", document.getId())
                        .setSource(jsonBuilder()
                                .startObject()
                                .field("name", document.getName())
                                .field("version", document.getVersion())
                                .field("family", document.getFamily())
                                .field("index_path", document.getIndexPath())
                                .field("format_family", document.getFormatFamily())
                                .endObject()
                        )
                        .execute()
                        .actionGet();

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                });
    }

    @Override
    public void storeDocumentationItems(List<DocumentationItem> documentationItems) {
        documentationItems.stream()
                .forEach(documentation -> {
                    try {

                        IndexResponse response = client.prepareIndex(getDocumentationIndexName(documentation.getDocument()), "documentationItem")
                        .setSource(jsonBuilder()
                                .startObject()
                                .field("subject", documentation.getSubject())
                                .field("document_id", documentation.getDocument().getId())
                                .field("path", documentation.getPath())
                                .field("type", documentation.getType())
                                .field("namespace", documentation.getNamespace())
                                .endObject()
                        )
                        .execute()
                        .actionGet();

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                });
    }

    @Override
    public void deleteDocument(Document document) {
        DeleteByQueryResponse response = client.prepareDeleteByQuery(BUNDOX_INDEX)
                .setTypes("document")
                .setQuery(termQuery("name", document.getName().toLowerCase()))
                .setQuery(termQuery("version", document.getVersion().toLowerCase()))
                .execute()
                .actionGet();   
    }
    @Override
    public void deleteDocumentation(Document document) {
        client.prepareDelete().setIndex(getDocumentationIndexName(document))
            .execute()
            .actionGet();
    }

    private String[] getDocumentationIndexNames(List<Document> documents) {
        List<String> docIndexList = documents.stream()
            .map(doc -> getDocumentationIndexName(doc))
            .collect(Collectors.toList());

        String[] docIndices = new String[docIndexList.size()];
        return docIndexList.toArray(docIndices);
    }

    private String getDocumentationIndexName(Document document) {
        return BUNDOX_INDEX + "-" + document.getId().toLowerCase();
    }

    private String getSuffixes(String str) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            builder.append(str.substring(i));
            builder.append(" ");
        }
        return builder.toString().trim();
    }

    private String getWildcard(String str) {
        return "*" + str.replaceAll(".(?=.)", "$0*") + "*";
    }
}
