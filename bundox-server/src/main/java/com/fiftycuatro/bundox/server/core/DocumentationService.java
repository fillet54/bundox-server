package com.fiftycuatro.bundox.server.core;

import java.util.List;

public interface DocumentationService { 
    public List<Document> allDocuments();
    public List<Document> documentsByName(String name);
    public List<Document> documentsByNameAndVersion(String name, String version);
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults);
    public List<DocumentationItem> documentationForDocuments(List<Document> documents, int maxResults);
    
    public Document installDocumentFromDocSetArchive(String docName, String docVersion, String docSetArchivePath);
}
