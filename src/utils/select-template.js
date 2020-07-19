const inquirer = require("inquirer");
const { PROJECT_LIST, LIBRARY_LIST } = require("@/configs/runtime.config");

module.exports = async () => {
  const { template } = await inquirer.prompt({
    type: "list",
    name: "template",
    defaultValue: "dva-app",
    message: "选择拉取的脚手架类型:",
    choices: [...PROJECT_LIST, new inquirer.Separator(), ...LIBRARY_LIST]
  });
  return template;
};