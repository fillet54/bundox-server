package com.fiftycuatro.bundox.server.impl;

import java.util.List;

import org.junit.*;

import spock.lang.*;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;


public class SortingDocumentRepositoryTest extends Specification {

    DocumentRepository backingRepo = Mock(DocumentRepository)
    DocumentRepository sortingRepo = new SortingDocumentRepository(backingRepo)

    Document defaultDocument = new Document("Doc1", "1.1", "somelanguage", "index.html");
    String defaultPath = "some/path/string";
    String defaultType = "Method";
    String defaultNamespace = "Namespace";

    def "delegates to backing document repository for getAllDocuments"() {
        setup:
        def allDocuments = [docWithNameAndVersion("Doc1", "1.1"), docWithNameAndVersion("Doc1", "4.5")]

        when:
        def documents = sortingRepo.getAllDocuments()

        then:
        1 * backingRepo.getAllDocuments() >> allDocuments
        documents == allDocuments
    }

    def "delegates to backing document repository for deleteDocument"() {
        setup:
        def docToDelete = defaultDocument 

        when:
        sortingRepo.deleteDocument(docToDelete);

        then:
        1 * backingRepo.deleteDocument(docToDelete)
    }
    
    def "delegates to backing document repository for deleteDocumentation"() {
        setup:
        def docToDelete = defaultDocument 
        when:
        sortingRepo.deleteDocumentation(docToDelete);

        then:
        1 * backingRepo.deleteDocumentation(docToDelete)
    }
    
    def "delegates to backing document repository for findDocumentsByName"() {
        setup:
        def someDocuments = [docWithNameAndVersion("Doc1", "1.1"), docWithNameAndVersion("Doc1", "4.5")]

        when:
        def documents = sortingRepo.findDocumentsByName("Doc1");

        then:
        1 * backingRepo.findDocumentsByName("Doc1") >> someDocuments
        documents == someDocuments
    }

    def "delegates to backing document repository for findDocumentsByNameAndVersion"() { setup:
        def someDocument = docWithNameAndVersion("Doc1", "1.1")

        when:
        def document = sortingRepo.findDocumentsByNameAndVersion("Doc1", "1.1");

        then:
        1 * backingRepo.findDocumentsByNameAndVersion("Doc1", "1.1") >> Arrays.asList(someDocument)
        document.get(0) == someDocument
    }

    def "delegates to backing document repository for storeDocuments"() {
        setup:
        def someDocuments = [defaultDocument]

        when:
        sortingRepo.storeDocuments(someDocuments);

        then:
        1 * backingRepo.storeDocuments(someDocuments)
    }
    
    def "delegates to backing document repository for storeDocumentationItems"() {
        setup:
        def someDocumentation = [docItemWithSubject("SomeSubject")];

        when:
        sortingRepo.storeDocumentationItems(someDocumentation);

        then:
        1 * backingRepo.storeDocumentationItems(someDocumentation)
    }

    def "sorts searchDocumenationItems by fewest splits"() {
        setup:
        def unsortedDocItems = [
            docItemWithSubject("File_Input_Stream"),
            docItemWithSubject("File_Input_Str_eam"),
            docItemWithSubject("FileInputStream")
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("FileInputStream", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("FileInputStream", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[2], unsortedDocItems[0], unsortedDocItems[1]]
    }
    
    def "sorts searchDocumenationItems by start location of first matching character"() {
        setup:
        def unsortedDocItems = [
            docItemWithSubject("FileInputStream"),
            docItemWithSubject("__FileInputStream"),
            docItemWithSubject("_FileInputStream")
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("FileInputStream", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("FileInputStream", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[0], unsortedDocItems[2], unsortedDocItems[1]]
    }
    
    def "sorts searchDocumenationItems by longest matching segment "() {
        setup:
        def unsortedDocItems = [
            docItemWithSubject("In_putStream"),
            docItemWithSubject("InputStream"),
            docItemWithSubject("Inpu_tStream")
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("Input", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("Input", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[1], unsortedDocItems[2], unsortedDocItems[0]]
    }
    
    def "sorts searchDocumenationItems by shortest subject length "() {
        setup:
        def unsortedDocItems = [
            docItemWithSubject("FileInput"),
            docItemWithSubject("FileInputStreamWriter"),
            docItemWithSubject("FileInputStream")
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("FileInput", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("FileInput", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[0], unsortedDocItems[2], unsortedDocItems[1]]
    }
    
    def "sorts searchDocumenationItems by type "() {
        setup:
        def unsortedDocItems = [
            docItemWithSubjectAndType("FileInput", "Method"),
            docItemWithSubjectAndType("FileInput", "Class"),
            docItemWithSubjectAndType("FileInput", "Function")
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("FileInput", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("FileInput", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[1], unsortedDocItems[0], unsortedDocItems[2]]
    }

    def "sorts searchDocumenationItems does a lowercase compare"() {
        setup:
        def unsortedDocItems = [
            docItemWithSubject("fileInputStream"),
            docItemWithSubject("__FileinputStream"),
            docItemWithSubject("_FileInputStream")
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("FileInputStream", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("FileInputStream", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[0], unsortedDocItems[2], unsortedDocItems[1]]
    }

    def docWithNameAndVersion(name, version) {
        new Document(name, version, "somelanguge", "index.html");
    }

    def docItemWithSubject(subject) {
        new DocumentationItem(subject, defaultDocument, defaultPath, defaultType, defaultNamespace);
    }

    def docItemWithSubjectAndType(subject, type) {
        new DocumentationItem(subject, defaultDocument, defaultPath, type, defaultNamespace);
    }
}
