System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "aurelia": [
      "github:aurelia/logging-console@0.7.1",
      "github:aurelia/logging-console@0.7.1/aurelia-logging-console",
      "github:aurelia/logging@0.7.0",
      "github:aurelia/logging@0.7.0/aurelia-logging",
      "github:aurelia/history-browser@0.8.0",
      "github:aurelia/history-browser@0.8.0/aurelia-history-browser",
      "npm:core-js@0.9.18",
      "github:aurelia/history@0.7.0",
      "npm:core-js@0.9.18/client/shim.min",
      "github:aurelia/history@0.7.0/aurelia-history",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "github:aurelia/loader-default@0.10.0",
      "github:aurelia/loader-default@0.10.0/aurelia-loader-default",
      "github:aurelia/loader@0.9.0",
      "github:aurelia/metadata@0.8.0",
      "github:aurelia/loader@0.9.0/aurelia-loader",
      "github:aurelia/metadata@0.8.0/aurelia-metadata",
      "github:zloirock/core-js@0.8.4",
      "github:aurelia/path@0.9.0",
      "github:zloirock/core-js@0.8.4/index",
      "github:aurelia/path@0.9.0/aurelia-path",
      "github:zloirock/core-js@0.8.4/shim",
      "github:zloirock/core-js@0.8.4/modules/core.dict",
      "github:zloirock/core-js@0.8.4/modules/core.iter-helpers",
      "github:zloirock/core-js@0.8.4/modules/core.$for",
      "github:zloirock/core-js@0.8.4/modules/core.delay",
      "github:zloirock/core-js@0.8.4/modules/core.binding",
      "github:zloirock/core-js@0.8.4/modules/core.object",
      "github:zloirock/core-js@0.8.4/modules/core.array.turn",
      "github:zloirock/core-js@0.8.4/modules/core.number.iterator",
      "github:zloirock/core-js@0.8.4/modules/core.number.math",
      "github:zloirock/core-js@0.8.4/modules/core.string.escape-html",
      "github:zloirock/core-js@0.8.4/modules/core.date",
      "github:zloirock/core-js@0.8.4/modules/core.global",
      "github:zloirock/core-js@0.8.4/modules/core.log",
      "github:zloirock/core-js@0.8.4/modules/$",
      "github:zloirock/core-js@0.8.4/modules/es5",
      "github:zloirock/core-js@0.8.4/modules/es6.symbol",
      "github:zloirock/core-js@0.8.4/modules/es6.object.assign",
      "github:zloirock/core-js@0.8.4/modules/es6.object.is",
      "github:zloirock/core-js@0.8.4/modules/es6.object.set-prototype-of",
      "github:zloirock/core-js@0.8.4/modules/es6.object.to-string",
      "github:zloirock/core-js@0.8.4/modules/es6.object.statics-accept-primitives",
      "github:zloirock/core-js@0.8.4/modules/es6.function.name",
      "github:zloirock/core-js@0.8.4/modules/es6.number.constructor",
      "github:zloirock/core-js@0.8.4/modules/es6.number.statics",
      "github:zloirock/core-js@0.8.4/modules/es6.math",
      "github:zloirock/core-js@0.8.4/modules/es6.string.from-code-point",
      "github:zloirock/core-js@0.8.4/modules/es6.string.raw",
      "github:zloirock/core-js@0.8.4/modules/es6.string.iterator",
      "github:zloirock/core-js@0.8.4/modules/es6.string.code-point-at",
      "github:zloirock/core-js@0.8.4/modules/es6.string.ends-with",
      "github:zloirock/core-js@0.8.4/modules/es6.string.includes",
      "github:zloirock/core-js@0.8.4/modules/es6.string.repeat",
      "github:zloirock/core-js@0.8.4/modules/es6.string.starts-with",
      "github:zloirock/core-js@0.8.4/modules/es6.array.from",
      "github:zloirock/core-js@0.8.4/modules/es6.array.of",
      "github:zloirock/core-js@0.8.4/modules/es6.array.iterator",
      "github:zloirock/core-js@0.8.4/modules/es6.array.species",
      "github:zloirock/core-js@0.8.4/modules/es6.array.copy-within",
      "github:zloirock/core-js@0.8.4/modules/es6.array.fill",
      "github:zloirock/core-js@0.8.4/modules/es6.array.find",
      "github:zloirock/core-js@0.8.4/modules/es6.array.find-index",
      "github:zloirock/core-js@0.8.4/modules/es6.regexp",
      "github:zloirock/core-js@0.8.4/modules/es6.promise",
      "github:zloirock/core-js@0.8.4/modules/es6.map",
      "github:zloirock/core-js@0.8.4/modules/es6.set",
      "github:zloirock/core-js@0.8.4/modules/es6.weak-map",
      "github:zloirock/core-js@0.8.4/modules/es6.weak-set",
      "github:zloirock/core-js@0.8.4/modules/es6.reflect",
      "github:zloirock/core-js@0.8.4/modules/es7.array.includes",
      "github:zloirock/core-js@0.8.4/modules/es7.string.at",
      "github:zloirock/core-js@0.8.4/modules/es7.regexp.escape",
      "github:zloirock/core-js@0.8.4/modules/es7.object.get-own-property-descriptors",
      "github:zloirock/core-js@0.8.4/modules/es7.object.to-array",
      "github:zloirock/core-js@0.8.4/modules/es7.set.to-json",
      "github:zloirock/core-js@0.8.4/modules/js.array.statics",
      "github:zloirock/core-js@0.8.4/modules/web.timers",
      "github:zloirock/core-js@0.8.4/modules/web.immediate",
      "github:zloirock/core-js@0.8.4/modules/web.dom.iterable",
      "github:zloirock/core-js@0.8.4/modules/$.ctx",
      "github:zloirock/core-js@0.8.4/modules/$.def",
      "github:zloirock/core-js@0.8.4/modules/$.assign",
      "github:zloirock/core-js@0.8.4/modules/$.keyof",
      "github:zloirock/core-js@0.8.4/modules/$.uid",
      "github:zloirock/core-js@0.8.4/modules/$.assert",
      "github:zloirock/core-js@0.8.4/modules/$.iter",
      "github:zloirock/core-js@0.8.4/modules/$.partial",
      "github:zloirock/core-js@0.8.4/modules/$.invoke",
      "github:zloirock/core-js@0.8.4/modules/$.own-keys",
      "github:zloirock/core-js@0.8.4/modules/$.cof",
      "github:zloirock/core-js@0.8.4/modules/$.unscope",
      "github:zloirock/core-js@0.8.4/modules/$.replacer",
      "github:zloirock/core-js@0.8.4/modules/$.fw",
      "github:zloirock/core-js@0.8.4/modules/$.array-methods",
      "github:zloirock/core-js@0.8.4/modules/$.array-includes",
      "github:zloirock/core-js@0.8.4/modules/$.wks",
      "github:zloirock/core-js@0.8.4/modules/$.set-proto",
      "github:zloirock/core-js@0.8.4/modules/$.string-at",
      "github:zloirock/core-js@0.8.4/modules/$.iter-detect",
      "github:zloirock/core-js@0.8.4/modules/$.species",
      "github:zloirock/core-js@0.8.4/modules/$.task",
      "github:zloirock/core-js@0.8.4/modules/$.collection-strong",
      "github:zloirock/core-js@0.8.4/modules/$.collection",
      "github:zloirock/core-js@0.8.4/modules/$.collection-weak",
      "github:aurelia/templating-router@0.16.1",
      "github:aurelia/templating-router@0.16.1/aurelia-templating-router",
      "github:aurelia/router@0.12.0",
      "github:aurelia/router@0.12.0/aurelia-router",
      "github:aurelia/dependency-injection@0.10.1",
      "github:aurelia/route-recognizer@0.7.0",
      "github:aurelia/event-aggregator@0.8.0",
      "github:aurelia/dependency-injection@0.10.1/aurelia-dependency-injection",
      "github:aurelia/route-recognizer@0.7.0/aurelia-route-recognizer",
      "github:aurelia/event-aggregator@0.8.0/aurelia-event-aggregator",
      "github:aurelia/templating-router@0.16.1/route-loader",
      "github:aurelia/templating@0.15.3",
      "github:aurelia/templating@0.15.3/aurelia-templating",
      "github:aurelia/binding@0.9.1",
      "github:aurelia/task-queue@0.7.0",
      "github:aurelia/binding@0.9.1/aurelia-binding",
      "github:aurelia/task-queue@0.7.0/aurelia-task-queue",
      "github:aurelia/templating-router@0.16.1/router-view",
      "github:aurelia/templating-router@0.16.1/route-href",
      "github:aurelia/templating-resources@0.15.2",
      "github:aurelia/templating-resources@0.15.2/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.15.2/compose",
      "github:aurelia/templating-resources@0.15.2/if",
      "github:aurelia/templating-resources@0.15.2/with",
      "github:aurelia/templating-resources@0.15.2/repeat",
      "github:aurelia/templating-resources@0.15.2/show",
      "github:aurelia/templating-resources@0.15.2/focus",
      "github:aurelia/templating-resources@0.15.2/replaceable",
      "github:aurelia/templating-resources@0.15.2/sanitize-html",
      "github:aurelia/templating-resources@0.15.2/dynamic-element",
      "github:aurelia/templating-resources@0.15.2/view-spy",
      "github:aurelia/templating-resources@0.15.2/global-behavior",
      "github:aurelia/templating-resources@0.15.2/compile-spy",
      "github:aurelia/templating-resources@0.15.2/css-resource",
      "github:aurelia/templating-binding@0.15.0",
      "github:aurelia/templating-binding@0.15.0/aurelia-templating-binding",
      "github:aurelia/animator-css@0.16.0",
      "github:aurelia/animator-css@0.16.0/aurelia-animator-css",
      "github:aurelia/fetch-client@0.2.0",
      "github:aurelia/fetch-client@0.2.0/aurelia-fetch-client",
      "github:aurelia/bootstrapper@0.17.0",
      "github:aurelia/bootstrapper@0.17.0/aurelia-bootstrapper",
      "github:aurelia/framework@0.16.0",
      "github:aurelia/framework@0.16.0/aurelia-framework"
    ],
    "app-build": [
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-text@0.0.2"
    ]
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.16.0",
    "aurelia-binding": "github:aurelia/binding@0.9.1",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.17.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.8.0",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.2.0",
    "aurelia-framework": "github:aurelia/framework@0.16.0",
    "aurelia-history": "github:aurelia/history@0.7.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.8.0",
    "aurelia-http-client": "github:aurelia/http-client@0.11.0",
    "aurelia-loader": "github:aurelia/loader@0.9.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.10.0",
    "aurelia-logging": "github:aurelia/logging@0.7.0",
    "aurelia-metadata": "github:aurelia/metadata@0.8.0",
    "aurelia-path": "github:aurelia/path@0.9.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.7.0",
    "aurelia-router": "github:aurelia/router@0.12.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.7.0",
    "aurelia-templating": "github:aurelia/templating@0.15.3",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.15.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.15.2",
    "aurelia-templating-router": "github:aurelia/templating-router@0.16.1",
    "babel": "npm:babel-core@5.8.24",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.4.0",
    "jquery": "github:components/jquery@2.1.4",
    "rx": "npm:rx@4.0.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:aurelia/animator-css@0.16.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.15.3"
    },
    "github:aurelia/binding@0.9.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.17.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.8.0",
      "aurelia-framework": "github:aurelia/framework@0.16.0",
      "aurelia-history": "github:aurelia/history@0.7.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.8.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.10.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.7.1",
      "aurelia-router": "github:aurelia/router@0.12.0",
      "aurelia-templating": "github:aurelia/templating@0.15.3",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.15.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.15.2",
      "aurelia-templating-router": "github:aurelia/templating-router@0.16.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.10.1": {
      "aurelia-logging": "github:aurelia/logging@0.7.0",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.8.0": {
      "aurelia-logging": "github:aurelia/logging@0.7.0"
    },
    "github:aurelia/fetch-client@0.2.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/framework@0.16.0": {
      "aurelia-binding": "github:aurelia/binding@0.9.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
      "aurelia-loader": "github:aurelia/loader@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.7.0",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "aurelia-path": "github:aurelia/path@0.9.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.7.0",
      "aurelia-templating": "github:aurelia/templating@0.15.3",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.8.0": {
      "aurelia-history": "github:aurelia/history@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.11.0": {
      "aurelia-path": "github:aurelia/path@0.9.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.10.0": {
      "aurelia-loader": "github:aurelia/loader@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0"
    },
    "github:aurelia/loader@0.9.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "aurelia-path": "github:aurelia/path@0.9.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/logging-console@0.7.1": {
      "aurelia-logging": "github:aurelia/logging@0.7.0"
    },
    "github:aurelia/metadata@0.8.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.7.0": {
      "aurelia-path": "github:aurelia/path@0.9.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.12.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.8.0",
      "aurelia-history": "github:aurelia/history@0.7.0",
      "aurelia-logging": "github:aurelia/logging@0.7.0",
      "aurelia-path": "github:aurelia/path@0.9.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.15.0": {
      "aurelia-binding": "github:aurelia/binding@0.9.1",
      "aurelia-logging": "github:aurelia/logging@0.7.0",
      "aurelia-templating": "github:aurelia/templating@0.15.3"
    },
    "github:aurelia/templating-resources@0.15.2": {
      "aurelia-binding": "github:aurelia/binding@0.9.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
      "aurelia-loader": "github:aurelia/loader@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.7.0",
      "aurelia-path": "github:aurelia/path@0.9.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.7.0",
      "aurelia-templating": "github:aurelia/templating@0.15.3",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.16.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "aurelia-path": "github:aurelia/path@0.9.0",
      "aurelia-router": "github:aurelia/router@0.12.0",
      "aurelia-templating": "github:aurelia/templating@0.15.3"
    },
    "github:aurelia/templating@0.15.3": {
      "aurelia-binding": "github:aurelia/binding@0.9.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.10.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.3.0",
      "aurelia-loader": "github:aurelia/loader@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.7.0",
      "aurelia-metadata": "github:aurelia/metadata@0.8.0",
      "aurelia-path": "github:aurelia/path@0.9.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.16"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:rx@4.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
