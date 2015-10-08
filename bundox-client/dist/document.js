System.register([], function (_export) {
   "use strict";

   var Document;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

   return {
      setters: [],
      execute: function () {
         Document = (function () {
            function Document(name, version) {
               _classCallCheck(this, Document);

               this.name = name;
               this.type = "document";
               this.version = version;
            }

            _createClass(Document, [{
               key: "activate",
               value: function activate(model) {
                  this.name = model.name;
                  this.version = model.version;
               }
            }]);

            return Document;
         })();

         _export("Document", Document);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztPQUFhLFFBQVE7Ozs7Ozs7OztBQUFSLGlCQUFRO0FBQ1AscUJBREQsUUFBUSxDQUNOLElBQUksRUFBRSxPQUFPLEVBQUU7cUNBRGpCLFFBQVE7O0FBRWYsbUJBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLG1CQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2QixtQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDekI7O3lCQUxTLFFBQVE7O3NCQU9WLGtCQUFDLEtBQUssRUFBRTtBQUNiLHNCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdkIsc0JBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDL0I7OzttQkFWUyxRQUFRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERvY3VtZW50IHtcbiAgIGNvbnN0cnVjdG9yKG5hbWUsIHZlcnNpb24pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnR5cGUgPSBcImRvY3VtZW50XCI7XG4gICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgfVxuXG4gICBhY3RpdmF0ZShtb2RlbCkge1xuICAgICAgdGhpcy5uYW1lID0gbW9kZWwubmFtZTtcbiAgICAgIHRoaXMudmVyc2lvbiA9IG1vZGVsLnZlcnNpb247XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
