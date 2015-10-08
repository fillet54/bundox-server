System.register([], function (_export) {
   "use strict";

   var SelectionModel;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

   return {
      setters: [],
      execute: function () {
         SelectionModel = (function () {
            function SelectionModel() {
               _classCallCheck(this, SelectionModel);

               this.selectedItem = null;
            }

            _createClass(SelectionModel, [{
               key: "select",
               value: function select(item) {
                  this.selectedItem = item;
               }
            }]);

            return SelectionModel;
         })();

         _export("SelectionModel", SelectionModel);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGlvbi1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7T0FBYSxjQUFjOzs7Ozs7Ozs7QUFBZCx1QkFBYztBQUNiLHFCQURELGNBQWMsR0FDVjtxQ0FESixjQUFjOztBQUVyQixtQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDM0I7O3lCQUhTLGNBQWM7O3NCQUtsQixnQkFBQyxJQUFJLEVBQUU7QUFDVixzQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCOzs7bUJBUFMsY0FBYyIsImZpbGUiOiJzZWxlY3Rpb24tbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZWwge1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICB9XG5cbiAgIHNlbGVjdChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
