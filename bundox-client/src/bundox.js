import {BundoxService} from './bundox-service';
import {DocumentationNavModel} from './documentation-nav-model';
import {ObserverLocator} from 'aurelia-framework';
import rx from 'rx'; 

var indexUrl = "http://localhost:8080/static/documents/java/1.7.0/My.html";
var url = 'http://localhost:8080/bundox/api/documents';
var searchUrl = 'http://localhost:8080/bundox/api/documents/documentation?searchTerm=';

export class Bundox {
  static inject() { return [DocumentationNavModel]; }
  constructor(documentationNavModel) {
     this.heading = 'Bundox';
     this.documentationNavModel = documentationNavModel;
  }

  activate() {
    this.documentationNavModel.navigateTo("www.google.com")
  }
}
