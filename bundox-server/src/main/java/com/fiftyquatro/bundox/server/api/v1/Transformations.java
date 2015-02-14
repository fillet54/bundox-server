package com.fiftyquatro.bundox.server.api.v1;

import com.fiftyquatro.bundox.server.core.Document;

public class Transformations {
    
    public static DocumentDTO convertDocumentToDTO(Document doc) {
        DocumentDTO dto = new DocumentDTO();
        dto.setName(doc.getName());
        dto.setVersion(doc.getVersion());
        return dto;
    }
}
