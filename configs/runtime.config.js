
module.exports = [{
  name: "babel-library",
  value: {
    devDependencies: {
      "@cyber-tools/lib-cli": "*",
      "@cyber-tools/spa-cli": "*"
    },
    remote: "https://github.com/cyber-scaffold/es6-babel-library"
  }
}, {
  name: "typescript-library",
  value: {
    devDependencies: {
      "@cyber-tools/spa-cli": "*"
    },
    remote: "https://github.com/cyber-scaffold/ts-library"
  }
}, {
  name: "component-library",
  value:{
    devDependencies: {
      "@cyber-tools/spa-cli": "*",
      "@cyber-tools/component-build-tools": "*"
    },
    remote: "https://github.com/cyber-scaffold/typescript-component-library" 
  }
}];