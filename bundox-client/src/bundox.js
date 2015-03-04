import {BundoxService} from './bundox-service';
import {DocumentationNavModel} from './documentation-nav-model';
import {ObserverLocator} from 'aurelia-framework';
import rx from 'rx'; 

var indexUrl = "http://localhost:8080/static/documents/java/1.7.0/My.html";
var url = 'http://localhost:8080/bundox/api/documents';
var searchUrl = 'http://localhost:8080/bundox/api/documents/documentation?searchTerm=';

export class Bundox {
  static inject() { return [BundoxService, ObserverLocator, DocumentationNavModel]; }
  constructor(bundoxService, locator, documentationNavModel) {
     this.heading = 'Bundox';
     this.items = [];
     this.searchTerm = '';
     this.src = "#";
     
     this.bundoxApi = bundoxService;
     this.locator = locator;
     this.documentationNavModel = documentationNavModel;
  }

  activate(){
     var http = this.http;
     var searchChange = rx.Observable.create(observer => {
        this.locator
           .getObserver(this, 'searchTerm')
           .subscribe(term => observer.onNext(term));
     })
     .debounce(400 /*ms*/)
     .distinctUntilChanged()
     .flatMapLatest(this.createSearcher())
     .subscribe(r => this.items = r);

     this.observeDocumenationNavModel();
     this.documentationNavModel.navigateTo(indexUrl);
     return this.bundoxApi.retrieveAllDocuments().then(docs => {
        this.items = docs;
     });
  }

  createSearcher() {
     var api = this.bundoxApi;
     return term => {
        if (term == "")
           return api.retrieveAllDocuments()
        else
           return api.searchAllDocumentation(term);
     }
  }
  
  observeDocumenationNavModel() {
     this.locator
        .getObserver(this.documentationNavModel, 'url')
        .subscribe(url => this.src = url);
  }
}
