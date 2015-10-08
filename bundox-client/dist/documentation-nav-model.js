System.register([], function (_export) {
   "use strict";

   var documenationBaseUrl, DocumentationNavModel;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

   return {
      setters: [],
      execute: function () {
         documenationBaseUrl = "http://localhost:8080";

         DocumentationNavModel = (function () {
            function DocumentationNavModel() {
               _classCallCheck(this, DocumentationNavModel);

               this.url = "#";
            }

            _createClass(DocumentationNavModel, [{
               key: "navigateTo",
               value: function navigateTo(url) {
                  this.url = documenationBaseUrl + url;
               }
            }]);

            return DocumentationNavModel;
         })();

         _export("DocumentationNavModel", DocumentationNavModel);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tbmF2LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztPQUFJLG1CQUFtQixFQUVWLHFCQUFxQjs7Ozs7Ozs7O0FBRjlCLDRCQUFtQixHQUFHLHVCQUF1Qjs7QUFFcEMsOEJBQXFCO0FBQ3BCLHFCQURELHFCQUFxQixHQUNqQjtxQ0FESixxQkFBcUI7O0FBRTVCLG1CQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNqQjs7eUJBSFMscUJBQXFCOztzQkFLckIsb0JBQUMsR0FBRyxFQUFFO0FBQ2Isc0JBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO2dCQUN2Qzs7O21CQVBTLHFCQUFxQiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLW5hdi1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkb2N1bWVuYXRpb25CYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25OYXZNb2RlbCB7XG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudXJsID0gXCIjXCI7XG4gICB9XG5cbiAgIG5hdmlnYXRlVG8odXJsKSB7XG4gICAgICB0aGlzLnVybCA9IGRvY3VtZW5hdGlvbkJhc2VVcmwgKyB1cmw7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
