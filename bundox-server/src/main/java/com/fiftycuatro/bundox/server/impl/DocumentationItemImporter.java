package com.fiftycuatro.bundox.server.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentationItem;

public class DocumentationItemImporter {

    public static final DocumentationItemImporterHelper defaultHelper = new GenericDocumentationItemImporterHelper();
    public static final List<DocumentationItemImporterHelper> helpers;

    static {
        List<DocumentationItemImporterHelper> someHelpers = new ArrayList<>();
        someHelpers.add(new JavaDocumentationItemImporterHelper());
        helpers = Collections.unmodifiableList(someHelpers);
    }

    public DocumentationItem importItem(String docSetDir, Document document, String name, String path, String type) {
        DocumentationItemImporterHelper helper = getImporterForFormatFamily(document.getFormatFamily());
        String namespace = helper.resolveNamespace(docSetDir, path);
        return new DocumentationItem(name, document, path, type, namespace);
    }


    private DocumentationItemImporterHelper getImporterForFormatFamily(String family) {
        for (DocumentationItemImporterHelper helper : helpers) {
            if (helper.getSupportedTypes().contains(family)) {
                return helper;
            }
        }
        return defaultHelper;
    }
}
