package com.fiftycuatro.bundox.server.impl;

import spock.lang.Specification;

public class GenericNamespaceResolverTest extends Specification {

    def "namespace is title of document page"() {
        setup:
        def path = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/directory1/file1.html";
        def importer = new GenericNamespaceResolver();

        when:
        def namespace = importer.getNamespaceFor(path);

        then:
        namespace == "File1 Title";
    }
    
    def "namespace is empty string when document has no title"() {
        setup:
        def path = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/directory1/fileWithNoTitle.html";
        def importer = new GenericNamespaceResolver();

        when:
        def namespace = importer.getNamespaceFor(path);

        then:
        namespace == "";
    }
    
    def "namespace is empty string when document does not exist"() {
        setup:
        def path = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/directory1/fileThatDoesNotExist.html";
        def importer = new GenericNamespaceResolver();

        when:
        def namespace = importer.getNamespaceFor(path);

        then:
        namespace == "";
    }

    def "namespace is trimmed"() {
        setup:
        def path = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/directory1/fileThatNeedsTitleTrimmed.html";
        def importer = new GenericNamespaceResolver();

        when:
        def namespace = importer.getNamespaceFor(path);

        then:
        namespace == "Trimmed Title";
    }
    
    def "namespace is cleaned up removing extra newlines"() {
        setup:
        def path = "${TestUtilities.getExtractedDocSetPath("SomeLanguage")}/Contents/Resources/Documents/directory1/fileThatNeedsTitleCleaned.html";
        def importer = new GenericNamespaceResolver();

        when:
        def namespace = importer.getNamespaceFor(path);

        then:
        namespace == "Cleaned Title";
    }
}
