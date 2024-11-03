#!/usr/bin/env node

const { build } = require("./build");
const { test } = require("./test");
const { dev } = require("./dev");
const { preview } = require("./preview");

const command = process.argv[2];

switch (command) {
  case "build":
    build();
    break;
  case "test":
    test();
    break;
  case "dev":
    dev();
    break;
  case "preview":
    preview();
    break;
  default:
    console.log('Unknown command. Use "build", "test", "dev", or "preview".');
}
