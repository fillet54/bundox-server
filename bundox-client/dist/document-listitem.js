System.register(['./selection-model', './search-pane', './documentation-nav-model', 'aurelia-framework'], function (_export) {
   'use strict';

   var SelectionModel, SearchPane, DocumentationNavModel, ObserverLocator, DocumentListItem;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_selectionModel) {
         SelectionModel = _selectionModel.SelectionModel;
      }, function (_searchPane) {
         SearchPane = _searchPane.SearchPane;
      }, function (_documentationNavModel) {
         DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
      }, function (_aureliaFramework) {
         ObserverLocator = _aureliaFramework.ObserverLocator;
      }],
      execute: function () {
         DocumentListItem = (function () {
            _createClass(DocumentListItem, null, [{
               key: 'inject',
               value: function inject() {
                  return [SelectionModel, SearchPane, ObserverLocator, DocumentationNavModel];
               }
            }]);

            function DocumentListItem(selectionModel, searchPane, locator, documentationNavModel) {
               _classCallCheck(this, DocumentListItem);

               this.displayText = "";
               this.family = 'unknown';
               this.selectionModel = selectionModel;
               this.searchPane = searchPane;
               this.observerLocator = locator;
               this.documentationNavModel = documentationNavModel;
            }

            _createClass(DocumentListItem, [{
               key: 'activate',
               value: function activate(model) {
                  this.model = model;
                  this.displayText = model.name + ' ' + model.version;
                  this.family = model.family;
                  this.observeSelected();
               }
            }, {
               key: 'select',
               value: function select() {
                  this.selectionModel.select(this.model);
               }
            }, {
               key: 'addFilter',
               value: function addFilter() {
                  this.searchPane.addFilter(this.model);
               }
            }, {
               key: 'observeSelected',
               value: function observeSelected() {
                  var _this = this;

                  this.observerLocator.getObserver(this.selectionModel, 'selectedItem').subscribe(function (item) {
                     if (_this.isSelected) _this.documentationNavModel.navigateTo(_this.model.indexPath);
                  });
               }
            }, {
               key: 'isSelected',
               get: function get() {
                  return this.selectionModel.selectedItem === this.model;
               }
            }]);

            return DocumentListItem;
         })();

         _export('DocumentListItem', DocumentListItem);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyRUFLYSxnQkFBZ0I7Ozs7Ozs7OzBDQUxyQixjQUFjOztrQ0FDZCxVQUFVOzt3REFDVixxQkFBcUI7OzZDQUNyQixlQUFlOzs7QUFFVix5QkFBZ0I7eUJBQWhCLGdCQUFnQjs7c0JBQ2Isa0JBQUc7QUFBRSx5QkFBTyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBQUU7OztBQUNyRixxQkFGRCxnQkFBZ0IsQ0FFZCxjQUFjLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRTtxQ0FGOUQsZ0JBQWdCOztBQUd2QixtQkFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsbUJBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLG1CQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUNyQyxtQkFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsbUJBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQy9CLG1CQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7YUFDckQ7O3lCQVRTLGdCQUFnQjs7c0JBV2xCLGtCQUFDLEtBQUssRUFBRTtBQUNiLHNCQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixzQkFBSSxDQUFDLFdBQVcsR0FBTSxLQUFLLENBQUMsSUFBSSxTQUFJLEtBQUssQ0FBQyxPQUFPLEFBQUUsQ0FBQztBQUNwRCxzQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzNCLHNCQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCOzs7c0JBTUssa0JBQUc7QUFDTixzQkFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6Qzs7O3NCQUVRLHFCQUFHO0FBQ1Qsc0JBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEM7OztzQkFFYywyQkFBRzs7O0FBQ2Ysc0JBQUksQ0FBQyxlQUFlLENBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUNoRCxTQUFTLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDaEIseUJBQUksTUFBSyxVQUFVLEVBQ2hCLE1BQUsscUJBQXFCLENBQUMsVUFBVSxDQUFDLE1BQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO21CQUNqRSxDQUFDLENBQUM7Z0JBQ1I7OztvQkFuQmEsZUFBRztBQUNkLHlCQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3pEOzs7bUJBcEJTLGdCQUFnQiIsImZpbGUiOiJkb2N1bWVudC1saXN0aXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcbmltcG9ydCB7U2VhcmNoUGFuZX0gZnJvbSAnLi9zZWFyY2gtcGFuZSc7XG5pbXBvcnQge0RvY3VtZW50YXRpb25OYXZNb2RlbH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLW5hdi1tb2RlbCc7XG5pbXBvcnQge09ic2VydmVyTG9jYXRvcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRMaXN0SXRlbSB7XG4gICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW1NlbGVjdGlvbk1vZGVsLCBTZWFyY2hQYW5lLCBPYnNlcnZlckxvY2F0b3IsIERvY3VtZW50YXRpb25OYXZNb2RlbF07IH1cbiAgIGNvbnN0cnVjdG9yKHNlbGVjdGlvbk1vZGVsLCBzZWFyY2hQYW5lLCBsb2NhdG9yLCBkb2N1bWVudGF0aW9uTmF2TW9kZWwpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRleHQgPSBcIlwiO1xuICAgICAgdGhpcy5mYW1pbHkgPSAndW5rbm93bic7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsID0gc2VsZWN0aW9uTW9kZWw7XG4gICAgICB0aGlzLnNlYXJjaFBhbmUgPSBzZWFyY2hQYW5lO1xuICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBsb2NhdG9yO1xuICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwgPSBkb2N1bWVudGF0aW9uTmF2TW9kZWw7XG4gICB9XG5cbiAgIGFjdGl2YXRlKG1vZGVsKSB7XG4gICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gYCR7bW9kZWwubmFtZX0gJHttb2RlbC52ZXJzaW9ufWA7XG4gICAgICB0aGlzLmZhbWlseSA9IG1vZGVsLmZhbWlseTtcbiAgICAgIHRoaXMub2JzZXJ2ZVNlbGVjdGVkKCk7XG4gICB9XG5cbiAgIGdldCBpc1NlbGVjdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRJdGVtID09PSB0aGlzLm1vZGVsO1xuICAgfVxuXG4gICBzZWxlY3QoKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzLm1vZGVsKTtcbiAgIH1cblxuICAgYWRkRmlsdGVyKCkge1xuICAgICAgdGhpcy5zZWFyY2hQYW5lLmFkZEZpbHRlcih0aGlzLm1vZGVsKTtcbiAgIH1cblxuICAgb2JzZXJ2ZVNlbGVjdGVkKCkge1xuICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3JcbiAgICAgICAgIC5nZXRPYnNlcnZlcih0aGlzLnNlbGVjdGlvbk1vZGVsLCAnc2VsZWN0ZWRJdGVtJylcbiAgICAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKVxuICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwubmF2aWdhdGVUbyh0aGlzLm1vZGVsLmluZGV4UGF0aCk7XG4gICAgICAgICB9KTtcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
