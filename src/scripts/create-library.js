const getTemplate = require("@/utils/get-template");
const inputScopeName = require("@/utils/inputScopeName");
const inputPackageName = require("@/utils/inputPackageName");
const changeJsonFile = require("@/utils/change-jsonfile");
const caniUseName = require("@/utils/caniuse-name");

module.exports = async function createLibrary({ remote, devDependencies }) {
  try {
    const scopeName = await inputScopeName();
    const packageName = await inputPackageName();
    const assignName = [scopeName, packageName].join("/");
    if (await caniUseName(assignName)) {
      await getTemplate({ folderName: packageName, remote });
      await changeJsonFile({ folderName: packageName, projectName: assignName, devDependencies });
    } else {
      await createLibrary({ remote, devDependencies });
    };
  } catch (error) {
    throw error;
  };
};