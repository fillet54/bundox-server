import {DocumentationNavModel} from './documentation-nav-model';

export class SelectionModel {
   static inject() { return [DocumentationNavModel]; }
   constructor(documentationNavModel) {
      this.selectedItem = null;
      this.documentationNavModel = documentationNavModel;
   }

   select(item) {
      this.selectedItem = item;

      if (item == null) {
         return;
      }

      if (item.type == "document") {
//         this.documentationNavModel.navigateTo(item.indexPath);
      } else if (item.type == "documentation-item") {
         this.documentationNavModel.navigateTo(item.path);
      }
   }
}
