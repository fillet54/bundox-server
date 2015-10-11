package com.fiftycuatro.bundox.server.api.v1;

import com.fiftycuatro.bundox.server.InjectedConfiguration;
import com.fiftycuatro.bundox.server.cdi.SortingStore;
import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import com.fiftycuatro.bundox.server.core.DocumentationService;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

@Path("documents")
@Api(value = "/v1/documents", description = "All documents that have had their documentation indexed for searching")
@Produces("application/bundox.api.v1+json")
public class DocumentRestfulService {

    @Inject
    @SortingStore
    DocumentRepository documentRepository;

    @Inject
    DocumentationService documentationService;

    @Inject
    @InjectedConfiguration(key="upload_file_path",
                           defaultValue="/vagrant/uploads")
    String uploadDirectory;
    
    @GET
    @Path("/")
    @ApiOperation(value = "Get all documents", notes = "All documents that are avaliable",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> documentIndex() {
        return documentRepository.getAllDocuments().stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());
    }

    @GET
    @Path("/{name}")
    @ApiOperation(value = "Documents by name", notes = "All documents that have the passed in name",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> documentsByName(
            @ApiParam(value = "Name of documents to fetch", required = true) @PathParam("name") String name) {
        return documentRepository.findDocumentsByName(name).stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());
    }

    @GET
    @Path("/{name}/{version}")
    @ApiOperation(value = "Documents by name and version", notes = "Documents always have a name and a version",
            response = DocumentDTO.class, responseContainer = "List")
    public List<DocumentDTO> documentByNameAndVersion(
            @ApiParam(value = "Name of documents to fetch", required = true) @PathParam("name") String name,
            @ApiParam(value = "Version of named documents", required = true) @PathParam("version") String version,
            @ApiParam(value = "Whether to re-index document", required = false, defaultValue="false") @DefaultValue("false") @QueryParam("reindex") boolean reindex) {
        
        Optional<Document> document = documentRepository.findDocumentByNameAndVersion(name, version);
        
        List<Document> documents = new ArrayList<>();
        if (document.isPresent()) {
            documents.add(document.get());
        }
        
        if (reindex) {
            documents.stream()
                    .forEach(doc -> documentationService.reindexDocument(doc));
        }

        return documents.stream()
                .map(Transformations::convertDocumentToDTO)
                .collect(Collectors.toList());
    }

    @PUT
    @Path("/{name}/{version}")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @ApiOperation(value = "Documentats by name and version", notes = "Documents always have a name and a version",
            response = DocumentDTO.class)
    public Response createDocument(
            @ApiParam(value = "Name of document", required = true) @PathParam("name") String name,
            @ApiParam(value = "Version of document", required = true) @PathParam("version") String version,
            @ApiParam(value = "DocSet tgz archive", required = true) @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail) {
        
        String archivePath = String.format("%s/%s_%s.tgz", uploadDirectory, name, version);
        writeToFile(uploadedInputStream, archivePath);
        Document document = documentationService.installDocumentFromDocSetArchive(name, version, archivePath);
        return Response.status(Response.Status.OK).entity(Transformations.convertDocumentToDTO(document)).build();
    }
    
    @DELETE
    @Path("/{name}/{version}")
    @ApiOperation(value = "Documents by name and version", notes = "Documents always have a name and a version",
            response = DocumentDTO.class)
    public DocumentDTO deleteDocument(
            @ApiParam(value = "Name of document", required = true) @PathParam("name") String name,
            @ApiParam(value = "Version of document", required = true) @PathParam("version") String version) {
        
        Optional<Document> document = documentRepository.findDocumentByNameAndVersion(name, version);

        if (document.isPresent()) {
            documentRepository.deleteDocument(document.get());
            return Transformations.convertDocumentToDTO(document.get());
        } else {
            return null;
        }
    }
    
    @GET
    @Path("/{name}/{version}/documentation")
    @ApiOperation(value = "Documentation for specific documents", notes = "Gets all documentation in all documents with matching name and version",
            response = DocumentationItemDTO.class, responseContainer = "List")
    public List<DocumentationItemDTO> documentationByNameAndVersion(
            @ApiParam(value = "Name of documents to fetch", required = true) @PathParam("name") String name,
            @ApiParam(value = "Version of named documents", required = true) @PathParam("version") String version,
            @ApiParam(value = "Max number of results", required = false, defaultValue = "50") @DefaultValue("50") @QueryParam("maxResults") int maxResults,
            @ApiParam(value = "Search Term for documentation", required = false) @DefaultValue("") @QueryParam("searchTerm") String searchTerm) {
        Optional<Document> document = documentRepository.findDocumentByNameAndVersion(name, version);

        if (document.isPresent()) {
            return getDocumentation(Arrays.asList(document.get()), searchTerm, maxResults);
        } else {
            return new ArrayList<DocumentationItemDTO>();
        }
    }

    @GET
    @Path("/documentation")
    @ApiOperation(value = "Documentation for specific documents", notes = "Gets all documentation in all documents with matching name and version",
            response = DocumentationItemDTO.class, responseContainer = "List")
    public List<DocumentationItemDTO> searchDocumentation(
            @ApiParam(value = "Max number of results", required = false, defaultValue = "50") @DefaultValue("50") @QueryParam("maxResults") int maxResults,
            @ApiParam(value = "Search Term for documentation", required = false) @DefaultValue("") @QueryParam("searchTerm") String searchTerm) {
        List<Document> allDocs = documentRepository.getAllDocuments();

        return getDocumentation(allDocs, searchTerm, maxResults);
    }

    private List<DocumentationItemDTO> getDocumentation(List<Document> docs, String searchTerm, int maxResults) {
        Stream<DocumentationItem> documentationStream;
        if (searchTerm.isEmpty()) {
            documentationStream = documentationService.documentationForDocuments(docs, maxResults).stream();
        } else {
            documentationStream = documentationService.searchDocumentation(searchTerm, docs, maxResults).stream();
        }

        return documentationStream
                .map(Transformations::convertDocumentationItemToDTO)
                .collect(Collectors.toList());
    }

    private void writeToFile(InputStream uploadedInputStream, String uploadedFileLocation) {
        OutputStream out = null;
        try {
            int read = 0;
            byte[] bytes = new byte[1024];

            out = new FileOutputStream(new File(uploadedFileLocation));
            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        finally {
            try {
                out.flush();
                out.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
