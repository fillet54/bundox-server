System.register(['./selection-model', './documentation-nav-model', './search-pane', 'aurelia-framework'], function (_export) {
   'use strict';

   var SelectionModel, DocumentationNavModel, SearchPane, ObserverLocator, DocumentationResultListItem;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_selectionModel) {
         SelectionModel = _selectionModel.SelectionModel;
      }, function (_documentationNavModel) {
         DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
      }, function (_searchPane) {
         SearchPane = _searchPane.SearchPane;
      }, function (_aureliaFramework) {
         ObserverLocator = _aureliaFramework.ObserverLocator;
      }],
      execute: function () {
         DocumentationResultListItem = (function () {
            _createClass(DocumentationResultListItem, null, [{
               key: 'inject',
               value: function inject() {
                  return [SelectionModel, DocumentationNavModel, ObserverLocator, SearchPane];
               }
            }]);

            function DocumentationResultListItem(selectionModel, documentationNavModel, observerLocator, searchPane) {
               _classCallCheck(this, DocumentationResultListItem);

               this.displayText = "";
               this.path = "#";
               this.entryType = "";

               this.selectionModel = selectionModel;
               this.documentationNavModel = documentationNavModel;
               this.observerLocator = observerLocator;
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
               key: 'observeSelected',
               value: function observeSelected() {
                  var _this = this;

                  this.observerLocator.getObserver(this.selectionModel, 'selectedItem').subscribe(function (item) {
                     _this.isSelected = _this.items.includes(item);
                  });
               }
            }, {
               key: 'isSelected',
               get: function get() {
                  return this.items.includes(this.selectionModel.selectedItem);
               }
            }]);

            return DocumentationResultListItem;
         })();

         _export('DocumentationResultListItem', DocumentationResultListItem);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyRUFLYSwyQkFBMkI7Ozs7Ozs7OzBDQUxoQyxjQUFjOzt3REFDZCxxQkFBcUI7O2tDQUNyQixVQUFVOzs2Q0FDVixlQUFlOzs7QUFFVixvQ0FBMkI7eUJBQTNCLDJCQUEyQjs7c0JBQ3hCLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUFFOzs7QUFDckYscUJBRkQsMkJBQTJCLENBRXpCLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFO3FDQUZ0RSwyQkFBMkI7O0FBR2xDLG1CQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixtQkFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEIsbUJBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztBQUVwQixtQkFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsbUJBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztBQUNuRCxtQkFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsbUJBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQy9COzt5QkFYUywyQkFBMkI7O3NCQWE3QixrQkFBQyxLQUFLLEVBQUU7QUFDYixzQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ2pDLHNCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdkIsc0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7QUFFL0Qsc0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDN0Msc0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDNUQsc0JBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDM0I7OztzQkFFSyxrQkFBRztBQUNOLHNCQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDOzs7c0JBRVMsb0JBQUMsSUFBSSxFQUFFO0FBQ2Qsc0JBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQzs7O3NCQUtjLDJCQUFHOzs7QUFDZixzQkFBSSxDQUFDLGVBQWUsQ0FDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNoQiwyQkFBSyxVQUFVLEdBQUcsTUFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO21CQUM5QyxDQUFDLENBQUM7Z0JBQ1I7OztvQkFUYSxlQUFHO0FBQ2QseUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0Q7OzttQkFqQ1MsMkJBQTJCIiwiZmlsZSI6ImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHtEb2N1bWVudGF0aW9uTmF2TW9kZWx9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1uYXYtbW9kZWwnO1xuaW1wb3J0IHtTZWFyY2hQYW5lfSBmcm9tICcuL3NlYXJjaC1wYW5lJztcbmltcG9ydCB7T2JzZXJ2ZXJMb2NhdG9yfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uUmVzdWx0TGlzdEl0ZW0ge1xuICAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtTZWxlY3Rpb25Nb2RlbCwgRG9jdW1lbnRhdGlvbk5hdk1vZGVsLCBPYnNlcnZlckxvY2F0b3IsIFNlYXJjaFBhbmVdOyB9XG4gICBjb25zdHJ1Y3RvcihzZWxlY3Rpb25Nb2RlbCwgZG9jdW1lbnRhdGlvbk5hdk1vZGVsLCBvYnNlcnZlckxvY2F0b3IsIHNlYXJjaFBhbmUpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRleHQgPSBcIlwiO1xuICAgICAgdGhpcy5wYXRoID0gXCIjXCI7XG4gICAgICB0aGlzLmVudHJ5VHlwZSA9IFwiXCI7XG4gICAgLy8gIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IHNlbGVjdGlvbk1vZGVsO1xuICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwgPSBkb2N1bWVudGF0aW9uTmF2TW9kZWw7XG4gICAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcbiAgICAgIHRoaXMuc2VhcmNoUGFuZSA9IHNlYXJjaFBhbmU7XG4gICB9XG5cbiAgIGFjdGl2YXRlKG1vZGVsKSB7XG4gICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gbW9kZWwuc3ViamVjdDtcbiAgICAgIHRoaXMucGF0aCA9IG1vZGVsLnBhdGg7XG4gICAgICB0aGlzLmVudHJ5VHlwZSA9IG1vZGVsLmVudHJ5VHlwZSA/IG1vZGVsLmVudHJ5VHlwZSA6IFwidW5rbm93blwiO1xuICAgLy8gICB0aGlzLm9ic2VydmVTZWxlY3RlZCgpO1xuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hQYW5lLnNlYXJjaFRlcm07XG4gICAgICB0aGlzLmZhbWlseSA9IG1vZGVsLmRvY3VtZW50ID8gbW9kZWwuZG9jdW1lbnQuZmFtaWx5IDogbnVsbDtcbiAgICAgIHRoaXMuaXRlbXMgPSBtb2RlbC5pdGVtcztcbiAgIH1cblxuICAgc2VsZWN0KCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcy5pdGVtc1swXSk7XG4gICB9XG5cbiAgIHNlbGVjdEl0ZW0oaXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSk7XG4gICB9XG5cbiAgIGdldCBpc1NlbGVjdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuaW5jbHVkZXModGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZEl0ZW0pO1xuICAgfVxuICAgb2JzZXJ2ZVNlbGVjdGVkKCkge1xuICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3JcbiAgICAgICAgIC5nZXRPYnNlcnZlcih0aGlzLnNlbGVjdGlvbk1vZGVsLCAnc2VsZWN0ZWRJdGVtJylcbiAgICAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0aGlzLml0ZW1zLmluY2x1ZGVzKGl0ZW0pO1xuICAgICAgICAgfSk7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
