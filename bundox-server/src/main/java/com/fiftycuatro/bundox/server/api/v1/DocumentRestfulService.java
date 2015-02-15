package com.fiftycuatro.bundox.server.api.v1;

import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import com.fiftycuatro.bundox.server.core.DocumentationService;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("documents")
@Api(value = "/v1/documents", description = "All documents that have had their documentation indexed for searching")
@Consumes("application/bundox.api.v1+json")
@Produces("application/bundox.api.v1+json")
public class DocumentRestfulService {

    @Inject
    DocumentRepository documentRepository;
    
    @Inject
    DocumentationService documentationService;

    @GET
    @Path("/")
    @ApiOperation(value = "Get all documents", notes = "All documents that are avaliable",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> allDocuments() {
        return documentRepository.getAllDocuments().stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());
    }
    
    @GET
    @Path("/{name}")
    @ApiOperation(value ="Documents by name", notes = "All documents that have the passed in name",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> findDocumentsByName(
        @ApiParam(value = "Name of documents to fetch", required = true) @PathParam("name") String name) {
        return documentRepository.findDocumentsByName(name).stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());
    }
    
    @GET
    @Path("/{name}/{version}")
    @ApiOperation(value ="Documentats by name and version", notes = "Documents always have a name and a version",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> findDocumentsById(
        @ApiParam(value = "Name of documents to fetch", required = true) @PathParam("name") String name,
        @ApiParam(value = "Version of named documents", required = true) @PathParam("version") String version) {
        return documentRepository.findDocumentsByNameAndVersion(name, version).stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());   
    }
    
    @GET
    @Path("/{name}/{version}/documentation")
    @ApiOperation(value ="Documentation for specific documents", notes = "Gets all documentation in all documents with matching name and version",
            response = DocumentationItemDTO.class, responseContainer = "List" )
    public List<DocumentationItemDTO> documentationByNameAndVersion(
        @ApiParam(value = "Name of documents to fetch", required = true) @PathParam("name") String name,
        @ApiParam(value = "Version of named documents", required = true) @PathParam("version") String version,
        @ApiParam(value = "Max number of results", required = false, defaultValue="50") @DefaultValue("50") @QueryParam("maxResults") int maxResults,
        @ApiParam(value = "Search Term for documentation", required = false) @DefaultValue("") @QueryParam("searchTerm") String searchTerm) {
        List<Document> docs = documentRepository.findDocumentsByNameAndVersion(name, version);
        
        return getDocumentation(docs, searchTerm, maxResults);
    }
    
    @GET
    @Path("/documentation")
    @ApiOperation(value ="Documentation for specific documents", notes = "Gets all documentation in all documents with matching name and version",
            response = DocumentationItemDTO.class, responseContainer = "List")
    public List<DocumentationItemDTO> searchDocumentation(
        @ApiParam(value = "Max number of results", required = false, defaultValue="50") @DefaultValue("50") @QueryParam("maxResults") int maxResults,
        @ApiParam(value = "Search Term for documentation", required = false) @DefaultValue("") @QueryParam("searchTerm") String searchTerm) {
        List<Document> allDocs = documentRepository.getAllDocuments();
        
        return getDocumentation(allDocs, searchTerm, maxResults);
    }
    
    private List<DocumentationItemDTO> getDocumentation(List<Document> docs, String searchTerm, int maxResults) {
        Stream<DocumentationItem> documentationStream;
        if (searchTerm.isEmpty())
            documentationStream = documentationService.documentationForDocuments(docs, maxResults).stream();
        else
            documentationStream = documentationService.searchDocumentation(searchTerm, docs, maxResults).stream();
        
        return documentationStream
                .map(Transformations::convertDocumentationItemToDTO)
                .collect(Collectors.toList());
    }
}
