export class DocumentationResult {
   constructor(subject, path, entryType, document) {
     this.subject = subject;
     this.path = path;
     this.type = "documentation-result";
     this.entryType = entryType;
     this.document = document;
   }
}
