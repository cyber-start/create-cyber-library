const getTemplate = require("@/utils/get-template");
const inputPackageName = require("@/utils/inputPackageName");
const changeJsonFile = require("@/utils/change-jsonfile");


module.exports = async ({ remote, devDependencies }) => {
  try {
    const packageName = await inputPackageName();
    await getTemplate({ folderName: packageName, remote });
    await changeJsonFile({ folderName: packageName, projectName: packageName, devDependencies });
  } catch (error) {
    throw error;
  };
};