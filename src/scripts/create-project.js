const getTemplate = require("@/utils/get-template");
const getProjectName = require("@/utils/get-projectName");
const changeJsonFile = require("@/utils/change-jsonfile");


module.exports = async ({ remote, devDependencies }) => {
  try {
    const projectName = await getProjectName();
    await getTemplate({ projectName, remote });
    await changeJsonFile({ projectName, devDependencies });
  } catch (error) {
    throw error;
  };
};