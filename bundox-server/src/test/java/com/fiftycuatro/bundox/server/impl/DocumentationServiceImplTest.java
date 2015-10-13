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

import com.fiftycuatro.bundox.server.core.DocumentInstaller;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationService;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

/**
 *
 * @author phillip
 */
public class DocumentationServiceImplTest {
    
    public DocumentationServiceImplTest() {
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
    public void installsDocSetFromArchiveUsingDocumentInstaller() {
        DocumentRepository repository = Mockito.mock(DocumentRepository.class);
        DocumentInstaller installer = Mockito.mock(DocumentInstaller.class);
        DocumentationService service = new DocumentationServiceImpl(repository, installer);
        
        service.installDocumentFromDocSetArchive("SomeLanguage", "1.0.0", "some_archive_path.tgz");
        
        verify(installer).installDocumentFromDocSetArchive("SomeLanguage", "1.0.0", "some_archive_path.tgz");
    }
}
