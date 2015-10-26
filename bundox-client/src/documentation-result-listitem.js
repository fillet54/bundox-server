import {SelectionModel} from './selection-model';
import {SearchPane} from './search-pane';

export class DocumentationResultListItem {
   static inject() { return [SelectionModel, SearchPane]; }
   constructor(selectionModel, searchPane) {
      this.displayText = "";
      this.path = "#";
      this.entryType = "";
      this.selectionModel = selectionModel;
      this.searchPane = searchPane;
   }

   activate(model) {
      this.displayText = model.subject;
      this.path = model.path;
      this.entryType = model.entryType ? model.entryType : "unknown";
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
      return this.items.indexOf(this.selectionModel.selectedItem) > -1;
   }
}
