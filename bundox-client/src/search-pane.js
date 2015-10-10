import {BundoxService} from './bundox-service';
import {ObserverLocator} from 'aurelia-framework';
import rx from 'rx'; 

export class SearchPane {
  static inject() { return [BundoxService, ObserverLocator]; }
  constructor(bundoxService, locator) {
     this.items = [];
     this.searchTerm = '';
     
     this.bundoxApi = bundoxService;
     this.locator = locator;
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
        else
           return api.searchAllDocumentation(term);
     }
  }
}
