System.register(['./selection-model', './documentation-nav-model', 'aurelia-framework'], function (_export) {
   'use strict';

   var SelectionModel, DocumentationNavModel, ObserverLocator, DocumentationResultListItem;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_selectionModel) {
         SelectionModel = _selectionModel.SelectionModel;
      }, function (_documentationNavModel) {
         DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
      }, function (_aureliaFramework) {
         ObserverLocator = _aureliaFramework.ObserverLocator;
      }],
      execute: function () {
         DocumentationResultListItem = (function () {
            _createClass(DocumentationResultListItem, null, [{
               key: 'inject',
               value: function inject() {
                  return [SelectionModel, DocumentationNavModel, ObserverLocator];
               }
            }]);

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

            _createClass(DocumentationResultListItem, [{
               key: 'activate',
               value: function activate(model) {
                  this.displayText = model.subject;
                  this.path = model.path;
                  this.entryType = model.entryType ? model.entryType.charAt(0) : "U";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrREFJYSwyQkFBMkI7Ozs7Ozs7OzBDQUpoQyxjQUFjOzt3REFDZCxxQkFBcUI7OzZDQUNyQixlQUFlOzs7QUFFVixvQ0FBMkI7eUJBQTNCLDJCQUEyQjs7c0JBQ3hCLGtCQUFHO0FBQUUseUJBQU8sQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQUU7OztBQUN6RSxxQkFGRCwyQkFBMkIsQ0FFekIsY0FBYyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRTtxQ0FGMUQsMkJBQTJCOztBQUdsQyxtQkFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsbUJBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLG1CQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixtQkFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDeEIsbUJBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLG1CQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7QUFDbkQsbUJBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO2FBQ3pDOzt5QkFWUywyQkFBMkI7O3NCQVk3QixrQkFBQyxLQUFLLEVBQUU7QUFDYixzQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ2pDLHNCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdkIsc0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbkUsc0JBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDekI7OztzQkFFSyxrQkFBRztBQUNOLHNCQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkM7OztzQkFFYywyQkFBRzs7O0FBQ2Ysc0JBQUksQ0FBQyxlQUFlLENBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUNoRCxTQUFTLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDaEIsMkJBQUssVUFBVSxHQUFHLFNBQVEsSUFBSSxDQUFDO0FBQy9CLHlCQUFJLE1BQUssVUFBVSxFQUNoQixNQUFLLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxNQUFLLElBQUksQ0FBQyxDQUFDO21CQUN0RCxDQUFDLENBQUM7Z0JBQ1I7OzttQkEvQlMsMkJBQTJCIiwiZmlsZSI6ImRvY3VtZW50YXRpb24tcmVzdWx0LWxpc3RpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHtEb2N1bWVudGF0aW9uTmF2TW9kZWx9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1uYXYtbW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25SZXN1bHRMaXN0SXRlbSB7XG4gICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW1NlbGVjdGlvbk1vZGVsLCBEb2N1bWVudGF0aW9uTmF2TW9kZWwsIE9ic2VydmVyTG9jYXRvcl07IH1cbiAgIGNvbnN0cnVjdG9yKHNlbGVjdGlvbk1vZGVsLCBkb2N1bWVudGF0aW9uTmF2TW9kZWwsIG9ic2VydmVyTG9jYXRvcikge1xuICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IFwiXCI7XG4gICAgICB0aGlzLnBhdGggPSBcIiNcIjtcbiAgICAgIHRoaXMuZW50cnlUeXBlID0gXCJcIjtcbiAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IHNlbGVjdGlvbk1vZGVsO1xuICAgICAgdGhpcy5kb2N1bWVudGF0aW9uTmF2TW9kZWwgPSBkb2N1bWVudGF0aW9uTmF2TW9kZWw7XG4gICAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcbiAgIH1cblxuICAgYWN0aXZhdGUobW9kZWwpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRleHQgPSBtb2RlbC5zdWJqZWN0O1xuICAgICAgdGhpcy5wYXRoID0gbW9kZWwucGF0aDtcbiAgICAgIHRoaXMuZW50cnlUeXBlID0gbW9kZWwuZW50cnlUeXBlID8gbW9kZWwuZW50cnlUeXBlLmNoYXJBdCgwKSA6IFwiVVwiO1xuICAgICAgdGhpcy5vYnNlcnZlU2VsZWN0ZWQoKTtcbiAgIH1cblxuICAgc2VsZWN0KCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3QodGhpcyk7XG4gICB9XG5cbiAgIG9ic2VydmVTZWxlY3RlZCgpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yXG4gICAgICAgICAuZ2V0T2JzZXJ2ZXIodGhpcy5zZWxlY3Rpb25Nb2RlbCwgJ3NlbGVjdGVkSXRlbScpXG4gICAgICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdGhpcyA9PSBpdGVtO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZClcbiAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRhdGlvbk5hdk1vZGVsLm5hdmlnYXRlVG8odGhpcy5wYXRoKTtcbiAgICAgICAgIH0pO1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
