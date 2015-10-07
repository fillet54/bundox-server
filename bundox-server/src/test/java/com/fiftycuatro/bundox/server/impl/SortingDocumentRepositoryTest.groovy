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

    Document defaultDocument = new Document("Doc1", "1.1");
    String defaultPath = "some/path/string";

    def "delegates to backing document repository for getAllDocuments"() {
        setup:
        def allDocuments = [new Document("Doc1", "1.1"), new Document("Doc2", "3.3")]

        when:
        def documents = sortingRepo.getAllDocuments()

        then:
        1 * backingRepo.getAllDocuments() >> allDocuments
        documents == allDocuments
    }

    def "delegates to backing document repository for deleteDocument"() {
        setup:
        def docToDelete = new Document("Doc1", "1.1")

        when:
        sortingRepo.deleteDocument(docToDelete);

        then:
        1 * backingRepo.deleteDocument(docToDelete)
    }
    
    def "delegates to backing document repository for deleteDocumentation"() {
        setup:
        def docToDelete = new Document("Doc1", "1.1")

        when:
        sortingRepo.deleteDocumentation(docToDelete);

        then:
        1 * backingRepo.deleteDocumentation(docToDelete)
    }
    
    def "delegates to backing document repository for findDocumentsByName"() {
        setup:
        def someDocuments = [new Document("Doc1", "1.1"), new Document("Doc1", "4.5")]

        when:
        def documents = sortingRepo.findDocumentsByName("Doc1");

        then:
        1 * backingRepo.findDocumentsByName("Doc1") >> someDocuments
        documents == someDocuments
    }

    def "delegates to backing document repository for findDocumentsByNameAndVersion"() { setup:
        def someDocuments = [new Document("Doc1", "1.1")]

        when:
        def documents = sortingRepo.findDocumentsByNameAndVersion("Doc1", "1.1");

        then:
        1 * backingRepo.findDocumentsByNameAndVersion("Doc1", "1.1") >> someDocuments
        documents == someDocuments
    }

    def "delegates to backing document repository for storeDocuments"() {
        setup:
        def someDocuments = [new Document("Doc1", "1.1")]

        when:
        sortingRepo.storeDocuments(someDocuments);

        then:
        1 * backingRepo.storeDocuments(someDocuments)
    }
    
    def "delegates to backing document repository for storeDocumentationItems"() {
        setup:
        def someDocumentation = [new DocumentationItem("Subject", new Document("Doc1", "1.1"), "path/to/file", "Method")];

        when:
        sortingRepo.storeDocumentationItems(someDocumentation);

        then:
        1 * backingRepo.storeDocumentationItems(someDocumentation)
    }

    def "sorts searchDocumenationItems by fewest splits"() {
        setup:
        def unsortedDocItems = [
            new DocumentationItem("File_Input_Stream", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("File_Input_Str_eam", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("FileInputStream", defaultDocument, defaultPath, "Method"),
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
            new DocumentationItem("FileInputStream", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("__FileInputStream", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("_FileInputStream", defaultDocument, defaultPath, "Method"),
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
            new DocumentationItem("FileIn_putStream", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("FileInputStream", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("FileInpu_tStream", defaultDocument, defaultPath, "Method"),
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
            new DocumentationItem("FileInput", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("FileInputStreamWriter", defaultDocument, defaultPath, "Method"),
            new DocumentationItem("FileInputStream", defaultDocument, defaultPath, "Method"),
        ]

        when:
        def sortedDocItems = sortingRepo.searchDocumentation("FileInput", [defaultDocument], 10);

        then:
        1 * backingRepo.searchDocumentation("FileInput", [defaultDocument], 10) >> unsortedDocItems
        sortedDocItems == [unsortedDocItems[0], unsortedDocItems[2], unsortedDocItems[1]]
    }
}
