import {SelectionModel} from './selection-model';
import {SearchPane} from './search-pane';

export class DocumentListItem {
   static inject() { return [SelectionModel, SearchPane]; }
   constructor(selectionModel, searchPane) {
      this.displayText = "";
      this.family = 'unknown';
      this.selectionModel = selectionModel;
      this.searchPane = searchPane;
   }

   activate(model) {
      this.model = model;
      this.displayText = `${model.name} ${model.version}`;
      this.family = model.family;
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
}
