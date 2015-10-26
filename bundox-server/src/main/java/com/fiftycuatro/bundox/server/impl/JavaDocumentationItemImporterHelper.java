package com.fiftycuatro.bundox.server.impl;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JavaDocumentationItemImporterHelper implements DocumentationItemImporterHelper {
    
    private static final Logger log = Logger.getLogger(GenericDocumentationItemImporterHelper.class.getName());
    private static final Logger logST = Logger.getLogger(GenericDocumentationItemImporterHelper.class.getName() + ".stacktrace");

    public List<String> getSupportedTypes() {
        return Arrays.asList("java"); 
    }

    public String resolveNamespace(String docSetDir, String path) {
        try {
            URI uri = new URI(path);
            String parent = Paths.get(uri.getPath()).getParent().toString();
            return parent.replaceAll("[\\/]", "."); 
        }
        catch (URISyntaxException e) {
            log.warning("Error while finding namespace");
            log.warning(e.getMessage());
        } 
        return "";
    }
}

