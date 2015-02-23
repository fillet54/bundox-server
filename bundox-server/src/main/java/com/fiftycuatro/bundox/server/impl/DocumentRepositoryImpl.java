package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.ImmutableSettings;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;
import static org.elasticsearch.index.query.QueryBuilders.termQuery;
import static org.elasticsearch.index.query.QueryBuilders.wildcardQuery;
import org.elasticsearch.search.SearchHit;

public class DocumentRepositoryImpl implements DocumentRepository {

    private final Client client;

    public DocumentRepositoryImpl() {
        Settings settings = ImmutableSettings.settingsBuilder()
                .put("cluster.name", "bundox").build();
        client = new TransportClient(settings)
                .addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
    }

    @Override
    public List<Document> getAllDocuments() {
        SearchResponse response = client.prepareSearch("bundox")
                .setTypes("document")
                .execute()
                .actionGet();
        List<Document> documents = new ArrayList<>();
        for (SearchHit hit : response.getHits().getHits()) {
            Map<String, Object> result = hit.getSource();
            documents.add(new Document(
                    result.get("name").toString(),
                    result.get("version").toString()
            ));
        }
        return documents;
    }

    @Override
    public List<Document> findDocumentsByName(String name) {
        SearchResponse response = client.prepareSearch("bundox")
                .setTypes("document")
                .setQuery(termQuery("name", name.toLowerCase()))
                .execute()
                .actionGet();
        List<Document> documents = new ArrayList<>();
        long count = response.getHits().getTotalHits();
        for (SearchHit hit : response.getHits().getHits()) {

            Map<String, Object> result = hit.getSource();
            documents.add(new Document(
                    result.get("name").toString(),
                    result.get("version").toString()
            ));
        }
        return documents;
    }

    @Override
    public List<Document> findDocumentsByNameAndVersion(String name, String version) {
        SearchResponse response = client.prepareSearch("bundox")
                .setTypes("document")
                .setQuery(termQuery("name", name.toLowerCase()))
                .setQuery(termQuery("version", version.toLowerCase()))
                .execute()
                .actionGet();
        List<Document> documents = new ArrayList<>();
        long count = response.getHits().getTotalHits();
        for (SearchHit hit : response.getHits().getHits()) {

            Map<String, Object> result = hit.getSource();
            documents.add(new Document(
                    result.get("name").toString(),
                    result.get("version").toString()
            ));
        }
        return documents;
    }

    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {

        String wildCardSearch = getWildcard(searchTerm.toLowerCase());
        SearchResponse response = client.prepareSearch("bundox")
                .setTypes("documentationItem")
                .setQuery(termQuery("document_id", documents.get(0).getId().toLowerCase()))
                .setQuery(wildcardQuery("subject", wildCardSearch))
                .execute()
                .actionGet();
        List<DocumentationItem> documentation = new ArrayList<>();
        for (SearchHit hit : response.getHits().getHits()) {
            Map<String, Object> result = hit.getSource();
            documentation.add(new DocumentationItem(
                    result.get("subject").toString(),
                    documents.get(0),
                    result.get("path").toString()
            ));
        }
        return documentation;
    }

    @Override
    public void StoreDocuments(List<Document> documents) {
        documents.stream()
                .forEach(document -> {
                    try {

                        IndexResponse response = client.prepareIndex("bundox", "document", document.getId())
                        .setSource(jsonBuilder()
                                .startObject()
                                .field("name", document.getName())
                                .field("version", document.getVersion())
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
    public void StoreDocumentationItems(List<DocumentationItem> documentationItems) {
        documentationItems.stream()
                .forEach(documentation -> {
                    try {

                        IndexResponse response = client.prepareIndex("bundox", "documentationItem")
                        .setSource(jsonBuilder()
                                .startObject()
                                .field("subject", documentation.getSubject())
                                .field("document_id", documentation.getDocument().getId())
                                .field("path", documentation.getPath())
                                //.field("suffixes", getSuffixes(documentation.getSubject()))
                                .endObject()
                        )
                        .execute()
                        .actionGet();

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                });
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
