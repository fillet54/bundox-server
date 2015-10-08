package com.fiftycuatro.bundox.server.api.v1;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentationItem;

public class Transformations {
    
    public static DocumentDTO convertDocumentToDTO(Document doc) {
        DocumentDTO dto = new DocumentDTO();
        dto.setId(doc.getId());
        dto.setName(doc.getName());
        dto.setVersion(doc.getVersion());
        return dto;
    }
    
    public static DocumentationItemDTO convertDocumentationItemToDTO(DocumentationItem docItem) {
        DocumentationItemDTO dto = new DocumentationItemDTO();
        dto.setSubject(docItem.getSubject());
        dto.setDocumentId(docItem.getDocument().getId());
        dto.setPath(docItem.getPath());
        dto.setType(docItem.getType());
        return dto;
    }
}
