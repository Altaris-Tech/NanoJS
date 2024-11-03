const fs = require("fs");

function test() {
  const jsFile = "script.js";
  try {
    new Function(fs.readFileSync(jsFile, "utf-8"));
    console.log("Test passed: No syntax errors found.");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

module.exports = { test };
