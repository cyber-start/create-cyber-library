const ora = require("ora");
const path = require("path");
const { dots } = require("cli-spinners");
const download = require("download-git-repo");
const { promisify } = require("es6-promisify");
const { REPO_URL } = require("@/configs/runtime.config.js");


module.exports = async (projectName) => {
  const toast = ora(dots);
  try {
    toast.start("正在拉取项目文件...");
    const projectPath = path.join(process.cwd(), projectName);
    await promisify(download)(REPO_URL, projectPath, { clone: true });
    toast.succeed("拉取成功!");
  } catch (error) {
    toast.fail("拉取失败!");
    throw error;
  }
};