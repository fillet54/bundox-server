package com.fiftycuatro.bundox.server.impl;

import java.net.URISyntaxException;
import org.junit.Assert;

public class TestUtilities {
   public static String getSomeLanguageDocSetPath() {
       return getDocSetPath("SomeLanguage");
   }
   
   public static String getSomeLanguageZDocSetPath() {
       return getDocSetPath("SomeLanguageZ");
   }
           
   private static String getDocSetPath(String docSetName) {
        String path = String.format("feeds_extracted/%s.docset", docSetName);
        try {
            return DocSetTest.class.getResource(path).toURI().getPath();
        }
        catch (URISyntaxException e) {
            Assert.fail(String.format("Failed to get docset path with name '%s'", docSetName));
            return null; // not possible
        }
    }
}
