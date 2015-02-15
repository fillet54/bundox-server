package com.fiftycuatro.bundox.server.api.v1;

public class DocumentDTO {
    private String id;
    private String name;
    private String version;

    public DocumentDTO() { }
    
    public DocumentDTO(String id, String name, String version) {
        this.id = id;
        this.name = name;
        this.version  = version;
    }
    
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
