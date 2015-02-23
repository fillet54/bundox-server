/*
 * Copyright 2015 phillip.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.fiftycuatro.bundox.server.impl;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import java.util.Arrays;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author phillip
 */
public class DocumentRepositoryTest {

    public DocumentRepositoryTest() {
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

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    //@Test
  
    public void hello() {
        DocumentRepositoryImpl repo = new DocumentRepositoryImpl();
        String dataDirectory = TestUtilities.getTempDirWithDeleteOnExit();
        DocumentInstaller installer = new DocumentInstallerImpl(repo, dataDirectory);
        Document document = new Document("SomeLanguage", "1.0.0");

        //installer.installDocumentFromDocSetArchive(document, TestUtilities.getSomeLanguageDocSetArchivePath());

        List<Document> allDocs = repo.getAllDocuments();
        List<Document> byName = repo.findDocumentsByName("SomeLanguage");
        List<Document> byNameNo = repo.findDocumentsByName("SomeLanguageZ");
        List<Document> byNameVer = repo.findDocumentsByNameAndVersion("SomeLanguage", "1.0.0");
        List<Document> byNameVerNo = repo.findDocumentsByNameAndVersion("SomeLanguage", "1.0.1");
        List<DocumentationItem> docItem = repo.searchDocumentation("somein", Arrays.asList(document), 10);
        List<DocumentationItem> docItem2 = repo.searchDocumentation("1some", Arrays.asList(document), 10);
        Assert.assertTrue(allDocs.contains(document));
    }
}
