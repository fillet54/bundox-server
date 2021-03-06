import {HttpClient} from 'aurelia-http-client';
import {Document} from './document';
import {DocumentationItem} from './documentation-item';
import {LogManager} from 'aurelia-framework';
import {mimeTypes} from 'aurelia-http-client';

// Not sure if this is how the API is intended
mimeTypes['application/bundox.api.v1+json'] = 'json';

var bundoxApiBase = 'http://localhost:8080/bundox/api/';
var documentEndPoint  = 'documents/';
var allDocumentationSearchEndPoint = 'documents/documentation?maxResults=100&searchTerm=';

export class BundoxService {
   static inject() { return [HttpClient]; }
   constructor(http, logging) {
      this.log = LogManager.getLogger('BundoxService');
      this.http = http.configure(c => {
         c.withHeader('Accept', 'application/bundox.api.v1+json');
      });
   }

   retrieveAllDocuments() {
     return this.http.get(bundoxApiBase + documentEndPoint).then(response => {
        return response.content.map(d => new Document(d.id, d.name, d.version, d.family, d.indexPath));
     });
   }

   searchAllDocumentation(searchTerm) {
     return this.retrieveAllDocuments().then ( documents => {
        var docIndexById = this.indexBy(documents, "id");
        log.info(docIndexById);
        return this.http.get(bundoxApiBase + allDocumentationSearchEndPoint + searchTerm).then(response => {
           return response.content.map(r => new DocumentationItem(r.subject, r.path, r.type, r.namespace, docIndexById[r.documentId]));
        });
     });
   }

   searchDocumentation(searchTerm, document) {
     return this.retrieveAllDocuments().then ( documents => {
        var endpoint = `${bundoxApiBase}documents/${document.name}/${document.version}/documentation?maxResults=100&searchTerm=${searchTerm}`;
        var docIndexById = this.indexBy(documents, "id");
        return this.http.get(endpoint).then(response => {
           return response.content.map(r => new DocumentationItem(r.subject, r.path, r.type, r.namespace, docIndexById[r.documentId]));
        });
     });
   }

   indexBy(list, field) {
      var index = {}
      log.info(list);
      list.forEach (o => index[o[field]] = o);
      return index;
   }
}
