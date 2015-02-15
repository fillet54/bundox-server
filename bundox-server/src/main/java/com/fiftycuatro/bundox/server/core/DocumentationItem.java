package com.fiftycuatro.bundox.server.core;

import java.net.URI;
import java.util.Objects;

public class DocumentationItem {
    
    private final String subject;
    private final Document document;
    private final URI path;
    
    public DocumentationItem(String subject, Document document, URI path) {
        this.subject = subject;
        this.document = document;
        this.path = path;
    }

    public String getSubject() {
        return subject;
    }

    public Document getDocument() {
        return document;
    }

    public URI getPath() {
        return path;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 41 * hash + Objects.hashCode(this.subject);
        hash = 41 * hash + Objects.hashCode(this.document);
        hash = 41 * hash + Objects.hashCode(this.path);
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
        return true;
    }
}
