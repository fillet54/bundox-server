package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.InjectedConfiguration;
import com.fiftycuatro.bundox.server.cdi.BackingStore;
import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentRepository;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;

import javax.inject.Inject;

import org.rauschig.jarchivelib.ArchiveFormat;
import org.rauschig.jarchivelib.Archiver;
import org.rauschig.jarchivelib.ArchiverFactory;
import org.rauschig.jarchivelib.CompressionType;

public class DocumentInstallerImpl implements DocumentInstaller {

    @Inject
    @BackingStore
    private DocumentRepository documentRepository;

    @Inject
    @InjectedConfiguration(key="data_directory",
                           defaultValue="/home/vagrant/docsets")
    private String dataDirectory;

    public DocumentInstallerImpl() {
    }

    public DocumentInstallerImpl(DocumentRepository documentRepository,
            String dataDirectory) {
        this.documentRepository = documentRepository;
        this.dataDirectory = dataDirectory;
    }

    @Override
    public Document installDocumentFromDocSetArchive(String docName, String docVersion, String docSetArchivePath) {
        String docSetDir = extractDocSetArchive(docName, docVersion, docSetArchivePath);
        String docFamily = getFamilyFromDocSet(docSetDir); 
        Document document = new Document(docName, docVersion, docFamily);
        documentRepository.storeDocuments(Arrays.asList(document));
        (new SQLiteDocSetImporter(document, documentRepository, docSetDir))
                .importDocSet();
        return document;
    }
    
    @Override
    public void reindex(Document document) {
        documentRepository.deleteDocumentation(document);
        String docSetDir = getDocSetDirectory(document.getName(), document.getVersion());
        (new SQLiteDocSetImporter(document, documentRepository, docSetDir))
                .importDocSet();
    }

    private String extractDocSetArchive(String docName, String docVersion, String docSetArchivePath) {
        String destinationPath = getDestinationDirectory(docName, docVersion);
        try {
            
            File archive = new File(docSetArchivePath);
            File destination = new File(destinationPath);

            Archiver archiver = ArchiverFactory.createArchiver(ArchiveFormat.TAR, CompressionType.GZIP);
            archiver.extract(archive, destination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return getDocSetDirectory(docName, docVersion);
    }

    private String getDestinationDirectory(String docName, String docVersion) {
        String destinationPath = String.format("%s/%s/%s", dataDirectory,
                docName, docVersion);
        return destinationPath;
    }
    
    private String getDocSetDirectory(String docName, String docVersion) {
        String destinationPath = getDestinationDirectory(docName, docVersion);
        return String.format("%s/%s.docset", destinationPath, docName);
    }

    private String getFamilyFromDocSet(String docSetDirectory) {
        return "somelanguage";
    }
}
