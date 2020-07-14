const ora = require("ora");
const path = require("path");
const { promisify } = require("es6-promisify");
const { readFile, writeFile } = require("jsonfile");


module.exports = async (projectName) => {
  const toast = ora();
  try {
    toast.start("修改package.json");
    const jsonFilePath = path.resolve(process.cwd(), projectName, "./package.json");
    const jsonObject = await promisify(readFile)(jsonFilePath);
    const rewriteJsonObject = Object.assign({}, jsonObject, {
      name: projectName
    });
    rewriteJsonObject.devDependencies["spa-build-core"] = "github:nice-web-work/spa-build-core";
    await promisify(writeFile)(jsonFilePath, rewriteJsonObject, { spaces: 2, EOL: '\r\n' });
    toast.succeed("package.json修改成功!");
  } catch (error) {
    toast.fail("package.json修改失败!");
    throw error;
  };
};