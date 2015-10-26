package com.fiftycuatro.bundox.server.impl;

import spock.lang.Specification;

public class GenericDocumentationItemImporterHelperTest extends Specification {

    def docSetPath = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/"

    def "support types is empty"() {
        setup:
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def supportedTypes = importer.getSupportedTypes();

        then:
        supportedTypes.size() == 0; 
    }

    def "namespace is title of document page"() {
        setup:
        def path = "directory1/file1.html";
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "File1 Title";
    }
   
    def "anchors are supported on path"() {
        setup:
        def path = "directory1/file1.html#someanchor";
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "File1 Title";
    }

    def "namespace is empty string when document has no title"() {
        setup:
        def path = "directory1/fileWithNoTitle.html";
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "";
    }
    
    def "namespace is empty string when document does not exist"() {
        setup:
        def path = "directory1/fileThatDoesNotExist.html";
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "";
    }

    def "namespace is trimmed"() {
        setup:
        def path = "directory1/fileThatNeedsTitleTrimmed.html";
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "Trimmed Title";
    }
    
    def "namespace is cleaned up removing extra newlines"() {
        setup:
        def path = "directory1/fileThatNeedsTitleCleaned.html";
        def importer = new GenericDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "Cleaned Title";
    }
}
