const http = require("http");
const fs = require("fs");
const path = require("path");

function preview() {
  const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "../output.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("File not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  server.listen(4000, () => {
    console.log("Preview server running at http://localhost:4000");
  });
}

module.exports = { preview };
