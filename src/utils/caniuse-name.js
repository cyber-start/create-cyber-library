const toast = require("@/utils/toast");
const npmName = require("npm-name");
const validate = require("validate-npm-package-name");

module.exports = async (name) => {
  try {
    toast.start(["正在查询包名(", name, ")是否可用", "... ..."].join(""));
    const { validForNewPackages, validForOldPackages } = await validate(name);
    const isValidate = (validForNewPackages && validForOldPackages);
    const isAvailable = await npmName(name);
    if (isValidate && isAvailable) {
      toast.succeed(["包名(", name, ")可用!"].join(""));
      return true;
    };
    toast.fail(["包名(", name, ")不可用!"].join(""));
    return false;
  } catch (error) {
    throw error;
  };
};