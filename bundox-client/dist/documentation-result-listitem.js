System.register(["./selection-model", "./documentation-nav-model", "aurelia-framework"], function (_export) {
  "use strict";

  var SelectionModel, DocumentationNavModel, ObserverLocator, _prototypeProperties, _classCallCheck, DocumentationResultListItem;
  return {
    setters: [function (_selectionModel) {
      SelectionModel = _selectionModel.SelectionModel;
    }, function (_documentationNavModel) {
      DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
    }, function (_aureliaFramework) {
      ObserverLocator = _aureliaFramework.ObserverLocator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DocumentationResultListItem = _export("DocumentationResultListItem", (function () {
        function DocumentationResultListItem(selectionModel, documentationNavModel, observerLocator) {
          _classCallCheck(this, DocumentationResultListItem);

          this.displayText = "";
          this.path = "#";
          this.entryType = "";
          this.isSelected = false;
          this.selectionModel = selectionModel;
          this.documentationNavModel = documentationNavModel;
          this.observerLocator = observerLocator;
        }

        _prototypeProperties(DocumentationResultListItem, {
          inject: {
            value: function inject() {
              return [SelectionModel, DocumentationNavModel, ObserverLocator];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(model) {
              this.displayText = model.subject;
              this.path = model.path;
              this.entryType = model.entryType ? model.entryType.charAt(0) : "U";
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
                _this.isSelected = _this == item;
                if (_this.isSelected) _this.documentationNavModel.navigateTo(_this.path);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return DocumentationResultListItem;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIsZUFBZSx5Q0FFViwyQkFBMkI7OztBQUpoQyxvQkFBYyxtQkFBZCxjQUFjOztBQUNkLDJCQUFxQiwwQkFBckIscUJBQXFCOztBQUNyQixxQkFBZSxxQkFBZixlQUFlOzs7Ozs7O0FBRVYsaUNBQTJCO0FBRTFCLGlCQUZELDJCQUEyQixDQUV6QixjQUFjLEVBQUUscUJBQXFCLEVBQUUsZUFBZTtnQ0FGeEQsMkJBQTJCOztBQUdsQyxjQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixjQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNoQixjQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixjQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN4QixjQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUNyQyxjQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7QUFDbkQsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7U0FDekM7OzZCQVZTLDJCQUEyQjtBQUM5QixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBV3BGLGtCQUFRO21CQUFBLGtCQUFDLEtBQUssRUFBRTtBQUNiLGtCQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDakMsa0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN2QixrQkFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNuRSxrQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCOzs7O0FBRUQsZ0JBQU07bUJBQUEsa0JBQUc7QUFDTixrQkFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7Ozs7QUFFRCx5QkFBZTttQkFBQSwyQkFBRzs7QUFDZixrQkFBSSxDQUFDLGVBQWUsQ0FDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNoQixzQkFBSyxVQUFVLEdBQUcsU0FBUSxJQUFJLENBQUM7QUFDL0Isb0JBQUksTUFBSyxVQUFVLEVBQ2hCLE1BQUsscUJBQXFCLENBQUMsVUFBVSxDQUFDLE1BQUssSUFBSSxDQUFDLENBQUM7ZUFDdEQsQ0FBQyxDQUFDO2FBQ1I7Ozs7OztlQS9CUywyQkFBMkIiLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1yZXN1bHQtbGlzdGl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==