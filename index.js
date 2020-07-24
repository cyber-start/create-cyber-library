#!/usr/bin/env node
require("./utils/initial");
const createLibrary = require("@/scripts/create-library");
const selectTemplate = require("@/utils/selectTemplate");


(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    await createLibrary({ remote, devDependencies });
  } catch (error) {
    throw error;
  };
})();

