#!/usr/bin/env node
require("module-alias").addAlias("@", __dirname);
process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  process.exit(0);
});

require("@/scripts/index.js");

