const colors = require("colors");
const prompt = require("prompt");
const { promisify } = require("es6-promisify");


module.exports = async () => {
  try {
    prompt.message = undefined;
    prompt.delimiter = ":";
    prompt.start();
    const { scopeName } = await promisify(prompt.get)([{
      name: "scopeName",
      description: colors.white("请输入作用域@scope")
    }]);
    return scopeName;
  } catch (error) {
    if (error.message === "canceled") {
      process.exit(0);
    };
    throw error;
  };

};