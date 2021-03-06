package com.fiftycuatro.bundox.server.core;

import java.util.List;

public interface DocumentRepository {
    public List<Document> getAllDocuments();
    public void deleteDocument(Document document);
    
    public void deleteDocumentation(Document document);
    public List<Document> findDocumentsByName(String name);
    public List<Document> findDocumentsByNameAndVersion(String name, String version);
    
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults);
            
    public void storeDocuments(List<Document> documents);
    public void storeDocumentationItems(List<DocumentationItem> documentationItems);
}
