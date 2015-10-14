System.register(['./selection-model', 'aurelia-framework'], function (_export) {
   'use strict';

   var SelectionModel, ObserverLocator, DocumentListItem;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_selectionModel) {
         SelectionModel = _selectionModel.SelectionModel;
      }, function (_aureliaFramework) {
         ObserverLocator = _aureliaFramework.ObserverLocator;
      }],
      execute: function () {
         DocumentListItem = (function () {
            _createClass(DocumentListItem, null, [{
               key: 'inject',
               value: function inject() {
                  return [SelectionModel, ObserverLocator];
               }
            }]);

            function DocumentListItem(selectionModel, observerLocator) {
               _classCallCheck(this, DocumentListItem);

               this.displayText = "";
               this.family = 'unknown';
               this.isSelected = false;
               this.selectionModel = selectionModel;
               this.observerLocator = observerLocator;
            }

            _createClass(DocumentListItem, [{
               key: 'activate',
               value: function activate(model) {
                  this.displayText = model.name + ' ' + model.version;
                  this.family = model.family;
                  this.observeSelected();
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
                     return _this.isSelected = _this == item;
                  });
               }
            }]);

            return DocumentListItem;
         })();

         _export('DocumentListItem', DocumentListItem);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3Q0FHYSxnQkFBZ0I7Ozs7Ozs7OzBDQUhyQixjQUFjOzs2Q0FDZCxlQUFlOzs7QUFFVix5QkFBZ0I7eUJBQWhCLGdCQUFnQjs7c0JBQ2Isa0JBQUc7QUFBRSx5QkFBTyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFBRTs7O0FBQ2xELHFCQUZELGdCQUFnQixDQUVkLGNBQWMsRUFBRSxlQUFlLEVBQUU7cUNBRm5DLGdCQUFnQjs7QUFHdkIsbUJBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLG1CQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUN4QixtQkFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDeEIsbUJBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLG1CQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzthQUN6Qzs7eUJBUlMsZ0JBQWdCOztzQkFVbEIsa0JBQUMsS0FBSyxFQUFFO0FBQ2Isc0JBQUksQ0FBQyxXQUFXLEdBQU0sS0FBSyxDQUFDLElBQUksU0FBSSxLQUFLLENBQUMsT0FBTyxBQUFFLENBQUM7QUFDcEQsc0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUMzQixzQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN6Qjs7O3NCQUVLLGtCQUFHO0FBQ04sc0JBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQzs7O3NCQUVjLDJCQUFHOzs7QUFDZixzQkFBSSxDQUFDLGVBQWUsQ0FDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUk7NEJBQUksTUFBSyxVQUFVLEdBQUcsU0FBUSxJQUFJO21CQUFBLENBQUMsQ0FBQztnQkFDeEQ7OzttQkF4QlMsZ0JBQWdCIiwiZmlsZSI6ImRvY3VtZW50LWxpc3RpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50TGlzdEl0ZW0ge1xuICAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtTZWxlY3Rpb25Nb2RlbCwgT2JzZXJ2ZXJMb2NhdG9yXTsgfVxuICAgY29uc3RydWN0b3Ioc2VsZWN0aW9uTW9kZWwsIG9ic2VydmVyTG9jYXRvcikge1xuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IFwiXCI7XG4gICAgICB0aGlzLmZhbWlseSA9ICd1bmtub3duJztcbiAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IHNlbGVjdGlvbk1vZGVsO1xuICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XG4gICB9XG5cbiAgIGFjdGl2YXRlKG1vZGVsKSB7XG4gICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gYCR7bW9kZWwubmFtZX0gJHttb2RlbC52ZXJzaW9ufWA7XG4gICAgICB0aGlzLmZhbWlseSA9IG1vZGVsLmZhbWlseTtcbiAgICAgIHRoaXMub2JzZXJ2ZVNlbGVjdGVkKCk7XG4gICB9XG5cbiAgIHNlbGVjdCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHRoaXMpO1xuICAgfVxuXG4gICBvYnNlcnZlU2VsZWN0ZWQoKSB7XG4gICAgICB0aGlzLm9ic2VydmVyTG9jYXRvclxuICAgICAgICAgLmdldE9ic2VydmVyKHRoaXMuc2VsZWN0aW9uTW9kZWwsICdzZWxlY3RlZEl0ZW0nKVxuICAgICAgICAgLnN1YnNjcmliZShpdGVtID0+IHRoaXMuaXNTZWxlY3RlZCA9IHRoaXMgPT0gaXRlbSk7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
