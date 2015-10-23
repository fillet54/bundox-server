package com.fiftycuatro.bundox.server.core;

import java.util.Objects;

public class Document {
    private String name;
    private String version;
    private String family;
    private String indexPath;
    
    public Document(String name, String version, String family, String indexPath) {
        this.name = name;
        this.version = version;
        this.family = family;
        this.indexPath = indexPath;
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

    public String getFamily() {
        return family;
    }

    public String getIndexPath() {
        return indexPath;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 53 * hash + Objects.hashCode(this.name);
        hash = 53 * hash + Objects.hashCode(this.version);
        hash = 53 * hash + Objects.hashCode(this.family);
        hash = 53 * hash + Objects.hashCode(this.indexPath);
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
        if (!Objects.equals(this.indexPath, other.indexPath)) {
            return false;
        }
        return true;
    } 
}
