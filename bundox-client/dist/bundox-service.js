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
         allDocumentationSearchEndPoint = 'documents/documentation?maxResults=100&searchTerm=';

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
                        return new Document(d.id, d.name, d.version, d.family);
                     });
                  });
               }
            }, {
               key: 'searchAllDocumentation',
               value: function searchAllDocumentation(searchTerm) {
                  var _this = this;

                  return this.retrieveAllDocuments().then(function (documents) {
                     var docIndexById = _this.indexBy(documents, "id");
                     log.info(docIndexById);
                     return _this.http.get(bundoxApiBase + allDocumentationSearchEndPoint + searchTerm).then(function (response) {
                        return response.content.map(function (r) {
                           return new DocumentationResult(r.subject, r.path, r.type, docIndexById[r.documentId]);
                        });
                     });
                  });
               }
            }, {
               key: 'searchDocumentation',
               value: function searchDocumentation(searchTerm, document) {
                  var _this2 = this;

                  return this.retrieveAllDocuments().then(function (documents) {
                     var endpoint = bundoxApiBase + 'documents/' + document.name + '/' + document.version + '/documentation?maxResults=100&searchTerm=' + searchTerm;
                     var docIndexById = _this2.indexBy(documents, "id");
                     return _this2.http.get(endpoint).then(function (response) {
                        return response.content.map(function (r) {
                           return new DocumentationResult(r.subject, r.path, r.type, docIndexById[r.documentId]);
                        });
                     });
                  });
               }
            }, {
               key: 'indexBy',
               value: function indexBy(list, field) {
                  var index = {};
                  log.info(list);
                  list.forEach(function (o) {
                     return index[o[field]] = o;
                  });
                  return index;
               }
            }]);

            return BundoxService;
         })();

         _export('BundoxService', BundoxService);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,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N0MsK0JBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2tDQUFJLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFBQSxDQUFDLENBQUM7c0JBQ25ILENBQUMsQ0FBQzttQkFDTCxDQUFDLENBQUM7Z0JBQ0o7OztzQkFFTSxpQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2xCLHNCQUFJLEtBQUssR0FBRyxFQUFFLENBQUE7QUFDZCxxQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNmLHNCQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsQ0FBQzs0QkFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQzttQkFBQSxDQUFDLENBQUM7QUFDeEMseUJBQU8sS0FBSyxDQUFDO2dCQUNmOzs7bUJBeENTLGFBQWEiLCJmaWxlIjoiYnVuZG94LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IHtEb2N1bWVudH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQge0RvY3VtZW50YXRpb25SZXN1bHR9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1yZXN1bHQnO1xuaW1wb3J0IHtMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge21pbWVUeXBlc30gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5cbi8vIE5vdCBzdXJlIGlmIHRoaXMgaXMgaG93IHRoZSBBUEkgaXMgaW50ZW5kZWRcbm1pbWVUeXBlc1snYXBwbGljYXRpb24vYnVuZG94LmFwaS52MStqc29uJ10gPSAnanNvbic7XG5cbnZhciBidW5kb3hBcGlCYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9idW5kb3gvYXBpLyc7XG52YXIgZG9jdW1lbnRFbmRQb2ludCAgPSAnZG9jdW1lbnRzLyc7XG52YXIgYWxsRG9jdW1lbnRhdGlvblNlYXJjaEVuZFBvaW50ID0gJ2RvY3VtZW50cy9kb2N1bWVudGF0aW9uP21heFJlc3VsdHM9MTAwJnNlYXJjaFRlcm09JztcblxuZXhwb3J0IGNsYXNzIEJ1bmRveFNlcnZpY2Uge1xuICAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtIdHRwQ2xpZW50XTsgfVxuICAgY29uc3RydWN0b3IoaHR0cCwgbG9nZ2luZykge1xuICAgICAgdGhpcy5sb2cgPSBMb2dNYW5hZ2VyLmdldExvZ2dlcignQnVuZG94U2VydmljZScpO1xuICAgICAgdGhpcy5odHRwID0gaHR0cC5jb25maWd1cmUoYyA9PiB7XG4gICAgICAgICBjLndpdGhIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9idW5kb3guYXBpLnYxK2pzb24nKTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICByZXRyaWV2ZUFsbERvY3VtZW50cygpIHtcbiAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYnVuZG94QXBpQmFzZSArIGRvY3VtZW50RW5kUG9pbnQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC5tYXAoZCA9PiBuZXcgRG9jdW1lbnQoZC5pZCwgZC5uYW1lLCBkLnZlcnNpb24sIGQuZmFtaWx5KSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBzZWFyY2hBbGxEb2N1bWVudGF0aW9uKHNlYXJjaFRlcm0pIHtcbiAgICAgcmV0dXJuIHRoaXMucmV0cmlldmVBbGxEb2N1bWVudHMoKS50aGVuICggZG9jdW1lbnRzID0+IHtcbiAgICAgICAgdmFyIGRvY0luZGV4QnlJZCA9IHRoaXMuaW5kZXhCeShkb2N1bWVudHMsIFwiaWRcIik7XG4gICAgICAgIGxvZy5pbmZvKGRvY0luZGV4QnlJZCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJ1bmRveEFwaUJhc2UgKyBhbGxEb2N1bWVudGF0aW9uU2VhcmNoRW5kUG9pbnQgKyBzZWFyY2hUZXJtKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQubWFwKHIgPT4gbmV3IERvY3VtZW50YXRpb25SZXN1bHQoci5zdWJqZWN0LCByLnBhdGgsIHIudHlwZSwgZG9jSW5kZXhCeUlkW3IuZG9jdW1lbnRJZF0pKTtcbiAgICAgICAgfSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBzZWFyY2hEb2N1bWVudGF0aW9uKHNlYXJjaFRlcm0sIGRvY3VtZW50KSB7XG4gICAgIHJldHVybiB0aGlzLnJldHJpZXZlQWxsRG9jdW1lbnRzKCkudGhlbiAoIGRvY3VtZW50cyA9PiB7XG4gICAgICAgIHZhciBlbmRwb2ludCA9IGAke2J1bmRveEFwaUJhc2V9ZG9jdW1lbnRzLyR7ZG9jdW1lbnQubmFtZX0vJHtkb2N1bWVudC52ZXJzaW9ufS9kb2N1bWVudGF0aW9uP21heFJlc3VsdHM9MTAwJnNlYXJjaFRlcm09JHtzZWFyY2hUZXJtfWA7XG4gICAgICAgIHZhciBkb2NJbmRleEJ5SWQgPSB0aGlzLmluZGV4QnkoZG9jdW1lbnRzLCBcImlkXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbmRwb2ludCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50Lm1hcChyID0+IG5ldyBEb2N1bWVudGF0aW9uUmVzdWx0KHIuc3ViamVjdCwgci5wYXRoLCByLnR5cGUsIGRvY0luZGV4QnlJZFtyLmRvY3VtZW50SWRdKSk7XG4gICAgICAgIH0pO1xuICAgICB9KTtcbiAgIH1cblxuICAgaW5kZXhCeShsaXN0LCBmaWVsZCkge1xuICAgICAgdmFyIGluZGV4ID0ge31cbiAgICAgIGxvZy5pbmZvKGxpc3QpO1xuICAgICAgbGlzdC5mb3JFYWNoIChvID0+IGluZGV4W29bZmllbGRdXSA9IG8pO1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
