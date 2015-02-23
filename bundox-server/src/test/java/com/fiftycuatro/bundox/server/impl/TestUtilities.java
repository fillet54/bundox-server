package com.fiftycuatro.bundox.server.impl;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;

public class TestUtilities {

    public static String getSomeLanguageDocSetArchivePath() {
        return getDocSetArchivePath("SomeLanguage");
    }

    public static String getSomeLanguageZDocSetArchivePath() {
        return getDocSetArchivePath("SomeLanguageZ");
    }

    private static String getDocSetArchivePath(String docSetName) {
        String path = String.format("feeds/%s.tgz", docSetName);
        return getTestResourcePath(path);
    }

    public static String getSomeLanguageExtractedDocSetPath() {
        return getExtractedDocSetPath("SomeLanguage");
    }

    public static String getSomeLanguageZExtractedDocSetPath() {
        return getExtractedDocSetPath("SomeLanguageZ");
    }

    private static String getExtractedDocSetPath(String docSetName) {
        String path = String.format("feeds_extracted/%s.docset", docSetName);
        return getTestResourcePath(path);
    }

    private static String getTestResourcePath(String path) {
        try {
            return TestUtilities.class.getResource(path).toURI().getPath();
        } catch (URISyntaxException e) {
            Assert.fail(String.format("Failed to get test resource path '%s'", path));
            return null; // not possible
        }
    }

    public static String getTempDirWithDeleteOnExit() {
        try {
            final Path tempDir = Files.createTempDirectory(null);

            Runtime.getRuntime().addShutdownHook(new Thread() {
                @Override
                public void run() {
                    try {
                        FileUtils.deleteDirectory(tempDir.toFile());
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });
            return tempDir.toString();

        } catch (IOException e) {
            e.printStackTrace();
        }
        Assert.fail("Could not create a temp directory");
        return null; // Not possible due to assert.
    }
}
