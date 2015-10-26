System.register(['./selection-model', './search-pane'], function (_export) {
   'use strict';

   var SelectionModel, SearchPane, DocumentationResultListItem;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_selectionModel) {
         SelectionModel = _selectionModel.SelectionModel;
      }, function (_searchPane) {
         SearchPane = _searchPane.SearchPane;
      }],
      execute: function () {
         DocumentationResultListItem = (function () {
            _createClass(DocumentationResultListItem, null, [{
               key: 'inject',
               value: function inject() {
                  return [SelectionModel, SearchPane];
               }
            }]);

            function DocumentationResultListItem(selectionModel, searchPane) {
               _classCallCheck(this, DocumentationResultListItem);

               this.displayText = "";
               this.path = "#";
               this.entryType = "";
               this.selectionModel = selectionModel;
               this.searchPane = searchPane;
            }

            _createClass(DocumentationResultListItem, [{
               key: 'activate',
               value: function activate(model) {
                  this.displayText = model.subject;
                  this.path = model.path;
                  this.entryType = model.entryType ? model.entryType : "unknown";
                  this.searchTerm = this.searchPane.searchTerm;
                  this.family = model.document ? model.document.family : null;
                  this.items = model.items;
               }
            }, {
               key: 'select',
               value: function select() {
                  this.selectionModel.select(this.items[0]);
               }
            }, {
               key: 'selectItem',
               value: function selectItem(item) {
                  this.selectionModel.select(item);
               }
            }, {
               key: 'isSelected',
               get: function get() {
                  return this.items.indexOf(this.selectionModel.selectedItem) > -1;
               }
            }]);

            return DocumentationResultListItem;
         })();

         _export('DocumentationResultListItem', DocumentationResultListItem);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzttQ0FHYSwyQkFBMkI7Ozs7Ozs7OzBDQUhoQyxjQUFjOztrQ0FDZCxVQUFVOzs7QUFFTCxvQ0FBMkI7eUJBQTNCLDJCQUEyQjs7c0JBQ3hCLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQUU7OztBQUM3QyxxQkFGRCwyQkFBMkIsQ0FFekIsY0FBYyxFQUFFLFVBQVUsRUFBRTtxQ0FGOUIsMkJBQTJCOztBQUdsQyxtQkFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsbUJBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLG1CQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixtQkFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsbUJBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQy9COzt5QkFSUywyQkFBMkI7O3NCQVU3QixrQkFBQyxLQUFLLEVBQUU7QUFDYixzQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ2pDLHNCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdkIsc0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMvRCxzQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUM3QyxzQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUM1RCxzQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUMzQjs7O3NCQUVLLGtCQUFHO0FBQ04sc0JBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUM7OztzQkFFUyxvQkFBQyxJQUFJLEVBQUU7QUFDZCxzQkFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DOzs7b0JBRWEsZUFBRztBQUNkLHlCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FOzs7bUJBN0JTLDJCQUEyQiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLXJlc3VsdC1saXN0aXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcbmltcG9ydCB7U2VhcmNoUGFuZX0gZnJvbSAnLi9zZWFyY2gtcGFuZSc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uUmVzdWx0TGlzdEl0ZW0ge1xuICAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtTZWxlY3Rpb25Nb2RlbCwgU2VhcmNoUGFuZV07IH1cbiAgIGNvbnN0cnVjdG9yKHNlbGVjdGlvbk1vZGVsLCBzZWFyY2hQYW5lKSB7XG4gICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gXCJcIjtcbiAgICAgIHRoaXMucGF0aCA9IFwiI1wiO1xuICAgICAgdGhpcy5lbnRyeVR5cGUgPSBcIlwiO1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IHNlbGVjdGlvbk1vZGVsO1xuICAgICAgdGhpcy5zZWFyY2hQYW5lID0gc2VhcmNoUGFuZTtcbiAgIH1cblxuICAgYWN0aXZhdGUobW9kZWwpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRleHQgPSBtb2RlbC5zdWJqZWN0O1xuICAgICAgdGhpcy5wYXRoID0gbW9kZWwucGF0aDtcbiAgICAgIHRoaXMuZW50cnlUeXBlID0gbW9kZWwuZW50cnlUeXBlID8gbW9kZWwuZW50cnlUeXBlIDogXCJ1bmtub3duXCI7XG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFBhbmUuc2VhcmNoVGVybTtcbiAgICAgIHRoaXMuZmFtaWx5ID0gbW9kZWwuZG9jdW1lbnQgPyBtb2RlbC5kb2N1bWVudC5mYW1pbHkgOiBudWxsO1xuICAgICAgdGhpcy5pdGVtcyA9IG1vZGVsLml0ZW1zO1xuICAgfVxuXG4gICBzZWxlY3QoKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzLml0ZW1zWzBdKTtcbiAgIH1cblxuICAgc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdChpdGVtKTtcbiAgIH1cblxuICAgZ2V0IGlzU2VsZWN0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRJdGVtKSA+IC0xO1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
