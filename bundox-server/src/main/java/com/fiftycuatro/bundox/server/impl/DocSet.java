package com.fiftycuatro.bundox.server.impl;

public class DocSet {
    
   private String docSetPath;
   
   public DocSet(String docSetPath) {
       this.docSetPath = docSetPath;
   }
   
   public String getDatabasePath() {
     return String.format("%s/Contents/Resources/docSet.dsidx", docSetPath);
   }
}
