const getTemplate = require("@/utils/get-template");
const getProjectName = require("@/utils/get-projectName");
const selectTemplate = require("@/utils/select-template");
const changeJsonFile = require("@/utils/change-jsonfile");


(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    const projectName = await getProjectName();
    await getTemplate({ projectName, remote });
    await changeJsonFile({ projectName, devDependencies });
  } catch (error) {
    throw error;
  };
})();