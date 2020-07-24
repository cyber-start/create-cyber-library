const inquirer = require("inquirer");
const LIBRARY_LIST = require("@/configs/runtime.config");

module.exports = async () => {
  const { template } = await inquirer.prompt({
    type: "list",
    name: "template",
    defaultValue: "es6-babel-library",
    message: "选择拉取的库文件类型:",
    choices: LIBRARY_LIST
  });
  return template;
};