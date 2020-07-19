const createProject = require("@/scripts/create-project");
const createLibrary = require("@/scripts/create-library");
const selectTemplate = require("@/utils/select-template");


(async () => {
  try {
    const { type, remote, devDependencies } = await selectTemplate();
    if (type === "project") {
      await createProject({ remote, devDependencies });
    };
    if (type === "library") {
      await createLibrary({ remote, devDependencies });
    };
  } catch (error) {
    throw error;
  };
})();