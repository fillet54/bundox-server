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
        helpers = Collections.unmodifiableList(someHelpers);
    }

    public DocumentationItem importItem(String docSetDir, Document document, String name, String path, String type) {
        return new DocumentationItem(name, document, path, type);
    }


    private void getImporterForType() {
    }
}
