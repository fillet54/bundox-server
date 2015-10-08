export class App {
  configureRouter(config, router) {
    config.title = 'Bundox';
    config.map([
      { route: ['','bundox'],  name: 'Bundox',      moduleId: 'bundox',      nav: false, title:'Bundox' },
    ]);

    this.router = router;
  }
}
