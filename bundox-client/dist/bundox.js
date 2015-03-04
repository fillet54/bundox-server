System.register(["./bundox-service", "./documentation-nav-model", "aurelia-framework", "rx"], function (_export) {
  "use strict";

  var BundoxService, DocumentationNavModel, ObserverLocator, rx, _prototypeProperties, _classCallCheck, indexUrl, url, searchUrl, Bundox;
  return {
    setters: [function (_bundoxService) {
      BundoxService = _bundoxService.BundoxService;
    }, function (_documentationNavModel) {
      DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
    }, function (_aureliaFramework) {
      ObserverLocator = _aureliaFramework.ObserverLocator;
    }, function (_rx) {
      rx = _rx["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      indexUrl = "http://localhost:8080/static/documents/java/1.7.0/My.html";
      url = "http://localhost:8080/bundox/api/documents";
      searchUrl = "http://localhost:8080/bundox/api/documents/documentation?searchTerm=";
      Bundox = _export("Bundox", (function () {
        function Bundox(bundoxService, locator, documentationNavModel) {
          _classCallCheck(this, Bundox);

          this.heading = "Bundox";
          this.items = [];
          this.searchTerm = "";
          this.src = "#";

          this.bundoxApi = bundoxService;
          this.locator = locator;
          this.documentationNavModel = documentationNavModel;
        }

        _prototypeProperties(Bundox, {
          inject: {
            value: function inject() {
              return [BundoxService, ObserverLocator, DocumentationNavModel];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              var http = this.http;
              var searchChange = rx.Observable.create(function (observer) {
                _this.locator.getObserver(_this, "searchTerm").subscribe(function (term) {
                  return observer.onNext(term);
                });
              }).debounce(400).distinctUntilChanged().flatMapLatest(this.createSearcher()).subscribe(function (r) {
                return _this.items = r;
              });

              this.observeDocumenationNavModel();
              this.documentationNavModel.navigateTo(indexUrl);
              return this.bundoxApi.retrieveAllDocuments().then(function (docs) {
                _this.items = docs;
              });
            },
            writable: true,
            configurable: true
          },
          createSearcher: {
            value: function createSearcher() {
              var api = this.bundoxApi;
              return function (term) {
                if (term == "") return api.retrieveAllDocuments();else return api.searchAllDocumentation(term);
              };
            },
            writable: true,
            configurable: true
          },
          observeDocumenationNavModel: {
            value: function observeDocumenationNavModel() {
              var _this = this;
              this.locator.getObserver(this.documentationNavModel, "url").subscribe(function (url) {
                return _this.src = url;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Bundox;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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