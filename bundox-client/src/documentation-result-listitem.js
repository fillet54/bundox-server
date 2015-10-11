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
      this.isSelected = false;
      this.selectionModel = selectionModel;
      this.documentationNavModel = documentationNavModel;
      this.observerLocator = observerLocator;
      this.searchPane = searchPane;
   }

   activate(model) {
      this.displayText = model.subject;
      this.path = model.path;
      this.entryType = model.entryType ? model.entryType : "unknown";
      this.observeSelected();
      this.searchTerm = this.searchPane.searchTerm;
   }

   select() {
      this.selectionModel.select(this);
   }

   observeSelected() {
      this.observerLocator
         .getObserver(this.selectionModel, 'selectedItem')
         .subscribe(item => {
            this.isSelected = this == item;
            if (this.isSelected)
               this.documentationNavModel.navigateTo(this.path);
         });
   }
}
