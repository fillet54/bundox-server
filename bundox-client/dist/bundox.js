System.register(['./bundox-service', './documentation-nav-model', 'aurelia-framework', 'rx'], function (_export) {
  'use strict';

  var BundoxService, DocumentationNavModel, ObserverLocator, rx, indexUrl, url, searchUrl, Bundox;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bundoxService) {
      BundoxService = _bundoxService.BundoxService;
    }, function (_documentationNavModel) {
      DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
    }, function (_aureliaFramework) {
      ObserverLocator = _aureliaFramework.ObserverLocator;
    }, function (_rx) {
      rx = _rx['default'];
    }],
    execute: function () {
      indexUrl = "http://localhost:8080/static/documents/java/1.7.0/My.html";
      url = 'http://localhost:8080/bundox/api/documents';
      searchUrl = 'http://localhost:8080/bundox/api/documents/documentation?searchTerm=';

      Bundox = (function () {
        _createClass(Bundox, null, [{
          key: 'inject',
          value: function inject() {
            return [DocumentationNavModel];
          }
        }]);

        function Bundox(documentationNavModel) {
          _classCallCheck(this, Bundox);

          this.heading = 'Bundox';
          this.documentationNavModel = documentationNavModel;
        }

        _createClass(Bundox, [{
          key: 'activate',
          value: function activate() {
            this.documentationNavModel.navigateTo("www.google.com");
          }
        }]);

        return Bundox;
      })();

      _export('Bundox', Bundox);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUVBS0ksUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEVBRUEsTUFBTTs7Ozs7Ozs7cUNBVFgsYUFBYTs7cURBQ2IscUJBQXFCOzswQ0FDckIsZUFBZTs7Ozs7QUFHbkIsY0FBUSxHQUFHLDJEQUEyRDtBQUN0RSxTQUFHLEdBQUcsNENBQTRDO0FBQ2xELGVBQVMsR0FBRyxzRUFBc0U7O0FBRXpFLFlBQU07cUJBQU4sTUFBTTs7aUJBQ0osa0JBQUc7QUFBRSxtQkFBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7V0FBRTs7O0FBQ3hDLGlCQUZBLE1BQU0sQ0FFTCxxQkFBcUIsRUFBRTtnQ0FGeEIsTUFBTTs7QUFHZCxjQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN4QixjQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7U0FDckQ7O3FCQUxVLE1BQU07O2lCQU9ULG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtXQUN4RDs7O2VBVFUsTUFBTSIsImZpbGUiOiJidW5kb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1bmRveFNlcnZpY2V9IGZyb20gJy4vYnVuZG94LXNlcnZpY2UnO1xuaW1wb3J0IHtEb2N1bWVudGF0aW9uTmF2TW9kZWx9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1uYXYtbW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCByeCBmcm9tICdyeCc7IFxuXG52YXIgaW5kZXhVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9zdGF0aWMvZG9jdW1lbnRzL2phdmEvMS43LjAvTXkuaHRtbFwiO1xudmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYnVuZG94L2FwaS9kb2N1bWVudHMnO1xudmFyIHNlYXJjaFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYnVuZG94L2FwaS9kb2N1bWVudHMvZG9jdW1lbnRhdGlvbj9zZWFyY2hUZXJtPSc7XG5cbmV4cG9ydCBjbGFzcyBCdW5kb3gge1xuICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW0RvY3VtZW50YXRpb25OYXZNb2RlbF07IH1cbiAgY29uc3RydWN0b3IoZG9jdW1lbnRhdGlvbk5hdk1vZGVsKSB7XG4gICAgIHRoaXMuaGVhZGluZyA9ICdCdW5kb3gnO1xuICAgICB0aGlzLmRvY3VtZW50YXRpb25OYXZNb2RlbCA9IGRvY3VtZW50YXRpb25OYXZNb2RlbDtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZG9jdW1lbnRhdGlvbk5hdk1vZGVsLm5hdmlnYXRlVG8oXCJ3d3cuZ29vZ2xlLmNvbVwiKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
