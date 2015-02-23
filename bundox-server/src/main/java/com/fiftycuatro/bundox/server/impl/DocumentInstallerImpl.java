package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.InjectedConfiguration;
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
    private DocumentRepository documentRepository;

    @Inject
    @InjectedConfiguration(key="data_directory",
                           defaultValue="/vagrant/docsets")
    private String dataDirectory;

    public DocumentInstallerImpl() {
    }

    public DocumentInstallerImpl(DocumentRepository documentRepository,
            String dataDirectory) {
        this.documentRepository = documentRepository;
        this.dataDirectory = dataDirectory;
    }

    @Override
    public void installDocumentFromDocSetArchive(Document document, String docSetArchivePath) {
        documentRepository.StoreDocuments(Arrays.asList(document));
        String extractedPath = extractDocSetArchive(document, docSetArchivePath);
        (new SQLiteDocSetImporter(document, documentRepository, extractedPath))
                .importDocSet();
    }

    private String extractDocSetArchive(Document document, String docSetArchivePath) {
        String destinationPath = String.format("%s/%s/%s", dataDirectory,
                    document.getName(), document.getVersion());
        try {
            
            File archive = new File(docSetArchivePath);
            File destination = new File(destinationPath);

            Archiver archiver = ArchiverFactory.createArchiver(ArchiveFormat.TAR, CompressionType.GZIP);
            archiver.extract(archive, destination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return String.format("%s/%s.docset", destinationPath, document.getName());
    }
}
