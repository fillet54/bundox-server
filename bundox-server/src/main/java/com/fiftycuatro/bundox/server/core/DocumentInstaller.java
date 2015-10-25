package com.fiftycuatro.bundox.server.core;

public interface DocumentInstaller {
    public Document installDocumentFromDocSetArchive(String docName, String docVersion, String docSetArchivePath);
}
