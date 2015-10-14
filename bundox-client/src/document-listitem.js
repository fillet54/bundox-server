import {SelectionModel} from './selection-model';
import {ObserverLocator} from 'aurelia-framework';

export class DocumentListItem {
   static inject() { return [SelectionModel, ObserverLocator]; }
   constructor(selectionModel, observerLocator) {
      this.displayText = "";
      this.family = 'unknown';
      this.isSelected = false;
      this.selectionModel = selectionModel;
      this.observerLocator = observerLocator;
   }

   activate(model) {
      this.displayText = `${model.name} ${model.version}`;
      this.family = model.family;
      this.observeSelected();
   }

   select() {
      this.selectionModel.select(this);
   }

   observeSelected() {
      this.observerLocator
         .getObserver(this.selectionModel, 'selectedItem')
         .subscribe(item => this.isSelected = this == item);
   }
}
