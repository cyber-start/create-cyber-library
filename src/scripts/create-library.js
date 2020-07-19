const getTemplate = require("@/utils/get-template");
const getProjectName = require("@/utils/get-projectName");
const changeJsonFile = require("@/utils/change-jsonfile");
const caniUseName = require("@/utils/caniuse-name");

module.exports = async function createLibrary({ remote, devDependencies }) {
  try {
    const projectName = await getProjectName();
    if (await caniUseName(projectName)) {
      await getTemplate({ projectName, remote });
      await changeJsonFile({ projectName, devDependencies });
    } else {
      await createLibrary({ remote, devDependencies });
    };
  } catch (error) {
    throw error;
  };
};