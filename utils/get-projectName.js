const colors = require("colors");
const prompt = require("prompt");
const { promisify } = require("es6-promisify");


module.exports = async () => {
  try {
    prompt.message = undefined;
    prompt.delimiter = ":";
    prompt.start();
    const { projectName } = await promisify(prompt.get)([{
      name: "projectName",
      description: colors.white("请输入项目名称")
    }]);
    return projectName;
  } catch (error) {
    if (error.message === "canceled") {
      process.exit(0);
    };
    throw error;
  }
};