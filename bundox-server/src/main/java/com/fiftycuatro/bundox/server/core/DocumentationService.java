package com.fiftycuatro.bundox.server.core;

import java.util.List;

public interface DocumentationService { 
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults);
    public List<DocumentationItem> documentationForDocuments(List<Document> documents, int maxResults);
    
    public void installDocumentFromDocSetArchive(Document document, String docSetArchivePath);
}
