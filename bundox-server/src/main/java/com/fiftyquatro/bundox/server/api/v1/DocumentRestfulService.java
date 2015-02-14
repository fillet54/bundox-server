package com.fiftyquatro.bundox.server.api.v1;

import com.fiftyquatro.bundox.server.core.DocumentRepository;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("document")
@Api(value = "/v1/document", description = "Main endpoint for Code Docs")
@Consumes("application/bundox.api.v1+json")
@Produces("application/bundox.api.v1+json")
public class DocumentRestfulService {

    @Inject
    DocumentRepository documentRepository;

    @GET
    @Path("/")
    @ApiOperation(value = "Get All Documents", notes = "All documents that are avaliable and indexed to be searched",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> allDocuments() {
        return documentRepository.getAllDocuments().stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());
    }
}
