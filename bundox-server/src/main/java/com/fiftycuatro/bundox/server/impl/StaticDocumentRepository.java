package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StaticDocumentRepository implements DocumentRepository {

    private List<Document> _documents;
    
    public StaticDocumentRepository() {
        _documents =  new ArrayList<Document>();
        _documents.add(new Document("Java", "1.6.0"));
        _documents.add(new Document("Java", "1.7.0"));
        _documents.add(new Document(".NET", "4.5.1"));
        _documents.add(new Document("Scala", "2.11.5"));
        _documents.add(new Document("Elasticsearch", "1.7.0"));
        
        int random = (int)Math.random() % 2;
        
        if (random == 0)
            _documents.add(new Document("Random", "1.7.0"));
        else
            _documents.add(new Document("OtherRandom", "1.7.0"));
    }
    
    @Override
    public List<Document> getAllDocuments() {
        return _documents;
    }
    
    @Override
    public List<Document> findDocumentsByName(String name) {
        return _documents.stream()
                .filter(d -> d.getName().equalsIgnoreCase(name))
                .collect(Collectors.toList());
    }
    
    @Override
    public List<Document> findDocumentsByNameAndVersion(String name, String version) {
        return _documents.stream()
                .filter(d -> d.getName().equalsIgnoreCase(name))
                .filter(d -> d.getVersion().equalsIgnoreCase(version))
                .collect(Collectors.toList());
    }

    @Override
    public void StoreDocuments(List<Document> documents) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void StoreDocumentationItems(List<DocumentationItem> documentationItems) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
