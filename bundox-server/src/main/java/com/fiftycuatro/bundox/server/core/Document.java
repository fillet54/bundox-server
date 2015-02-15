package com.fiftycuatro.bundox.server.core;

public class Document {
    private String name;
    private String version;
    
    public Document(String name, String version) {
        this.name = name;
        this.version = version;
    }
    
        public String getName() {
        return name;
    }

    public String getVersion() {
        return version;
    }
}
