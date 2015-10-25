package com.fiftycuatro.bundox.server.impl;

import java.util.List;

public interface DocumentationItemImporterHelper {
   
    List<String> getSupportedTypes();
    String resolveNamespace(String documentationPagePath);
}
