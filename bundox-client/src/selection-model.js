export class SelectionModel {
   constructor() {
      this.selectedItem = null;
   }

   select(item) {
      this.selectedItem = item;
   }
}
