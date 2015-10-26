import {BundoxService} from './bundox-service';
import {ObserverLocator} from 'aurelia-framework';
import rx from 'rx'; 
import {SelectionModel} from './selection-model';
import {DocumentationResult} from './documentation-result';

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
           return api.searchDocumentation(term, this.filter).then(items => {
               var resultGroups = this.createDocumentationResults(items);
               return resultGroups.map(group => new DocumentationResult(group));
            });
        } else {
           return api.searchAllDocumentation(term).then(items =>  {
               var resultGroups = this.createDocumentationResults(items);
               return resultGroups.map(group => new DocumentationResult(group));
           });
        }
     }
  }

  createDocumentationResults(documentationItems) {
    return this.groupBy(documentationItems, item => {
      return [item.subject, item.entityType];
    });
  }

  groupBy( array , f )
  {
    var groups = {};
    array.forEach( function( o ) {
      var group = JSON.stringify( f(o) );
      groups[group] = groups[group] || [];
      groups[group].push( o );  
    });
    return Object.keys(groups).map( function( group ) {
      return groups[group]; 
    })
  }
}
