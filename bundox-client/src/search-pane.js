import {BundoxService} from './bundox-service';
import {ObserverLocator} from 'aurelia-framework';
import rx from 'rx'; 
import {SelectionModel} from './selection-model';

export class SearchPane {
  static inject() { return [BundoxService, ObserverLocator, SelectionModel]; }
  constructor(bundoxService, locator, selectionModel) {
     this.items = [];
     this.searchTerm = '';
     
     this.bundoxApi = bundoxService;
     this.locator = locator;
     this.selection = selectionModel;
     this.filter = null;
     this.isFiltered = false;
  }

  addFilter(value) {
    this.filter = value;
    this.isFiltered = true;
  }

  clearFilter() {
    this.isFiltered = false;
    this.searchTerm = "";
  }

  activate(){
     var searchChange = rx.Observable.create(observer => {
        this.locator
           .getObserver(this, 'searchTerm')
           .subscribe(term => observer.onNext(term));
     })
     .debounce(400 /*ms*/)
     .distinctUntilChanged()
     .flatMapLatest(this.createSearcher())
     .subscribe(r => this.items = r);

     return this.bundoxApi.retrieveAllDocuments().then(docs => {
        this.items = docs;
     });
  }
  
  createSearcher() {
     var api = this.bundoxApi;
     return term => {
        if (term == "")
           return api.retrieveAllDocuments()
        else if (this.isFiltered) {
           return api.searchDocumentation(term, this.filter);
        } else {
           return api.searchAllDocumentation(term);
        }
     }
  }
}
