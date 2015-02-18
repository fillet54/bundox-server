import {HttpClient} from 'aurelia-http-client';
import {Document} from './document';
import {DocumentationResult} from './documentation-result';

var bundoxApiBase = 'http://localhost:8080/bundox/api/';
var documentEndPoint  = 'documents/';
var allDocumentationSearchEndPoint = 'documents/documentation?searchTerm=';

export class BundoxService {
   static inject() { return [HttpClient]; }
   constructor(http) {
      this.http = http.configure(c => {
         c.withHeader('Accept', 'application/bundox.api.v1+json');
      });
   }

   retrieveAllDocuments() {
     return this.http.get(bundoxApiBase + documentEndPoint).then(response => {
        return response.content.map(d => new Document(d.name, d.version));
     });
   }

   searchAllDocumentation(searchTerm) {
     return this.http.get(bundoxApiBase + allDocumentationSearchEndPoint + searchTerm).then(response => {
           return response.content.map(r => new DocumentationResult(r.subject, r.path));
     });
   }
}
