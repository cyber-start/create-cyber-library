const inquirer = require("inquirer");


module.exports = async () => {

  const { template } = await inquirer.prompt({
    type: "list",
    name: "template",
    defaultValue: "dva-app",
    message: "选择拉取的脚手架类型:",
    choices: [{
      name: "dva-app",
      value: "https://github.com/nice-web-work/dva-spa-project"
    }, {
      name: "es6-babel-library",
      value: "https://github.com/nice-web-work/es6-babel-library"
    }, {
      name: "easy-koa-project",
      value: "https://github.com/nice-web-work/easy-koa-project"
    }]
  });
  return template;

};