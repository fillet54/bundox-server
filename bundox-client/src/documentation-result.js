export class DocumentationResult {
   constructor(subject, path, entryType) {
     this.subject = subject;
     this.path = path;
     this.type = "documentation-result";
     this.entryType = entryType;
   }
}
