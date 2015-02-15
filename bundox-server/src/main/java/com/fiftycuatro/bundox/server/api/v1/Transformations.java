package com.fiftycuatro.bundox.server.api.v1;

import com.fiftycuatro.bundox.server.core.Document;

public class Transformations {
    
    public static DocumentDTO convertDocumentToDTO(Document doc) {
        DocumentDTO dto = new DocumentDTO();
        dto.setName(doc.getName());
        dto.setVersion(doc.getVersion());
        return dto;
    }
}
