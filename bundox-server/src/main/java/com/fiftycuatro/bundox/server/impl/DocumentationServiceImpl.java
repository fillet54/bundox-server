package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.InjectedConfiguration;
import com.fiftycuatro.bundox.server.cdi.SortingStore;
import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import com.fiftycuatro.bundox.server.core.DocumentationService;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class DocumentationServiceImpl implements DocumentationService {

    @Inject
    @SortingStore
    DocumentRepository documentRepository;

    @Inject
    DocumentInstaller documentInstaller;

    @Inject
    @InjectedConfiguration(key = "bundox.deployed.root")
    private String rootPath;
    
    @Inject
    @InjectedConfiguration(key = "bundox.static.path",
                           defaultValue = "static/documentation")
    private String staticPath;

    public DocumentationServiceImpl() {
    }

    public DocumentationServiceImpl(DocumentRepository documentRepository,
            DocumentInstaller documentInstaller) {
        this();
        this.documentRepository = documentRepository;
        this.documentInstaller = documentInstaller;
    }

    @PostConstruct
    public void init() {
    }

    @Override
    public List<Document> allDocuments() {
        return rewriteIndexPaths(
                documentRepository.getAllDocuments());
    }

    @Override
    public List<Document> documentsByName(String name) {
        return rewriteIndexPaths(
                documentRepository.findDocumentsByName(name));
    }

    @Override
    public List<Document> documentsByNameAndVersion(String name, String version) {
        return rewriteIndexPaths(
                documentRepository.findDocumentsByNameAndVersion(name, version));
    }

    public List<Document> rewriteIndexPaths(List<Document> documents) {
        return documents.stream()
            .map(d -> rewriteDocumentIndexPath(d))
            .collect(Collectors.toList());
    }
    
    private Document rewriteDocumentIndexPath(Document original) {
        String rewritePath = String.format("/%s/%s/%s/%s/%s", 
                rootPath, staticPath, original.getName(), original.getVersion(), original.getIndexPath());
        return new Document(original.getName(), original.getVersion(), original.getFamily(), rewritePath);
    }

    @Override
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {
        return documentRepository.searchDocumentation(searchTerm, documents, maxResults).stream()
                .map(d -> rewriteDocumentationPath(d))
                .collect(Collectors.toList());
    }

    private DocumentationItem rewriteDocumentationPath(DocumentationItem original) {
        String name = original.getDocument().getName();
        String version = original.getDocument().getVersion();
        String rewritePath = String.format("/%s/%s/%s/%s/%s", 
                rootPath, staticPath, name, version, original.getPath());
        return new DocumentationItem(original.getSubject(), original.getDocument(), rewritePath, original.getType());
    }

    @Override
    public List<DocumentationItem> documentationForDocuments(List<Document> documents, int maxResults) {
        return Arrays.asList();
    }

    @Override
    public Document installDocumentFromDocSetArchive(String docName, String docVersion, String docSetArchivePath) {
        return documentInstaller.installDocumentFromDocSetArchive(docName, docVersion, docSetArchivePath);
    }
}
