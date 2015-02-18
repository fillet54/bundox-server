System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, documenationBaseUrl, DocumentationNavModel;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      documenationBaseUrl = "http://localhost:8080";
      DocumentationNavModel = _export("DocumentationNavModel", (function () {
        function DocumentationNavModel() {
          _classCallCheck(this, DocumentationNavModel);

          this.url = "#";
        }

        _prototypeProperties(DocumentationNavModel, null, {
          navigateTo: {
            value: function navigateTo(url) {
              this.url = documenationBaseUrl + url;
            },
            writable: true,
            configurable: true
          }
        });

        return DocumentationNavModel;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tbmF2LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBSSxtQkFBbUIsRUFFVixxQkFBcUI7Ozs7Ozs7O0FBRjlCLHlCQUFtQixHQUFHLHVCQUF1QjtBQUVwQywyQkFBcUI7QUFDcEIsaUJBREQscUJBQXFCO2dDQUFyQixxQkFBcUI7O0FBRTVCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCOzs2QkFIUyxxQkFBcUI7QUFLL0Isb0JBQVU7bUJBQUEsb0JBQUMsR0FBRyxFQUFFO0FBQ2Isa0JBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO2FBQ3ZDOzs7Ozs7ZUFQUyxxQkFBcUIiLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1uYXYtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==