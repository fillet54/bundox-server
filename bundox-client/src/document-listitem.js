import {SelectionModel} from './selection-model';
import {SearchPane} from './search-pane';
import {DocumentationNavModel} from './documentation-nav-model';
import {ObserverLocator} from 'aurelia-framework';

export class DocumentListItem {
   static inject() { return [SelectionModel, SearchPane, ObserverLocator, DocumentationNavModel]; }
   constructor(selectionModel, searchPane, locator, documentationNavModel) {
      this.displayText = "";
      this.family = 'unknown';
      this.selectionModel = selectionModel;
      this.searchPane = searchPane;
      this.observerLocator = locator;
      this.documentationNavModel = documentationNavModel;
   }

   activate(model) {
      this.model = model;
      this.displayText = `${model.name} ${model.version}`;
      this.family = model.family;
      this.observeSelected();
   }

   get isSelected() {
      return this.selectionModel.selectedItem === this.model;
   }

   select() {
      this.selectionModel.select(this.model);
   }

   addFilter() {
      this.searchPane.addFilter(this.model);
   }

   observeSelected() {
      this.observerLocator
         .getObserver(this.selectionModel, 'selectedItem')
         .subscribe(item => {
            if (this.isSelected)
               this.documentationNavModel.navigateTo(this.model.indexPath);
         });
   }
}
