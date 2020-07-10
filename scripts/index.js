const prompt = require("prompt-promise");
const getTemplate = require("@/utils/getTemplate");
const changeJsonFile = require("@/utils/changeJsonFile");

(async () => {
  try {
    const projectName = await prompt("请输入项目名称:");
    await getTemplate(projectName);
    await changeJsonFile(projectName);
  } catch (error) {
    throw error;
  };
})();