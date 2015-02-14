package com.fiftyquatro.bundox.server.api.v1;

import com.fiftyquatro.bundox.server.core.Document;
import com.fiftyquatro.bundox.server.core.DocumentRepository;
import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("document")
@Consumes("application/bundox.api.v1+json")
@Produces("application/bundox.api.v1+json")
public class DocumentRestfulService {

    @Inject
    DocumentRepository documentRepository;
    
    @GET
    @Path("/")
    public List<DocumentDTO> allDocuments() {
        List<DocumentDTO> results = new ArrayList<>();
        for(Document doc : documentRepository.getAllDocuments()) {
            results.add(convertToDTO(doc));
        }
        return results;
    }
    
    private DocumentDTO convertToDTO(Document doc) {
        DocumentDTO dto = new DocumentDTO();
        dto.setName(doc.getName());
        dto.setVersion(doc.getVersion());
        return dto;
    }
}
