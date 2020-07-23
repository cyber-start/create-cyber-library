
exports.PROJECT_LIST = [{
  name: "dva-app-project",
  value: {
    type: "project",
    devDependencies: {
      "@cyber/spa-cli": "github:cyber-worker/spa-cli"
    },
    remote: "https://github.com/cyber-worker/dva-spa-project"
  }
}, {
  name: "cli-project",
  value: {
    type: "project",
    remote: "https://github.com/cyber-worker/cli-project"
  }
}, {
  name: "easy-koa-project",
  value: {
    type: "project",
    remote: "https://github.com/cyber-worker/easy-koa-project"
  }
}];

exports.LIBRARY_LIST = [{
  name: "es6-babel-library",
  value: {
    type: "library",
    devDependencies: {
      "@cyber/lib-cli": "github:cyber-worker/lib-cli",
      "@cyber/spa-cli": "github:cyber-worker/spa-cli"
    },
    remote: "https://github.com/cyber-worker/es6-babel-library"
  }
}];