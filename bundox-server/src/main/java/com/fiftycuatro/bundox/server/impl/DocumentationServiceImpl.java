package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import com.fiftycuatro.bundox.server.core.DocumentationService;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class DocumentationServiceImpl implements DocumentationService{
    private final Map<Document, List<DocumentationItem>> _documentation;
    
    @Inject
    DocumentRepository documentRepository;
    
    @Inject
    DocumentInstaller documentInstaller;
    
    public DocumentationServiceImpl() {
        _documentation = new HashMap<>();
    }
    
    public DocumentationServiceImpl(DocumentRepository documentRepository, 
            DocumentInstaller documentInstaller) {
        this();
        this.documentRepository = documentRepository;
        this.documentInstaller = documentInstaller;
    }
    
    @PostConstruct
    public void init() {
        generateStaticDocumentation();
    }
    
    private void generateStaticDocumentation() {
        documentRepository.getAllDocuments().stream()
         .forEach(d -> {
             _documentation.put(d, createDocumentation(d));
         });
    }
    
    private List<DocumentationItem> createDocumentation(Document document) {
        try {
            switch (document.getId().toLowerCase()) {
                case "java_1.6.0":
                    return Arrays.asList(
                            new DocumentationItem("System.out.println", document, createPath("documents/java/1.6.0/System.html#println")),
                            new DocumentationItem("File.WriteFile", document, createPath("documents/java/1.6.0/File.html#println")),
                            new DocumentationItem("MyDocuments", document, createPath("documents/java/1.6.0/My.html#println")));
                case "java_1.7.0":
                    return Arrays.asList(
                            new DocumentationItem("System.out.println", document, createPath("documents/java/1.7.0/System.html#println")),
                            new DocumentationItem("File.WriteFile", document, createPath("documents/java/1.7.0/File.html#println")),
                            new DocumentationItem("MyDocuments", document, createPath("documents/java/1.7.0/My.html#println")));
                default:
                    return Arrays.asList(
                            new DocumentationItem("System.out.println", document, createPath("documents/scala/2.11.5/System.html#println")),
                            new DocumentationItem("File.WriteFile", document, createPath("documents/scala/2.11.5/File.html#println")),
                            new DocumentationItem("MyDocuments", document, createPath("documents/scala/2.11.5/My.html#println")));
            }
        }
        catch (Exception e) {
            return Arrays.asList();
        }
    }

    private String createPath(String relativePath) {
        return String.format("/static/%s", relativePath);
    }
    
    @Override
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {
        return documents.stream()
                .map(d -> documentationForDocuments(Arrays.asList(d), maxResults))
                .flatMap(d -> d.stream())
                .filter(d -> d.getSubject().contains(searchTerm))
                .collect(Collectors.toList());
    }

    @Override
    public List<DocumentationItem> documentationForDocuments(List<Document> documents, int maxResults) {
        return documents.stream()
                .map(d -> _documentation.get(d))
                .flatMap(d -> d.stream())
                .collect(Collectors.toList());
    }

    @Override
    public void installDocumentFromDocSetArchive(Document document, String docSetArchivePath) {
        documentInstaller.installDocumentFromDocSetArchive(document, docSetArchivePath);
    }
}
