package com.fiftycuatro.bundox.server.impl;

import spock.lang.Specification;

public class JavaDocumentationItemImporterHelperTest extends Specification {

    def docSetPath = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/"

    def "support types is java"() {
        setup:
        def importer = new JavaDocumentationItemImporterHelper();

        when:
        def supportedTypes = importer.getSupportedTypes();

        then:
        supportedTypes.size() == 1;
        supportedTypes.get(0) == "java"; 
    }

    def "namespace is package which is the path to the file"() {
        setup:
        def path = "com/fiftycuatro/test/file1.html";
        def importer = new JavaDocumentationItemImporterHelper();

        when:
        def namespace = importer.resolveNamespace(docSetPath, path);

        then:
        namespace == "com.fiftycuatro.test.file1";
    }
}
