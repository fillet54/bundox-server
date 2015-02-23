package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import com.fiftycuatro.bundox.server.core.DocumentationService;
import java.util.Arrays;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class DocumentationServiceImpl implements DocumentationService {
    
    @Inject
    DocumentRepository documentRepository;
    
    @Inject
    DocumentInstaller documentInstaller;
    
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
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {
        return documentRepository.searchDocumentation(searchTerm, documents, maxResults);
    }

    @Override
    public List<DocumentationItem> documentationForDocuments(List<Document> documents, int maxResults) {
        return Arrays.asList();
    }

    @Override
    public void installDocumentFromDocSetArchive(Document document, String docSetArchivePath) {
        documentInstaller.installDocumentFromDocSetArchive(document, docSetArchivePath);
    }
}
