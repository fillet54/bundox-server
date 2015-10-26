package com.fiftycuatro.bundox.server.impl;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

public class JavaDocumentationItemImporterHelper implements DocumentationItemImporterHelper {
    
    private static final Logger log = Logger.getLogger(GenericDocumentationItemImporterHelper.class.getName());
    private static final Logger logST = Logger.getLogger(GenericDocumentationItemImporterHelper.class.getName() + ".stacktrace");

    public List<String> getSupportedTypes() {
        return Arrays.asList("java"); 
    }

    public String resolveNamespace(String docSetDir, String path) {
        try {
            URL url = new URL("file:///" + path);
            String parent = url.getPath().toString().replaceAll(".html", "").substring(1);
            return parent.replaceAll("[\\/]", "."); 
        }
        catch (MalformedURLException e) {
            log.warning("Error while finding namespace");
            log.warning(e.getMessage());
        } 
        return "";
    }
}

