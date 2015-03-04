package com.fiftycuatro.bundox.server.core;

public interface DocumentInstaller {
    public void installDocumentFromDocSetArchive(Document document, String docSetArchivePath);
    public void reindex(Document document);
}
