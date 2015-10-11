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
               this.isSelected = false;
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
                  this.observeSelected();
                  this.searchTerm = this.searchPane.searchTerm;
               }
            }, {
               key: 'select',
               value: function select() {
                  this.selectionModel.select(this);
               }
            }, {
               key: 'observeSelected',
               value: function observeSelected() {
                  var _this = this;

                  this.observerLocator.getObserver(this.selectionModel, 'selectedItem').subscribe(function (item) {
                     _this.isSelected = _this == item;
                     if (_this.isSelected) _this.documentationNavModel.navigateTo(_this.path);
                  });
               }
            }]);

            return DocumentationResultListItem;
         })();

         _export('DocumentationResultListItem', DocumentationResultListItem);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyRUFLYSwyQkFBMkI7Ozs7Ozs7OzBDQUxoQyxjQUFjOzt3REFDZCxxQkFBcUI7O2tDQUNyQixVQUFVOzs2Q0FDVixlQUFlOzs7QUFFVixvQ0FBMkI7eUJBQTNCLDJCQUEyQjs7c0JBQ3hCLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUFFOzs7QUFDckYscUJBRkQsMkJBQTJCLENBRXpCLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFO3FDQUZ0RSwyQkFBMkI7O0FBR2xDLG1CQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixtQkFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEIsbUJBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLG1CQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN4QixtQkFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsbUJBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztBQUNuRCxtQkFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsbUJBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQy9COzt5QkFYUywyQkFBMkI7O3NCQWE3QixrQkFBQyxLQUFLLEVBQUU7QUFDYixzQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ2pDLHNCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdkIsc0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMvRCxzQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3ZCLHNCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO2dCQUMvQzs7O3NCQUVLLGtCQUFHO0FBQ04sc0JBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQzs7O3NCQUVjLDJCQUFHOzs7QUFDZixzQkFBSSxDQUFDLGVBQWUsQ0FDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNoQiwyQkFBSyxVQUFVLEdBQUcsU0FBUSxJQUFJLENBQUM7QUFDL0IseUJBQUksTUFBSyxVQUFVLEVBQ2hCLE1BQUsscUJBQXFCLENBQUMsVUFBVSxDQUFDLE1BQUssSUFBSSxDQUFDLENBQUM7bUJBQ3RELENBQUMsQ0FBQztnQkFDUjs7O21CQWpDUywyQkFBMkIiLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1yZXN1bHQtbGlzdGl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbk1vZGVsfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5pbXBvcnQge0RvY3VtZW50YXRpb25OYXZNb2RlbH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLW5hdi1tb2RlbCc7XG5pbXBvcnQge1NlYXJjaFBhbmV9IGZyb20gJy4vc2VhcmNoLXBhbmUnO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25SZXN1bHRMaXN0SXRlbSB7XG4gICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW1NlbGVjdGlvbk1vZGVsLCBEb2N1bWVudGF0aW9uTmF2TW9kZWwsIE9ic2VydmVyTG9jYXRvciwgU2VhcmNoUGFuZV07IH1cbiAgIGNvbnN0cnVjdG9yKHNlbGVjdGlvbk1vZGVsLCBkb2N1bWVudGF0aW9uTmF2TW9kZWwsIG9ic2VydmVyTG9jYXRvciwgc2VhcmNoUGFuZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IFwiXCI7XG4gICAgICB0aGlzLnBhdGggPSBcIiNcIjtcbiAgICAgIHRoaXMuZW50cnlUeXBlID0gXCJcIjtcbiAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IHNlbGVjdGlvbk1vZGVsO1xuICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwgPSBkb2N1bWVudGF0aW9uTmF2TW9kZWw7XG4gICAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcbiAgICAgIHRoaXMuc2VhcmNoUGFuZSA9IHNlYXJjaFBhbmU7XG4gICB9XG5cbiAgIGFjdGl2YXRlKG1vZGVsKSB7XG4gICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gbW9kZWwuc3ViamVjdDtcbiAgICAgIHRoaXMucGF0aCA9IG1vZGVsLnBhdGg7XG4gICAgICB0aGlzLmVudHJ5VHlwZSA9IG1vZGVsLmVudHJ5VHlwZSA/IG1vZGVsLmVudHJ5VHlwZSA6IFwidW5rbm93blwiO1xuICAgICAgdGhpcy5vYnNlcnZlU2VsZWN0ZWQoKTtcbiAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHRoaXMuc2VhcmNoUGFuZS5zZWFyY2hUZXJtO1xuICAgfVxuXG4gICBzZWxlY3QoKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzKTtcbiAgIH1cblxuICAgb2JzZXJ2ZVNlbGVjdGVkKCkge1xuICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3JcbiAgICAgICAgIC5nZXRPYnNlcnZlcih0aGlzLnNlbGVjdGlvbk1vZGVsLCAnc2VsZWN0ZWRJdGVtJylcbiAgICAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0aGlzID09IGl0ZW07XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKVxuICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwubmF2aWdhdGVUbyh0aGlzLnBhdGgpO1xuICAgICAgICAgfSk7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
