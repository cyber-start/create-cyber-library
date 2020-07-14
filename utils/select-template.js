const inquirer = require("inquirer");


module.exports = async () => {

  const { template } = await inquirer.prompt({
    type: "list",
    name: "template",
    defaultValue: "dva-app",
    message: "选择拉取的脚手架类型:",
    choices: [{
      name: "dva-app-project",
      value: {
        devDependencies: {
          "spa-build-core": "github:nice-web-work/spa-build-core"
        },
        remote: "https://github.com/nice-web-work/dva-spa-project"
      }
    }, {
      name: "es6-babel-library",
      value: {
        devDependencies: {
          "spa-build-core": "github:nice-web-work/spa-build-core"
        },
        remote: "https://github.com/nice-web-work/es6-babel-library"
      }
    }, {
      name: "easy-koa-project",
      value: {
        remote: "https://github.com/nice-web-work/easy-koa-project"
      }
    }]
  });
  return template;

};