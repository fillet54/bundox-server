System.register(["./documentation-nav-model"], function (_export) {
   "use strict";

   var DocumentationNavModel, SelectionModel;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

   return {
      setters: [function (_documentationNavModel) {
         DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
      }],
      execute: function () {
         SelectionModel = (function () {
            _createClass(SelectionModel, null, [{
               key: "inject",
               value: function inject() {
                  return [DocumentationNavModel];
               }
            }]);

            function SelectionModel(documentationNavModel) {
               _classCallCheck(this, SelectionModel);

               this.selectedItem = null;
               this.documentationNavModel = documentationNavModel;
            }

            _createClass(SelectionModel, [{
               key: "select",
               value: function select(item) {
                  this.selectedItem = item;

                  if (item == null) {
                     return;
                  }

                  if (item.type == "document") {} else if (item.type == "documentation-item") {
                        this.documentationNavModel.navigateTo(item.path);
                     }
               }
            }]);

            return SelectionModel;
         })();

         _export("SelectionModel", SelectionModel);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGlvbi1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OEJBRWEsY0FBYzs7Ozs7Ozs7d0RBRm5CLHFCQUFxQjs7O0FBRWhCLHVCQUFjO3lCQUFkLGNBQWM7O3NCQUNYLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUFFOzs7QUFDeEMscUJBRkQsY0FBYyxDQUVaLHFCQUFxQixFQUFFO3FDQUZ6QixjQUFjOztBQUdyQixtQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsbUJBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQzthQUNyRDs7eUJBTFMsY0FBYzs7c0JBT2xCLGdCQUFDLElBQUksRUFBRTtBQUNWLHNCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7QUFFekIsc0JBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUNmLDRCQUFPO21CQUNUOztBQUVELHNCQUFJLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFLEVBRTVCLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLG9CQUFvQixFQUFFO0FBQzNDLDRCQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztzQkFDbkQ7Z0JBQ0g7OzttQkFuQlMsY0FBYyIsImZpbGUiOiJzZWxlY3Rpb24tbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY3VtZW50YXRpb25OYXZNb2RlbH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLW5hdi1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlbCB7XG4gICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW0RvY3VtZW50YXRpb25OYXZNb2RlbF07IH1cbiAgIGNvbnN0cnVjdG9yKGRvY3VtZW50YXRpb25OYXZNb2RlbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwgPSBkb2N1bWVudGF0aW9uTmF2TW9kZWw7XG4gICB9XG5cbiAgIHNlbGVjdChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PSBcImRvY3VtZW50XCIpIHtcbi8vICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwubmF2aWdhdGVUbyhpdGVtLmluZGV4UGF0aCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcImRvY3VtZW50YXRpb24taXRlbVwiKSB7XG4gICAgICAgICB0aGlzLmRvY3VtZW50YXRpb25OYXZNb2RlbC5uYXZpZ2F0ZVRvKGl0ZW0ucGF0aCk7XG4gICAgICB9XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
