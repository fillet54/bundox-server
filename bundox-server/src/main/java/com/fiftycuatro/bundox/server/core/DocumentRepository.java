package com.fiftycuatro.bundox.server.core;

import java.util.List;
import javax.inject.Singleton;

@Singleton
public interface DocumentRepository {
    public List<Document> getAllDocuments();
    public List<Document> findDocumentsByName(String name);
    public List<Document> findDocumentsByNameAndVersion(String name, String version);
}
