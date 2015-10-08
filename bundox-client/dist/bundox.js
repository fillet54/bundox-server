System.register(['./bundox-service', './documentation-nav-model', 'aurelia-framework', 'rx'], function (_export) {
   'use strict';

   var BundoxService, DocumentationNavModel, ObserverLocator, rx, indexUrl, url, searchUrl, Bundox;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_bundoxService) {
         BundoxService = _bundoxService.BundoxService;
      }, function (_documentationNavModel) {
         DocumentationNavModel = _documentationNavModel.DocumentationNavModel;
      }, function (_aureliaFramework) {
         ObserverLocator = _aureliaFramework.ObserverLocator;
      }, function (_rx) {
         rx = _rx['default'];
      }],
      execute: function () {
         indexUrl = "http://localhost:8080/static/documents/java/1.7.0/My.html";
         url = 'http://localhost:8080/bundox/api/documents';
         searchUrl = 'http://localhost:8080/bundox/api/documents/documentation?searchTerm=';

         Bundox = (function () {
            _createClass(Bundox, null, [{
               key: 'inject',
               value: function inject() {
                  return [BundoxService, ObserverLocator, DocumentationNavModel];
               }
            }]);

            function Bundox(bundoxService, locator, documentationNavModel) {
               _classCallCheck(this, Bundox);

               this.heading = 'Bundox';
               this.items = [];
               this.searchTerm = '';
               this.src = "#";

               this.bundoxApi = bundoxService;
               this.locator = locator;
               this.documentationNavModel = documentationNavModel;
            }

            _createClass(Bundox, [{
               key: 'activate',
               value: function activate() {
                  var _this = this;

                  var http = this.http;
                  var searchChange = rx.Observable.create(function (observer) {
                     _this.locator.getObserver(_this, 'searchTerm').subscribe(function (term) {
                        return observer.onNext(term);
                     });
                  }).debounce(400).distinctUntilChanged().flatMapLatest(this.createSearcher()).subscribe(function (r) {
                     return _this.items = r;
                  });

                  this.observeDocumenationNavModel();
                  this.documentationNavModel.navigateTo(indexUrl);
                  return this.bundoxApi.retrieveAllDocuments().then(function (docs) {
                     _this.items = docs;
                  });
               }
            }, {
               key: 'createSearcher',
               value: function createSearcher() {
                  var api = this.bundoxApi;
                  return function (term) {
                     if (term == "") return api.retrieveAllDocuments();else return api.searchAllDocumentation(term);
                  };
               }
            }, {
               key: 'observeDocumenationNavModel',
               value: function observeDocumenationNavModel() {
                  var _this2 = this;

                  this.locator.getObserver(this.documentationNavModel, 'url').subscribe(function (url) {
                     return _this2.src = url;
                  });
               }
            }]);

            return Bundox;
         })();

         _export('Bundox', Bundox);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBS0ksUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEVBRUEsTUFBTTs7Ozs7Ozs7d0NBVFgsYUFBYTs7d0RBQ2IscUJBQXFCOzs2Q0FDckIsZUFBZTs7Ozs7QUFHbkIsaUJBQVEsR0FBRywyREFBMkQ7QUFDdEUsWUFBRyxHQUFHLDRDQUE0QztBQUNsRCxrQkFBUyxHQUFHLHNFQUFzRTs7QUFFekUsZUFBTTt5QkFBTixNQUFNOztzQkFDSixrQkFBRztBQUFFLHlCQUFPLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2dCQUFFOzs7QUFDeEUscUJBRkEsTUFBTSxDQUVMLGFBQWEsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUU7cUNBRmhELE1BQU07O0FBR2QsbUJBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLG1CQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixtQkFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsbUJBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVmLG1CQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUMvQixtQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsbUJBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQzthQUNyRDs7eUJBWFUsTUFBTTs7c0JBYVQsb0JBQUU7OztBQUNQLHNCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLHNCQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqRCwyQkFBSyxPQUFPLENBQ1IsV0FBVyxRQUFPLFlBQVksQ0FBQyxDQUMvQixTQUFTLENBQUMsVUFBQSxJQUFJOytCQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3NCQUFBLENBQUMsQ0FBQzttQkFDL0MsQ0FBQyxDQUNELFFBQVEsQ0FBQyxHQUFHLENBQVEsQ0FDcEIsb0JBQW9CLEVBQUUsQ0FDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUNwQyxTQUFTLENBQUMsVUFBQSxDQUFDOzRCQUFJLE1BQUssS0FBSyxHQUFHLENBQUM7bUJBQUEsQ0FBQyxDQUFDOztBQUVoQyxzQkFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7QUFDbkMsc0JBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQseUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN2RCwyQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO21CQUNwQixDQUFDLENBQUM7Z0JBQ0w7OztzQkFFYSwwQkFBRztBQUNkLHNCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3pCLHlCQUFPLFVBQUEsSUFBSSxFQUFJO0FBQ1oseUJBQUksSUFBSSxJQUFJLEVBQUUsRUFDWCxPQUFPLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFBLEtBRWpDLE9BQU8sR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO21CQUM3QyxDQUFBO2dCQUNIOzs7c0JBRTBCLHVDQUFHOzs7QUFDM0Isc0JBQUksQ0FBQyxPQUFPLENBQ1IsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FDOUMsU0FBUyxDQUFDLFVBQUEsR0FBRzs0QkFBSSxPQUFLLEdBQUcsR0FBRyxHQUFHO21CQUFBLENBQUMsQ0FBQztnQkFDdkM7OzttQkE5Q1UsTUFBTSIsImZpbGUiOiJidW5kb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1bmRveFNlcnZpY2V9IGZyb20gJy4vYnVuZG94LXNlcnZpY2UnO1xuaW1wb3J0IHtEb2N1bWVudGF0aW9uTmF2TW9kZWx9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1uYXYtbW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCByeCBmcm9tICdyeCc7IFxuXG52YXIgaW5kZXhVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9zdGF0aWMvZG9jdW1lbnRzL2phdmEvMS43LjAvTXkuaHRtbFwiO1xudmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYnVuZG94L2FwaS9kb2N1bWVudHMnO1xudmFyIHNlYXJjaFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYnVuZG94L2FwaS9kb2N1bWVudHMvZG9jdW1lbnRhdGlvbj9zZWFyY2hUZXJtPSc7XG5cbmV4cG9ydCBjbGFzcyBCdW5kb3gge1xuICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW0J1bmRveFNlcnZpY2UsIE9ic2VydmVyTG9jYXRvciwgRG9jdW1lbnRhdGlvbk5hdk1vZGVsXTsgfVxuICBjb25zdHJ1Y3RvcihidW5kb3hTZXJ2aWNlLCBsb2NhdG9yLCBkb2N1bWVudGF0aW9uTmF2TW9kZWwpIHtcbiAgICAgdGhpcy5oZWFkaW5nID0gJ0J1bmRveCc7XG4gICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgdGhpcy5zZWFyY2hUZXJtID0gJyc7XG4gICAgIHRoaXMuc3JjID0gXCIjXCI7XG4gICAgIFxuICAgICB0aGlzLmJ1bmRveEFwaSA9IGJ1bmRveFNlcnZpY2U7XG4gICAgIHRoaXMubG9jYXRvciA9IGxvY2F0b3I7XG4gICAgIHRoaXMuZG9jdW1lbnRhdGlvbk5hdk1vZGVsID0gZG9jdW1lbnRhdGlvbk5hdk1vZGVsO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICAgdmFyIGh0dHAgPSB0aGlzLmh0dHA7XG4gICAgIHZhciBzZWFyY2hDaGFuZ2UgPSByeC5PYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICAgIHRoaXMubG9jYXRvclxuICAgICAgICAgICAuZ2V0T2JzZXJ2ZXIodGhpcywgJ3NlYXJjaFRlcm0nKVxuICAgICAgICAgICAuc3Vic2NyaWJlKHRlcm0gPT4gb2JzZXJ2ZXIub25OZXh0KHRlcm0pKTtcbiAgICAgfSlcbiAgICAgLmRlYm91bmNlKDQwMCAvKm1zKi8pXG4gICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgIC5mbGF0TWFwTGF0ZXN0KHRoaXMuY3JlYXRlU2VhcmNoZXIoKSlcbiAgICAgLnN1YnNjcmliZShyID0+IHRoaXMuaXRlbXMgPSByKTtcblxuICAgICB0aGlzLm9ic2VydmVEb2N1bWVuYXRpb25OYXZNb2RlbCgpO1xuICAgICB0aGlzLmRvY3VtZW50YXRpb25OYXZNb2RlbC5uYXZpZ2F0ZVRvKGluZGV4VXJsKTtcbiAgICAgcmV0dXJuIHRoaXMuYnVuZG94QXBpLnJldHJpZXZlQWxsRG9jdW1lbnRzKCkudGhlbihkb2NzID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3M7XG4gICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlU2VhcmNoZXIoKSB7XG4gICAgIHZhciBhcGkgPSB0aGlzLmJ1bmRveEFwaTtcbiAgICAgcmV0dXJuIHRlcm0gPT4ge1xuICAgICAgICBpZiAodGVybSA9PSBcIlwiKVxuICAgICAgICAgICByZXR1cm4gYXBpLnJldHJpZXZlQWxsRG9jdW1lbnRzKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICByZXR1cm4gYXBpLnNlYXJjaEFsbERvY3VtZW50YXRpb24odGVybSk7XG4gICAgIH1cbiAgfVxuICBcbiAgb2JzZXJ2ZURvY3VtZW5hdGlvbk5hdk1vZGVsKCkge1xuICAgICB0aGlzLmxvY2F0b3JcbiAgICAgICAgLmdldE9ic2VydmVyKHRoaXMuZG9jdW1lbnRhdGlvbk5hdk1vZGVsLCAndXJsJylcbiAgICAgICAgLnN1YnNjcmliZSh1cmwgPT4gdGhpcy5zcmMgPSB1cmwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
