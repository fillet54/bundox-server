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
               this.isSelected = false;
               this.selectionModel = selectionModel;
               this.observerLocator = observerLocator;
            }

            _createClass(DocumentListItem, [{
               key: 'activate',
               value: function activate(model) {
                  this.displayText = model.name + ' ' + model.version;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3Q0FHYSxnQkFBZ0I7Ozs7Ozs7OzBDQUhyQixjQUFjOzs2Q0FDZCxlQUFlOzs7QUFFVix5QkFBZ0I7eUJBQWhCLGdCQUFnQjs7c0JBQ2Isa0JBQUc7QUFBRSx5QkFBTyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFBRTs7O0FBQ2xELHFCQUZELGdCQUFnQixDQUVkLGNBQWMsRUFBRSxlQUFlLEVBQUU7cUNBRm5DLGdCQUFnQjs7QUFHdkIsbUJBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLG1CQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN4QixtQkFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsbUJBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO2FBQ3pDOzt5QkFQUyxnQkFBZ0I7O3NCQVNsQixrQkFBQyxLQUFLLEVBQUU7QUFDYixzQkFBSSxDQUFDLFdBQVcsR0FBTSxLQUFLLENBQUMsSUFBSSxTQUFJLEtBQUssQ0FBQyxPQUFPLEFBQUUsQ0FBQztBQUNwRCxzQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN6Qjs7O3NCQUVLLGtCQUFHO0FBQ04sc0JBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQzs7O3NCQUVjLDJCQUFHOzs7QUFDZixzQkFBSSxDQUFDLGVBQWUsQ0FDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUk7NEJBQUksTUFBSyxVQUFVLEdBQUcsU0FBUSxJQUFJO21CQUFBLENBQUMsQ0FBQztnQkFDeEQ7OzttQkF0QlMsZ0JBQWdCIiwiZmlsZSI6ImRvY3VtZW50LWxpc3RpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50TGlzdEl0ZW0ge1xuICAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtTZWxlY3Rpb25Nb2RlbCwgT2JzZXJ2ZXJMb2NhdG9yXTsgfVxuICAgY29uc3RydWN0b3Ioc2VsZWN0aW9uTW9kZWwsIG9ic2VydmVyTG9jYXRvcikge1xuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IFwiXCI7XG4gICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwgPSBzZWxlY3Rpb25Nb2RlbDtcbiAgICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xuICAgfVxuXG4gICBhY3RpdmF0ZShtb2RlbCkge1xuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IGAke21vZGVsLm5hbWV9ICR7bW9kZWwudmVyc2lvbn1gO1xuICAgICAgdGhpcy5vYnNlcnZlU2VsZWN0ZWQoKTtcbiAgIH1cblxuICAgc2VsZWN0KCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICB9XG5cbiAgIG9ic2VydmVTZWxlY3RlZCgpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yXG4gICAgICAgICAuZ2V0T2JzZXJ2ZXIodGhpcy5zZWxlY3Rpb25Nb2RlbCwgJ3NlbGVjdGVkSXRlbScpXG4gICAgICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4gdGhpcy5pc1NlbGVjdGVkID0gdGhpcyA9PSBpdGVtKTtcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
