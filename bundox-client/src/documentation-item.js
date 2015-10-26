export class DocumentationItem {
   constructor(subject, path, entryType, namespace, document) {
     this.subject = subject;
     this.path = path;
     this.type = "documentation-item";
     this.entryType = entryType;
     this.namespace = namespace;
     this.document = document;
   }
}
