import {SelectionModel} from './selection-model';
import {DocumentationNavModel} from './documentation-nav-model';
import {SearchPane} from './search-pane';
import {ObserverLocator} from 'aurelia-framework';

export class DocumentationResultListItem {
   static inject() { return [SelectionModel, DocumentationNavModel, ObserverLocator, SearchPane]; }
   constructor(selectionModel, documentationNavModel, observerLocator, searchPane) {
      this.displayText = "";
      this.path = "#";
      this.entryType = "";
    //  this.isSelected = false;
      this.selectionModel = selectionModel;
      this.documentationNavModel = documentationNavModel;
      this.observerLocator = observerLocator;
      this.searchPane = searchPane;
   }

   activate(model) {
      this.displayText = model.subject;
      this.path = model.path;
      this.entryType = model.entryType ? model.entryType : "unknown";
   //   this.observeSelected();
      this.searchTerm = this.searchPane.searchTerm;
      this.family = model.document ? model.document.family : null;
      this.items = model.items;
   }

   select() {
      this.selectionModel.select(this.items[0]);
   }

   selectItem(item) {
      this.selectionModel.select(item);
   }

   get isSelected() {
      return this.items.includes(this.selectionModel.selectedItem);
   }
   observeSelected() {
      this.observerLocator
         .getObserver(this.selectionModel, 'selectedItem')
         .subscribe(item => {
            this.isSelected = this.items.includes(item);
         });
   }
}
