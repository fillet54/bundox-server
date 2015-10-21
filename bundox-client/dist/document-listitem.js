System.register(['./selection-model', './search-pane'], function (_export) {
   'use strict';

   var SelectionModel, SearchPane, DocumentListItem;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_selectionModel) {
         SelectionModel = _selectionModel.SelectionModel;
      }, function (_searchPane) {
         SearchPane = _searchPane.SearchPane;
      }],
      execute: function () {
         DocumentListItem = (function () {
            _createClass(DocumentListItem, null, [{
               key: 'inject',
               value: function inject() {
                  return [SelectionModel, SearchPane];
               }
            }]);

            function DocumentListItem(selectionModel, searchPane) {
               _classCallCheck(this, DocumentListItem);

               this.displayText = "";
               this.family = 'unknown';
               this.selectionModel = selectionModel;
               this.searchPane = searchPane;
            }

            _createClass(DocumentListItem, [{
               key: 'activate',
               value: function activate(model) {
                  this.model = model;
                  this.displayText = model.name + ' ' + model.version;
                  this.family = model.family;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzttQ0FHYSxnQkFBZ0I7Ozs7Ozs7OzBDQUhyQixjQUFjOztrQ0FDZCxVQUFVOzs7QUFFTCx5QkFBZ0I7eUJBQWhCLGdCQUFnQjs7c0JBQ2Isa0JBQUc7QUFBRSx5QkFBTyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFBRTs7O0FBQzdDLHFCQUZELGdCQUFnQixDQUVkLGNBQWMsRUFBRSxVQUFVLEVBQUU7cUNBRjlCLGdCQUFnQjs7QUFHdkIsbUJBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLG1CQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUN4QixtQkFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsbUJBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQy9COzt5QkFQUyxnQkFBZ0I7O3NCQVNsQixrQkFBQyxLQUFLLEVBQUU7QUFDYixzQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsc0JBQUksQ0FBQyxXQUFXLEdBQU0sS0FBSyxDQUFDLElBQUksU0FBSSxLQUFLLENBQUMsT0FBTyxBQUFFLENBQUM7QUFDcEQsc0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDN0I7OztzQkFNSyxrQkFBRztBQUNOLHNCQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDOzs7c0JBRVEscUJBQUc7QUFDVCxzQkFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4Qzs7O29CQVZhLGVBQUc7QUFDZCx5QkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN6RDs7O21CQWpCUyxnQkFBZ0IiLCJmaWxlIjoiZG9jdW1lbnQtbGlzdGl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbk1vZGVsfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5pbXBvcnQge1NlYXJjaFBhbmV9IGZyb20gJy4vc2VhcmNoLXBhbmUnO1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRMaXN0SXRlbSB7XG4gICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW1NlbGVjdGlvbk1vZGVsLCBTZWFyY2hQYW5lXTsgfVxuICAgY29uc3RydWN0b3Ioc2VsZWN0aW9uTW9kZWwsIHNlYXJjaFBhbmUpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRleHQgPSBcIlwiO1xuICAgICAgdGhpcy5mYW1pbHkgPSAndW5rbm93bic7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsID0gc2VsZWN0aW9uTW9kZWw7XG4gICAgICB0aGlzLnNlYXJjaFBhbmUgPSBzZWFyY2hQYW5lO1xuICAgfVxuXG4gICBhY3RpdmF0ZShtb2RlbCkge1xuICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IGAke21vZGVsLm5hbWV9ICR7bW9kZWwudmVyc2lvbn1gO1xuICAgICAgdGhpcy5mYW1pbHkgPSBtb2RlbC5mYW1pbHk7XG4gICB9XG5cbiAgIGdldCBpc1NlbGVjdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRJdGVtID09PSB0aGlzLm1vZGVsO1xuICAgfVxuXG4gICBzZWxlY3QoKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdCh0aGlzLm1vZGVsKTtcbiAgIH1cblxuICAgYWRkRmlsdGVyKCkge1xuICAgICAgdGhpcy5zZWFyY2hQYW5lLmFkZEZpbHRlcih0aGlzLm1vZGVsKTtcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
