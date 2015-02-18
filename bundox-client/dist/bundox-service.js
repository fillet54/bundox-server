System.register(["aurelia-http-client", "./document", "./documentation-result"], function (_export) {
  "use strict";

  var HttpClient, Document, DocumentationResult, _prototypeProperties, _classCallCheck, bundoxApiBase, documentEndPoint, allDocumentationSearchEndPoint, BundoxService;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_document) {
      Document = _document.Document;
    }, function (_documentationResult) {
      DocumentationResult = _documentationResult.DocumentationResult;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      bundoxApiBase = "http://localhost:8080/bundox/api/";
      documentEndPoint = "documents/";
      allDocumentationSearchEndPoint = "documents/documentation?searchTerm=";
      BundoxService = _export("BundoxService", (function () {
        function BundoxService(http) {
          _classCallCheck(this, BundoxService);

          this.http = http.configure(function (c) {
            c.withHeader("Accept", "application/bundox.api.v1+json");
          });
        }

        _prototypeProperties(BundoxService, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          retrieveAllDocuments: {
            value: function retrieveAllDocuments() {
              return this.http.get(bundoxApiBase + documentEndPoint).then(function (response) {
                return response.content.map(function (d) {
                  return new Document(d.name, d.version);
                });
              });
            },
            writable: true,
            configurable: true
          },
          searchAllDocumentation: {
            value: function searchAllDocumentation(searchTerm) {
              return this.http.get(bundoxApiBase + allDocumentationSearchEndPoint + searchTerm).then(function (response) {
                return response.content.map(function (r) {
                  return new DocumentationResult(r.subject, r.path);
                });
              });
            },
            writable: true,
            configurable: true
          }
        });

        return BundoxService;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRveC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUsRUFDVixRQUFRLEVBQ1IsbUJBQW1CLHlDQUV2QixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUVyQixhQUFhOzs7QUFSbEIsZ0JBQVUsc0JBQVYsVUFBVTs7QUFDVixjQUFRLGFBQVIsUUFBUTs7QUFDUix5QkFBbUIsd0JBQW5CLG1CQUFtQjs7Ozs7OztBQUV2QixtQkFBYSxHQUFHLG1DQUFtQztBQUNuRCxzQkFBZ0IsR0FBSSxZQUFZO0FBQ2hDLG9DQUE4QixHQUFHLHFDQUFxQztBQUU3RCxtQkFBYTtBQUVaLGlCQUZELGFBQWEsQ0FFWCxJQUFJO2dDQUZOLGFBQWE7O0FBR3BCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM3QixhQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1dBQzNELENBQUMsQ0FBQztTQUNMOzs2QkFOUyxhQUFhO0FBQ2hCLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQU94Qyw4QkFBb0I7bUJBQUEsZ0NBQUc7QUFDckIscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3JFLHVCQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt5QkFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQUEsQ0FBQyxDQUFDO2VBQ3BFLENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsZ0NBQXNCO21CQUFBLGdDQUFDLFVBQVUsRUFBRTtBQUNqQyxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsOEJBQThCLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzdGLHVCQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt5QkFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFBQSxDQUFDLENBQUM7ZUFDbEYsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQWxCUyxhQUFhIiwiZmlsZSI6ImJ1bmRveC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=