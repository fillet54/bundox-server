package com.fiftycuatro.bundox.server.core;

import java.util.List;
import java.util.Optional;

public interface DocumentRepository {
    public List<Document> getAllDocuments();
    public void deleteDocument(Document document);
    
    public void deleteDocumentation(Document document);
    public List<Document> findDocumentsByName(String name);
    public Optional<Document> findDocumentByNameAndVersion(String name, String version);
    
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults);
            
    public void storeDocuments(List<Document> documents);
    public void storeDocumentationItems(List<DocumentationItem> documentationItems);
}
