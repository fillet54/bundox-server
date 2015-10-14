export class Document {
   constructor(id, name, version, family) {
      this.id = id;
      this.name = name;
      this.type = "document";
      this.version = version;
      this.family = family;
   }

   activate(model) {
      this.name = model.name;
      this.version = model.version;
      this.family = model.family;
   }
}
