const path = require("path");
const download = require("download-git-repo");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");

module.exports = async ({ folderName, remote }) => {
  try {
    const downloadTemplate = `direct:${remote.replace(/\.git$/ig, "")}.git`;
    toast.start("正在拉取项目文件...");
    const projectPath = path.join(process.cwd(), folderName);
    await promisify(download)(downloadTemplate, projectPath, { clone: true });
    toast.succeed("拉取成功!");
  } catch (error) {
    toast.fail("拉取失败!");
    throw error;
  };
};