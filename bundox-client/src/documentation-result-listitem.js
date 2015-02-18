import {SelectionModel} from './selection-model';
import {DocumentationNavModel} from './documentation-nav-model';
import {ObserverLocator} from 'aurelia-framework';

export class DocumentationResultListItem {
   static inject() { return [SelectionModel, DocumentationNavModel, ObserverLocator]; }
   constructor(selectionModel, documentationNavModel, observerLocator) {
      this.displayText = "";
      this.path = "#";
      this.isSelected = false;
      this.selectionModel = selectionModel;
      this.documentationNavModel = documentationNavModel;
      this.observerLocator = observerLocator;
   }

   activate(model) {
      this.displayText = model.subject;
      this.path = model.path
      this.observeSelected();
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
