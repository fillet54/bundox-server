System.register(["./selection-model", "aurelia-framework"], function (_export) {
  "use strict";

  var SelectionModel, ObserverLocator, _prototypeProperties, _classCallCheck, DocumentListItem;
  return {
    setters: [function (_selectionModel) {
      SelectionModel = _selectionModel.SelectionModel;
    }, function (_aureliaFramework) {
      ObserverLocator = _aureliaFramework.ObserverLocator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DocumentListItem = _export("DocumentListItem", (function () {
        function DocumentListItem(selectionModel, observerLocator) {
          _classCallCheck(this, DocumentListItem);

          this.displayText = "";
          this.isSelected = false;
          this.selectionModel = selectionModel;
          this.observerLocator = observerLocator;
        }

        _prototypeProperties(DocumentListItem, {
          inject: {
            value: function inject() {
              return [SelectionModel, ObserverLocator];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(model) {
              this.displayText = "" + model.name + " " + model.version;
              this.observeSelected();
            },
            writable: true,
            configurable: true
          },
          select: {
            value: function select() {
              this.selectionModel.select(this);
            },
            writable: true,
            configurable: true
          },
          observeSelected: {
            value: function observeSelected() {
              var _this = this;
              this.observerLocator.getObserver(this.selectionModel, "selectedItem").subscribe(function (item) {
                return _this.isSelected = _this == item;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return DocumentListItem;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLGNBQWMsRUFDZCxlQUFlLHlDQUVWLGdCQUFnQjs7O0FBSHJCLG9CQUFjLG1CQUFkLGNBQWM7O0FBQ2QscUJBQWUscUJBQWYsZUFBZTs7Ozs7OztBQUVWLHNCQUFnQjtBQUVmLGlCQUZELGdCQUFnQixDQUVkLGNBQWMsRUFBRSxlQUFlO2dDQUZqQyxnQkFBZ0I7O0FBR3ZCLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1NBQ3pDOzs2QkFQUyxnQkFBZ0I7QUFDbkIsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQzthQUFFOzs7OztBQVE3RCxrQkFBUTttQkFBQSxrQkFBQyxLQUFLLEVBQUU7QUFDYixrQkFBSSxDQUFDLFdBQVcsUUFBTSxLQUFLLENBQUMsSUFBSSxTQUFJLEtBQUssQ0FBQyxPQUFPLEFBQUUsQ0FBQztBQUNwRCxrQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCOzs7O0FBRUQsZ0JBQU07bUJBQUEsa0JBQUc7QUFDTixrQkFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7Ozs7QUFFRCx5QkFBZTttQkFBQSwyQkFBRzs7QUFDZixrQkFBSSxDQUFDLGVBQWUsQ0FDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUk7dUJBQUksTUFBSyxVQUFVLEdBQUcsU0FBUSxJQUFJO2VBQUEsQ0FBQyxDQUFDO2FBQ3hEOzs7Ozs7ZUF0QlMsZ0JBQWdCIiwiZmlsZSI6ImRvY3VtZW50LWxpc3RpdGVtLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=