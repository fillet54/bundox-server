System.register([], function (_export) {
   "use strict";

   var Document;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

   return {
      setters: [],
      execute: function () {
         Document = (function () {
            function Document(id, name, version, family, indexPath) {
               _classCallCheck(this, Document);

               this.id = id;
               this.name = name;
               this.type = "document";
               this.version = version;
               this.family = family;
               this.indexPath = indexPath;
            }

            _createClass(Document, [{
               key: "activate",
               value: function activate(model) {
                  this.name = model.name;
                  this.version = model.version;
                  this.family = model.family;
                  this.indexPath = model.indexPath;
               }
            }]);

            return Document;
         })();

         _export("Document", Document);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztPQUFhLFFBQVE7Ozs7Ozs7OztBQUFSLGlCQUFRO0FBQ1AscUJBREQsUUFBUSxDQUNOLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7cUNBRHhDLFFBQVE7O0FBRWYsbUJBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsbUJBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLG1CQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2QixtQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsbUJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLG1CQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUM3Qjs7eUJBUlMsUUFBUTs7c0JBVVYsa0JBQUMsS0FBSyxFQUFFO0FBQ2Isc0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN2QixzQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdCLHNCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDM0Isc0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDbkM7OzttQkFmUyxRQUFRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERvY3VtZW50IHtcbiAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCB2ZXJzaW9uLCBmYW1pbHksIGluZGV4UGF0aCkge1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMudHlwZSA9IFwiZG9jdW1lbnRcIjtcbiAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICB0aGlzLmZhbWlseSA9IGZhbWlseTtcbiAgICAgIHRoaXMuaW5kZXhQYXRoID0gaW5kZXhQYXRoO1xuICAgfVxuXG4gICBhY3RpdmF0ZShtb2RlbCkge1xuICAgICAgdGhpcy5uYW1lID0gbW9kZWwubmFtZTtcbiAgICAgIHRoaXMudmVyc2lvbiA9IG1vZGVsLnZlcnNpb247XG4gICAgICB0aGlzLmZhbWlseSA9IG1vZGVsLmZhbWlseTtcbiAgICAgIHRoaXMuaW5kZXhQYXRoID0gbW9kZWwuaW5kZXhQYXRoO1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
