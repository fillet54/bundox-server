System.config({
  "paths": {
    "*": "*.js",
    "app/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-http-client": "github:aurelia/http-client@0.5.5",
    "github:aurelia/http-client@0.5.5": {
      "aurelia-path": "github:aurelia/path@0.4.5",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

