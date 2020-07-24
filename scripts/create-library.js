const downloadTemplate = require("@/utils/downloadTemplate");
const inputScopeName = require("@/utils/inputScopeName");
const inputPackageName = require("@/utils/inputPackageName");
const changeJsonFile = require("@/utils/changeJsonFile");
const caniUseName = require("@/utils/caniUseName");

module.exports = async function createLibrary({ remote, devDependencies }) {
  try {
    const scopeName = await inputScopeName();
    const packageName = await inputPackageName();
    const assignName = scopeName ? [scopeName, packageName].join("/") : packageName;
    if (await caniUseName(assignName)) {
      await downloadTemplate({ folderName: packageName, remote });
      await changeJsonFile({ folderName: packageName, projectName: assignName, devDependencies });
    } else {
      await createLibrary({ remote, devDependencies });
    };
  } catch (error) {
    throw error;
  };
};