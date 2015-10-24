export class Document {
   constructor(id, name, version, family, indexPath) {
      this.id = id;
      this.name = name;
      this.type = "document";
      this.version = version;
      this.family = family;
      this.indexPath = indexPath;
   }

   activate(model) {
      this.name = model.name;
      this.version = model.version;
      this.family = model.family;
      this.indexPath = model.indexPath;
   }
}
