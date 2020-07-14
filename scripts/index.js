const prompt = require("prompt-promise");
const getTemplate = require("@/utils/get-template");
const selectTemplate = require("@/utils/select-template");
const changeJsonFile = require("@/utils/change-jsonfile");


(async () => {
  try {
    const template = await selectTemplate();
    const projectName = await prompt("请输入项目名称:");
    await getTemplate({ projectName, template });
    await changeJsonFile(projectName);
  } catch (error) {
    throw error;
  };
})();