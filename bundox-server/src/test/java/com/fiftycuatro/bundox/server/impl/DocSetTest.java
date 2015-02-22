package com.fiftycuatro.bundox.server.impl;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.Assert;

public class DocSetTest {
    
    public DocSetTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    @Test
    public void returnsDatabasePathAsAnAbsolutePath() {
        String docSetPath = TestUtilities.getSomeLanguageDocSetPath();
        DocSet docSet = new DocSet(docSetPath);
        
        String expectedPath = String.format("%s/Contents/Resources/docSet.dsidx", docSetPath);
        Assert.assertEquals(expectedPath, docSet.getDatabasePath());
    }
}
