package com.fiftycuatro.bundox.server.core;

import java.util.Objects;

public class Document {
    private String name;
    private String version;
    private String family;
    
    public Document(String name, String version, String family) {
        this.name = name;
        this.version = version;
        this.family = family;
    }
    
    public String getId() {
        return name + "_" + version;
    }
    
    public String getName() {
        return name;
    }

    public String getVersion() {
        return version;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 53 * hash + Objects.hashCode(this.name);
        hash = 53 * hash + Objects.hashCode(this.version);
        hash = 53 * hash + Objects.hashCode(this.family);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Document other = (Document) obj;
        if (!Objects.equals(this.name, other.name)) {
            return false;
        }
        if (!Objects.equals(this.version, other.version)) {
            return false;
        }
        if (!Objects.equals(this.family, other.family)) {
            return false;
        }
        return true;
    } 
}
