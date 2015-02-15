package com.fiftycuatro.bundox.server.core;

import java.util.ArrayList;
import java.util.List;

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
}
