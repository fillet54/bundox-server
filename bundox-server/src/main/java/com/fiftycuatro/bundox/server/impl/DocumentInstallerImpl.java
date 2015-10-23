package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.InjectedConfiguration;
import com.fiftycuatro.bundox.server.cdi.BackingStore;
import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.util.plist.PListConfiguration;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;
import java.util.logging.Logger;

import javax.inject.Inject;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.rauschig.jarchivelib.ArchiveFormat;
import org.rauschig.jarchivelib.Archiver;
import org.rauschig.jarchivelib.ArchiverFactory;
import org.rauschig.jarchivelib.CompressionType;

public class DocumentInstallerImpl implements DocumentInstaller {

    private static final Logger log = Logger.getLogger(DocumentInstallerImpl.class.getName());
    private static final Logger logST = Logger.getLogger(DocumentInstallerImpl.class.getName() + ".stacktrace");

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
        String docSetDirPath = getDocSetDirectory(docName, docVersion);
        try {
            File archive = new File(docSetArchivePath);
            File destination = new File(destinationPath);

            Archiver archiver = ArchiverFactory.createArchiver(ArchiveFormat.TAR, CompressionType.GZIP);
            archiver.extract(archive, destination);

            ensureDocSetDirectory(destination, docSetDirPath);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return docSetDirPath;
    }

    private void ensureDocSetDirectory(File parentDir, String docSetDirPath) {
        File docSetDir = new File(docSetDirPath);
        if (!docSetDir.exists()) {
            log.info(String.format("Matching DocSet directory not found for %s", docSetDir.getName()));
            Optional<File> tmpDocSetDir = firstDocSetDir(parentDir);
            if (tmpDocSetDir.isPresent()) {
                log.info(String.format("Renaming directory %s to %s", tmpDocSetDir.get().getName(), docSetDir.getName()));
                tmpDocSetDir.get().renameTo(docSetDir);
            }
        }
    }

    private Optional<File> firstDocSetDir(File parentDir) {
        File file = null;
        File[] files = parentDir.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return new File(dir, name).isDirectory() 
                       && name.endsWith(".docset");
            }
        });
        if (files.length > 0) {
            file = files[0];
        }
        return Optional.ofNullable(file);
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
        String family = "unknown";
        String infoPlistPath = docSetDirectory + "/Contents/Info.plist";
        try {
            Configuration pList = PListConfiguration.fromPath(infoPlistPath);
            family = Optional.ofNullable(pList.getString("DocSetPlatformFamily")).orElse(family);
        } catch (ConfigurationException e) {
            log.warning("Could not read Info.plist at " + infoPlistPath); 
            log.warning(e.getMessage());
        }
        return family;
    }
}
