package com.fiftycuatro.bundox.server.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GenericNamespaceResolver {
    
    private static final Logger log = Logger.getLogger(GenericNamespaceResolver.class.getName());
    private static final Logger logST = Logger.getLogger(GenericNamespaceResolver.class.getName() + ".stacktrace");

    private static final Pattern TITLE_TAG =
        Pattern.compile("\\<title>(.*)\\</title>", Pattern.CASE_INSENSITIVE|Pattern.DOTALL);

    public String getNamespaceFor(String path) {
        try {
            log.info(path);
            String content = new String(Files.readAllBytes(Paths.get(path)));
            Matcher matcher = TITLE_TAG.matcher(content);

            if(matcher.find()) {
                return matcher.group(1).replaceAll("[\\s\\<>]+", " ").trim();
            }
        }
        catch (IOException e) {
            log.warning("Error while finding namespace");
            log.warning(e.getMessage());
        }
        return "";
    }
}




