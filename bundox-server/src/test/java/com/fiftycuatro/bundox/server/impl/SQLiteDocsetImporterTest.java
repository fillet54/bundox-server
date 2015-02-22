package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mockito.ArgumentMatcher;
import static org.mockito.Matchers.argThat;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class SQLiteDocsetImporterTest {

    private Document document;

    public SQLiteDocsetImporterTest() {
        document = new Document("SomeLanguage", "1.1.1");
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
        DocSet docSet = new DocSet(TestUtilities.getSomeLanguageDocSetPath());
        canImportFromDocSet(docSet);
    }

    @Test
    public void canImportFromZFormatDocSet() {
        DocSet docSet = new DocSet(TestUtilities.getSomeLanguageZDocSetPath());
        canImportFromDocSet(docSet);
    }

    private void canImportFromDocSet(DocSet docSet) {
        DocumentRepository docRepo = Mockito.mock(DocumentRepository.class);
        SQLiteDocSetImporter importer = new SQLiteDocSetImporter(document, docSet, docRepo);

        importer.importDocSet();

        verify(docRepo).StoreDocumentationItems(argThat(isListOfAllDocumentationItems()));
    }

    private IsListOfAllDocumentationItems isListOfAllDocumentationItems() {
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
            all.add(new DocumentationItem("someFunction(int x)", document, "index.html#someFunctionAnchor"));
            all.add(new DocumentationItem("someOtherFunction()", document, "index.html#someOtherFunctionAnchor"));
            all.add(new DocumentationItem("oneMoreFunction()", document, "directory1/file1.html#anotherAnchor"));
            return all;
        }
    }
}
