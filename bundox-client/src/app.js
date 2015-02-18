import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Bundox';
      config.map([
        { route: ['', 'bundox'],        moduleId: 'bundox',       nav: false, title:'Bundox' },
      ]);
    });
  }
}
