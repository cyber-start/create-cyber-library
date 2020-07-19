#!/usr/bin/env node
const path = require("path");
require("module-alias").addAlias("@", path.join(__dirname, "./src/"));

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  process.exit(0);
});

require("./src/index.js");

