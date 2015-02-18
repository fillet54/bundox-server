export class Document {
   constructor(name, version) {
      this.name = name;
      this.type = "document";
      this.version = version;
   }

   activate(model) {
      this.name = model.name;
      this.version = model.version;
   }
}
