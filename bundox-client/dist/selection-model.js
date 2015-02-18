System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, SelectionModel;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SelectionModel = _export("SelectionModel", (function () {
        function SelectionModel() {
          _classCallCheck(this, SelectionModel);

          this.selectedItem = null;
        }

        _prototypeProperties(SelectionModel, null, {
          select: {
            value: function select(item) {
              this.selectedItem = item;
            },
            writable: true,
            configurable: true
          }
        });

        return SelectionModel;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGlvbi1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsY0FBYzs7Ozs7Ozs7QUFBZCxvQkFBYztBQUNiLGlCQURELGNBQWM7Z0NBQWQsY0FBYzs7QUFFckIsY0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDM0I7OzZCQUhTLGNBQWM7QUFLeEIsZ0JBQU07bUJBQUEsZ0JBQUMsSUFBSSxFQUFFO0FBQ1Ysa0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzNCOzs7Ozs7ZUFQUyxjQUFjIiwiZmlsZSI6InNlbGVjdGlvbi1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9