System.register(['aurelia-http-client', './document', './documentation-result', 'aurelia-framework'], function (_export) {
   'use strict';

   var HttpClient, mimeTypes, Document, DocumentationResult, LogManager, bundoxApiBase, documentEndPoint, allDocumentationSearchEndPoint, BundoxService;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_aureliaHttpClient) {
         HttpClient = _aureliaHttpClient.HttpClient;
         mimeTypes = _aureliaHttpClient.mimeTypes;
      }, function (_document) {
         Document = _document.Document;
      }, function (_documentationResult) {
         DocumentationResult = _documentationResult.DocumentationResult;
      }, function (_aureliaFramework) {
         LogManager = _aureliaFramework.LogManager;
      }],
      execute: function () {
         mimeTypes['application/bundox.api.v1+json'] = 'json';

         bundoxApiBase = 'http://localhost:8080/bundox/api/';
         documentEndPoint = 'documents/';
         allDocumentationSearchEndPoint = 'documents/documentation?searchTerm=';

         BundoxService = (function () {
            _createClass(BundoxService, null, [{
               key: 'inject',
               value: function inject() {
                  return [HttpClient];
               }
            }]);

            function BundoxService(http, logging) {
               _classCallCheck(this, BundoxService);

               this.log = LogManager.getLogger('BundoxService');
               this.http = http.configure(function (c) {
                  c.withHeader('Accept', 'application/bundox.api.v1+json');
               });
            }

            _createClass(BundoxService, [{
               key: 'retrieveAllDocuments',
               value: function retrieveAllDocuments() {
                  return this.http.get(bundoxApiBase + documentEndPoint).then(function (response) {
                     return response.content.map(function (d) {
                        return new Document(d.name, d.version);
                     });
                  });
               }
            }, {
               key: 'searchAllDocumentation',
               value: function searchAllDocumentation(searchTerm) {
                  return this.http.get(bundoxApiBase + allDocumentationSearchEndPoint + searchTerm).then(function (response) {
                     return response.content.map(function (r) {
                        return new DocumentationResult(r.subject, r.path, r.type);
                     });
                  });
               }
            }]);

            return BundoxService;
         })();

         _export('BundoxService', BundoxService);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRveC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5RUFTSSxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUVyQixhQUFhOzs7Ozs7Ozt5Q0FibEIsVUFBVTt3Q0FJVixTQUFTOzs4QkFIVCxRQUFROztvREFDUixtQkFBbUI7O3dDQUNuQixVQUFVOzs7QUFJbEIsa0JBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7QUFFakQsc0JBQWEsR0FBRyxtQ0FBbUM7QUFDbkQseUJBQWdCLEdBQUksWUFBWTtBQUNoQyx1Q0FBOEIsR0FBRyxxQ0FBcUM7O0FBRTdELHNCQUFhO3lCQUFiLGFBQWE7O3NCQUNWLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFBRTs7O0FBQzdCLHFCQUZELGFBQWEsQ0FFWCxJQUFJLEVBQUUsT0FBTyxFQUFFO3FDQUZqQixhQUFhOztBQUdwQixtQkFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pELG1CQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDN0IsbUJBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQzthQUNMOzt5QkFQUyxhQUFhOztzQkFTSCxnQ0FBRztBQUNyQix5QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDckUsNEJBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDOytCQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztzQkFBQSxDQUFDLENBQUM7bUJBQ3BFLENBQUMsQ0FBQztnQkFDSjs7O3NCQUVxQixnQ0FBQyxVQUFVLEVBQUU7QUFDakMseUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLDhCQUE4QixHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM3Riw0QkFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7K0JBQUksSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztzQkFBQSxDQUFDLENBQUM7bUJBQzFGLENBQUMsQ0FBQztnQkFDSjs7O21CQW5CUyxhQUFhIiwiZmlsZSI6ImJ1bmRveC1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCB7RG9jdW1lbnR9IGZyb20gJy4vZG9jdW1lbnQnO1xuaW1wb3J0IHtEb2N1bWVudGF0aW9uUmVzdWx0fSBmcm9tICcuL2RvY3VtZW50YXRpb24tcmVzdWx0JztcbmltcG9ydCB7TG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHttaW1lVHlwZXN9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuXG4vLyBOb3Qgc3VyZSBpZiB0aGlzIGlzIGhvdyB0aGUgQVBJIGlzIGludGVuZGVkXG5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL2J1bmRveC5hcGkudjEranNvbiddID0gJ2pzb24nO1xuXG52YXIgYnVuZG94QXBpQmFzZSA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYnVuZG94L2FwaS8nO1xudmFyIGRvY3VtZW50RW5kUG9pbnQgID0gJ2RvY3VtZW50cy8nO1xudmFyIGFsbERvY3VtZW50YXRpb25TZWFyY2hFbmRQb2ludCA9ICdkb2N1bWVudHMvZG9jdW1lbnRhdGlvbj9zZWFyY2hUZXJtPSc7XG5cbmV4cG9ydCBjbGFzcyBCdW5kb3hTZXJ2aWNlIHtcbiAgIHN0YXRpYyBpbmplY3QoKSB7IHJldHVybiBbSHR0cENsaWVudF07IH1cbiAgIGNvbnN0cnVjdG9yKGh0dHAsIGxvZ2dpbmcpIHtcbiAgICAgIHRoaXMubG9nID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoJ0J1bmRveFNlcnZpY2UnKTtcbiAgICAgIHRoaXMuaHR0cCA9IGh0dHAuY29uZmlndXJlKGMgPT4ge1xuICAgICAgICAgYy53aXRoSGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vYnVuZG94LmFwaS52MStqc29uJyk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgcmV0cmlldmVBbGxEb2N1bWVudHMoKSB7XG4gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJ1bmRveEFwaUJhc2UgKyBkb2N1bWVudEVuZFBvaW50KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQubWFwKGQgPT4gbmV3IERvY3VtZW50KGQubmFtZSwgZC52ZXJzaW9uKSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBzZWFyY2hBbGxEb2N1bWVudGF0aW9uKHNlYXJjaFRlcm0pIHtcbiAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYnVuZG94QXBpQmFzZSArIGFsbERvY3VtZW50YXRpb25TZWFyY2hFbmRQb2ludCArIHNlYXJjaFRlcm0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC5tYXAociA9PiBuZXcgRG9jdW1lbnRhdGlvblJlc3VsdChyLnN1YmplY3QsIHIucGF0aCwgci50eXBlKSk7XG4gICAgIH0pO1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
