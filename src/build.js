const fs = require("fs");
const path = require("path");

function minifyHTML(html) {
  return html
    .replace(/<!--.*?-->/g, "") // Remove comments
    .replace(/\s*\n\s*/g, "") // Remove newlines
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim();
}

function minifyCSS(css) {
  return css
    .replace(/\/\*.*?\*\//g, "") // Remove comments
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .replace(/\s*([{};:,+>])\s*/g, "$1") // Remove spaces around special characters
    .trim();
}

function minifyJS(js) {
  return js
    .replace(/\/\/.*$/gm, "") // Remove single-line comments
    .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .replace(/\s*([{}();,])\s*/g, "$1") // Remove spaces around special characters
    .trim();
}

function build() {
  const files = {
    html: "test/index.html",
    css: "test/styles.css",
    js: "test/script.js",
  };

  const minifiedHTML = minifyHTML(fs.readFileSync(files.html, "utf-8"));
  const minifiedCSS = minifyCSS(fs.readFileSync(files.css, "utf-8"));
  const minifiedJS = minifyJS(fs.readFileSync(files.js, "utf-8"));

  const packedContent = `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${minifiedCSS}</style>
<title>Packed File</title></head><body>${minifiedHTML}<script>${minifiedJS}</script></body></html>`;

  fs.writeFileSync("output.html", packedContent);
  console.log("Build complete: output.html");
}

module.exports = { build };
