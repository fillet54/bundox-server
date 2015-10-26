export class DocumentationResult {
   constructor(items) {
     this.subject = items[0].subject;
     this.path = items[0].path;
     this.type = "documentation-result";
     this.entryType = items[0].entryType;
     this.document = items[0].document;
     this.items = items;
   }
}
