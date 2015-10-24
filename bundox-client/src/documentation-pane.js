import {DocumentationNavModel} from './documentation-nav-model';
import {ObserverLocator} from 'aurelia-framework';

export class DocumentationPane {
  static inject() { return [ObserverLocator, DocumentationNavModel]; }
  constructor(locator, documentationNavModel) {
     this.src = documentationNavModel.url;
     this.locator = locator;
     this.documentationNavModel = documentationNavModel;
  }

  activate() {
    this.observeDocumenationNavModel();
  } 
  
  observeDocumenationNavModel() {
     this.locator
        .getObserver(this.documentationNavModel, 'url')
        .subscribe(url => this.src = url);
  }
}
