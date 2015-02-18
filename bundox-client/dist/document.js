System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Document;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Document = _export("Document", (function () {
        function Document(name, version) {
          _classCallCheck(this, Document);

          this.name = name;
          this.type = "document";
          this.version = version;
        }

        _prototypeProperties(Document, null, {
          activate: {
            value: function activate(model) {
              this.name = model.name;
              this.version = model.version;
            },
            writable: true,
            configurable: true
          }
        });

        return Document;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxRQUFROzs7Ozs7OztBQUFSLGNBQVE7QUFDUCxpQkFERCxRQUFRLENBQ04sSUFBSSxFQUFFLE9BQU87Z0NBRGYsUUFBUTs7QUFFZixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN6Qjs7NkJBTFMsUUFBUTtBQU9sQixrQkFBUTttQkFBQSxrQkFBQyxLQUFLLEVBQUU7QUFDYixrQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLGtCQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDL0I7Ozs7OztlQVZTLFFBQVEiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==