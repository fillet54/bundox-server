package com.fiftycuatro.bundox.server.impl;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GenericDocumentationItemImporterHelper implements DocumentationItemImporterHelper {
    
    private static final Logger log = Logger.getLogger(GenericDocumentationItemImporterHelper.class.getName());
    private static final Logger logST = Logger.getLogger(GenericDocumentationItemImporterHelper.class.getName() + ".stacktrace");

    private static final Pattern TITLE_TAG =
        Pattern.compile("\\<title>(.*)\\</title>", Pattern.CASE_INSENSITIVE|Pattern.DOTALL);

    public List<String> getSupportedTypes() {
        return new ArrayList<String>();
    }

    public String resolveNamespace(String docSetDir, String path) {
        try {
            URI uri = new URI(docSetDir + "/" + path);
            String content = new String(Files.readAllBytes(Paths.get(uri.getPath())));
            Matcher matcher = TITLE_TAG.matcher(content);

            if(matcher.find()) {
                return matcher.group(1).replaceAll("[\\s\\<>]+", " ").trim();
            }
        }
        catch (IOException | URISyntaxException e) {
            log.warning("Error while finding namespace");
            log.warning(e.getMessage());
        } 
        return "";
    }
}

