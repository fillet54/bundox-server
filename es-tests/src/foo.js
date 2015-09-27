import {HttpClient} from 'aurelia-http-client';

class Foo {

   constructor() {
      this.http = new HttpClient().configure(c => {
         c.withBaseUrl("http://localhost:8080/bundox/api/");
         c.withHeader('Accept', 'application/bundox.api.v1+json');
      });
   }

   doSomething() {
      return this.http.request.get("/documents").then(response => {
          return response.content;
      });
   }

   doSomethingElse() {
      return this.http.request.get("/documents/Java/1.8/documentation?searchTerm=file").then(response => {
         return response.content;
      });
   }
};

export default Foo;
