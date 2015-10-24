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
                        return new Document(d.id, d.name, d.version, d.family, d.indexPath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRveC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5RUFTSSxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUVyQixhQUFhOzs7Ozs7Ozt5Q0FibEIsVUFBVTt3Q0FJVixTQUFTOzs4QkFIVCxRQUFROztvREFDUixtQkFBbUI7O3dDQUNuQixVQUFVOzs7QUFJbEIsa0JBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7QUFFakQsc0JBQWEsR0FBRyxtQ0FBbUM7QUFDbkQseUJBQWdCLEdBQUksWUFBWTtBQUNoQyx1Q0FBOEIsR0FBRyxvREFBb0Q7O0FBRTVFLHNCQUFhO3lCQUFiLGFBQWE7O3NCQUNWLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFBRTs7O0FBQzdCLHFCQUZELGFBQWEsQ0FFWCxJQUFJLEVBQUUsT0FBTyxFQUFFO3FDQUZqQixhQUFhOztBQUdwQixtQkFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pELG1CQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDN0IsbUJBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQzthQUNMOzt5QkFQUyxhQUFhOztzQkFTSCxnQ0FBRztBQUNyQix5QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDckUsNEJBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDOytCQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztzQkFBQSxDQUFDLENBQUM7bUJBQ2pHLENBQUMsQ0FBQztnQkFDSjs7O3NCQUVxQixnQ0FBQyxVQUFVLEVBQUU7OztBQUNqQyx5QkFBTyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUcsVUFBQSxTQUFTLEVBQUk7QUFDcEQseUJBQUksWUFBWSxHQUFHLE1BQUssT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRCx3QkFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2Qiw0QkFBTyxNQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLDhCQUE4QixHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoRywrQkFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7a0NBQUksSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUFBLENBQUMsQ0FBQztzQkFDbkgsQ0FBQyxDQUFDO21CQUNMLENBQUMsQ0FBQztnQkFDSjs7O3NCQUVrQiw2QkFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFOzs7QUFDeEMseUJBQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUFHLFVBQUEsU0FBUyxFQUFJO0FBQ3BELHlCQUFJLFFBQVEsR0FBTSxhQUFhLGtCQUFhLFFBQVEsQ0FBQyxJQUFJLFNBQUksUUFBUSxDQUFDLE9BQU8saURBQTRDLFVBQVUsQUFBRSxDQUFDO0FBQ3RJLHlCQUFJLFlBQVksR0FBRyxPQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakQsNEJBQU8sT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM3QywrQkFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7a0NBQUksSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUFBLENBQUMsQ0FBQztzQkFDbkgsQ0FBQyxDQUFDO21CQUNMLENBQUMsQ0FBQztnQkFDSjs7O3NCQUVNLGlCQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbEIsc0JBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNkLHFCQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2Ysc0JBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxDQUFDOzRCQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO21CQUFBLENBQUMsQ0FBQztBQUN4Qyx5QkFBTyxLQUFLLENBQUM7Z0JBQ2Y7OzttQkF4Q1MsYUFBYSIsImZpbGUiOiJidW5kb3gtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5pbXBvcnQge0RvY3VtZW50fSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7RG9jdW1lbnRhdGlvblJlc3VsdH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLXJlc3VsdCc7XG5pbXBvcnQge0xvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7bWltZVR5cGVzfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuLy8gTm90IHN1cmUgaWYgdGhpcyBpcyBob3cgdGhlIEFQSSBpcyBpbnRlbmRlZFxubWltZVR5cGVzWydhcHBsaWNhdGlvbi9idW5kb3guYXBpLnYxK2pzb24nXSA9ICdqc29uJztcblxudmFyIGJ1bmRveEFwaUJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2J1bmRveC9hcGkvJztcbnZhciBkb2N1bWVudEVuZFBvaW50ICA9ICdkb2N1bWVudHMvJztcbnZhciBhbGxEb2N1bWVudGF0aW9uU2VhcmNoRW5kUG9pbnQgPSAnZG9jdW1lbnRzL2RvY3VtZW50YXRpb24/bWF4UmVzdWx0cz0xMDAmc2VhcmNoVGVybT0nO1xuXG5leHBvcnQgY2xhc3MgQnVuZG94U2VydmljZSB7XG4gICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW0h0dHBDbGllbnRdOyB9XG4gICBjb25zdHJ1Y3RvcihodHRwLCBsb2dnaW5nKSB7XG4gICAgICB0aGlzLmxvZyA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdCdW5kb3hTZXJ2aWNlJyk7XG4gICAgICB0aGlzLmh0dHAgPSBodHRwLmNvbmZpZ3VyZShjID0+IHtcbiAgICAgICAgIGMud2l0aEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2J1bmRveC5hcGkudjEranNvbicpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIHJldHJpZXZlQWxsRG9jdW1lbnRzKCkge1xuICAgICByZXR1cm4gdGhpcy5odHRwLmdldChidW5kb3hBcGlCYXNlICsgZG9jdW1lbnRFbmRQb2ludCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50Lm1hcChkID0+IG5ldyBEb2N1bWVudChkLmlkLCBkLm5hbWUsIGQudmVyc2lvbiwgZC5mYW1pbHksIGQuaW5kZXhQYXRoKSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBzZWFyY2hBbGxEb2N1bWVudGF0aW9uKHNlYXJjaFRlcm0pIHtcbiAgICAgcmV0dXJuIHRoaXMucmV0cmlldmVBbGxEb2N1bWVudHMoKS50aGVuICggZG9jdW1lbnRzID0+IHtcbiAgICAgICAgdmFyIGRvY0luZGV4QnlJZCA9IHRoaXMuaW5kZXhCeShkb2N1bWVudHMsIFwiaWRcIik7XG4gICAgICAgIGxvZy5pbmZvKGRvY0luZGV4QnlJZCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJ1bmRveEFwaUJhc2UgKyBhbGxEb2N1bWVudGF0aW9uU2VhcmNoRW5kUG9pbnQgKyBzZWFyY2hUZXJtKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQubWFwKHIgPT4gbmV3IERvY3VtZW50YXRpb25SZXN1bHQoci5zdWJqZWN0LCByLnBhdGgsIHIudHlwZSwgZG9jSW5kZXhCeUlkW3IuZG9jdW1lbnRJZF0pKTtcbiAgICAgICAgfSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBzZWFyY2hEb2N1bWVudGF0aW9uKHNlYXJjaFRlcm0sIGRvY3VtZW50KSB7XG4gICAgIHJldHVybiB0aGlzLnJldHJpZXZlQWxsRG9jdW1lbnRzKCkudGhlbiAoIGRvY3VtZW50cyA9PiB7XG4gICAgICAgIHZhciBlbmRwb2ludCA9IGAke2J1bmRveEFwaUJhc2V9ZG9jdW1lbnRzLyR7ZG9jdW1lbnQubmFtZX0vJHtkb2N1bWVudC52ZXJzaW9ufS9kb2N1bWVudGF0aW9uP21heFJlc3VsdHM9MTAwJnNlYXJjaFRlcm09JHtzZWFyY2hUZXJtfWA7XG4gICAgICAgIHZhciBkb2NJbmRleEJ5SWQgPSB0aGlzLmluZGV4QnkoZG9jdW1lbnRzLCBcImlkXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbmRwb2ludCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50Lm1hcChyID0+IG5ldyBEb2N1bWVudGF0aW9uUmVzdWx0KHIuc3ViamVjdCwgci5wYXRoLCByLnR5cGUsIGRvY0luZGV4QnlJZFtyLmRvY3VtZW50SWRdKSk7XG4gICAgICAgIH0pO1xuICAgICB9KTtcbiAgIH1cblxuICAgaW5kZXhCeShsaXN0LCBmaWVsZCkge1xuICAgICAgdmFyIGluZGV4ID0ge31cbiAgICAgIGxvZy5pbmZvKGxpc3QpO1xuICAgICAgbGlzdC5mb3JFYWNoIChvID0+IGluZGV4W29bZmllbGRdXSA9IG8pO1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
