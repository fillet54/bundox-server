package com.fiftycuatro.bundox.server.core;

import java.util.Objects;

public class DocumentationItem {
    
    private final String subject;
    private final Document document;
    private final String path;
    private final String type;
    private final String namespace;
    
    public DocumentationItem(String subject, Document document, String path, String type, String namespace) {
        this.subject = subject;
        this.document = document;
        this.path = path;
        this.type = type;
        this.namespace = namespace;
    }

    public String getSubject() {
        return subject;
    }

    public Document getDocument() {
        return document;
    }

    public String getPath() {
        return path;
    }

    public String getType() {
        return type;
    }

    public String getNamespace() {
        return namespace;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 41 * hash + Objects.hashCode(this.subject);
        hash = 41 * hash + Objects.hashCode(this.document);
        hash = 41 * hash + Objects.hashCode(this.path);
        hash = 41 * hash + Objects.hashCode(this.type);
        hash = 41 * hash + Objects.hashCode(this.namespace);
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
        final DocumentationItem other = (DocumentationItem) obj;
        if (!Objects.equals(this.subject, other.subject)) {
            return false;
        }
        if (!Objects.equals(this.document, other.document)) {
            return false;
        }
        if (!Objects.equals(this.path, other.path)) {
            return false;
        }
        if (!Objects.equals(this.type, other.type)) {
            return false;
        }
        if (!Objects.equals(this.namespace, other.namespace)) {
            return false;
        }
        return true;
    }
}
