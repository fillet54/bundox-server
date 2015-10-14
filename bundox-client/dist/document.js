System.register([], function (_export) {
   "use strict";

   var Document;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

   return {
      setters: [],
      execute: function () {
         Document = (function () {
            function Document(id, name, version, family) {
               _classCallCheck(this, Document);

               this.id = id;
               this.name = name;
               this.type = "document";
               this.version = version;
               this.family = family;
            }

            _createClass(Document, [{
               key: "activate",
               value: function activate(model) {
                  this.name = model.name;
                  this.version = model.version;
                  this.family = model.family;
               }
            }]);

            return Document;
         })();

         _export("Document", Document);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztPQUFhLFFBQVE7Ozs7Ozs7OztBQUFSLGlCQUFRO0FBQ1AscUJBREQsUUFBUSxDQUNOLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtxQ0FEN0IsUUFBUTs7QUFFZixtQkFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixtQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsbUJBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0FBQ3ZCLG1CQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixtQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDdkI7O3lCQVBTLFFBQVE7O3NCQVNWLGtCQUFDLEtBQUssRUFBRTtBQUNiLHNCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdkIsc0JBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUM3QixzQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUM3Qjs7O21CQWJTLFFBQVEiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRG9jdW1lbnQge1xuICAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHZlcnNpb24sIGZhbWlseSkge1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMudHlwZSA9IFwiZG9jdW1lbnRcIjtcbiAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICB0aGlzLmZhbWlseSA9IGZhbWlseTtcbiAgIH1cblxuICAgYWN0aXZhdGUobW9kZWwpIHtcbiAgICAgIHRoaXMubmFtZSA9IG1vZGVsLm5hbWU7XG4gICAgICB0aGlzLnZlcnNpb24gPSBtb2RlbC52ZXJzaW9uO1xuICAgICAgdGhpcy5mYW1pbHkgPSBtb2RlbC5mYW1pbHk7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
