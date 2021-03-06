package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import junit.framework.Assert;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mockito.ArgumentMatcher;
import static org.mockito.Matchers.argThat;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class DocumentInstallerImplTest {

    public DocumentInstallerImplTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    @Test
    public void canImportFromDashFormatDocSet() {
        Document document = new Document("SomeLanguage", "1.1.1", "platform1", "index.html", "somelanguage");
        canImportFromDocSet(document, TestUtilities.getSomeLanguageDocSetArchivePath());
    }

    @Test
    public void canImportFromZFormatDocSet() {
        Document document = new Document("SomeLanguageZ", "1.1.1", "platform1", "index.html", "somelanguagez");
        canImportFromDocSet(document, TestUtilities.getSomeLanguageZDocSetArchivePath());
    }
    
    @Test
    public void canImportFromDocSetWithNameNotMatchingArchiveDocsetName() {
        Document document = new Document("SomeLanguage", "1.1.1", "platform1", "index.html", "somelanguage");
        canImportFromDocSet(document, TestUtilities.getSomeLanguageDocSetArchivePath());
    }

    private void canImportFromDocSet(Document document, String archivePath) {
        DocumentRepository docRepo = Mockito.mock(DocumentRepository.class);
        String dataDirectory = TestUtilities.getTempDirWithDeleteOnExit();
        DocumentInstallerImpl installer = new DocumentInstallerImpl(docRepo, dataDirectory, new DocumentationItemImporter());

        installer.installDocumentFromDocSetArchive(document.getName(), document.getVersion(), archivePath);

        verify(docRepo).storeDocuments(argThat(isListOfDocument(document)));
        verify(docRepo).storeDocumentationItems(argThat(isListOfAllDocumentationItems(document)));
        assertDocSetWasExtractedToCorrectLocationOnDisk(document, dataDirectory);
    }
    
    private void assertDocSetWasExtractedToCorrectLocationOnDisk(Document document, String dataDirectory) {
        String expectedDocSetPath = String.format("%s/%s/%s/%s.docset",
                dataDirectory, document.getName(), document.getVersion(), 
                document.getName());
        Assert.assertTrue((new File(expectedDocSetPath)).exists());
    }

    
    private IsListOfAllDocumentationItems isListOfAllDocumentationItems(Document document) {
        return new IsListOfAllDocumentationItems(document);
    }

    class IsListOfAllDocumentationItems extends ArgumentMatcher<List> {

        private Document document;

        public IsListOfAllDocumentationItems(Document document) {
            this.document = document;
        }

        public boolean matches(Object list) {
            List items = (List) list;
            Set itemSet = new HashSet();
            itemSet.addAll(items);
            Set all = allDocumentationItemSet();
            return itemSet.equals(allDocumentationItemSet());
        }

        private Set allDocumentationItemSet() {
            Set all = new HashSet();
            all.add(new DocumentationItem("someFunction(int x)", document, "index.html#someFunctionAnchor", "Method", "Index" ));
            all.add(new DocumentationItem("someOtherFunction()", document, "index.html#someOtherFunctionAnchor", "Method", "Index"));
            all.add(new DocumentationItem("oneMoreFunction()", document, "directory1/file1.html#anotherAnchor", "Method", "File1"));
            return all;
        }
    }
    
    private IsListOfDocument isListOfDocument(Document document) {
        return new IsListOfDocument(document);
    }
    
    class IsListOfDocument extends ArgumentMatcher<List> {

        private Document document;

        public IsListOfDocument(Document document) {
            this.document = document;
        }

        public boolean matches(Object list) {
            List items = (List) list;
            List documentList = new ArrayList();
            documentList.add(document);
            return items.equals(documentList);
        }

    }
}
