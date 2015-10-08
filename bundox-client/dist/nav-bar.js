System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var Behavior, NavBar;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      NavBar = (function () {
        function NavBar() {
          _classCallCheck(this, NavBar);
        }

        _createClass(NavBar, null, [{
          key: 'metadata',
          value: function metadata() {
            return Behavior.withProperty('router');
          }
        }]);

        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLE1BQU07Ozs7Ozs7O21DQUZYLFFBQVE7OztBQUVILFlBQU07aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7cUJBQU4sTUFBTTs7aUJBQ0Ysb0JBQUU7QUFBRSxtQkFBTyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQUU7OztlQURqRCxNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIge1xuICBzdGF0aWMgbWV0YWRhdGEoKXsgcmV0dXJuIEJlaGF2aW9yLndpdGhQcm9wZXJ0eSgncm91dGVyJyk7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
