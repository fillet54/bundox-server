var documenationBaseUrl = "http://localhost:8080";

export class DocumentationNavModel {
   constructor() {
      this.url = "#";
   }

   navigateTo(url) {
      this.url = documenationBaseUrl + url;
   }
}
