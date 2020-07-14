const prompt = require("prompt-promise");
const getTemplate = require("@/utils/get-template");
const selectTemplate = require("@/utils/select-template");
const changeJsonFile = require("@/utils/change-jsonfile");


(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    const projectName = await prompt("请输入项目名称:");
    await getTemplate({ projectName, remote });
    await changeJsonFile({ projectName, devDependencies });
  } catch (error) {
    throw error;
  };
})();