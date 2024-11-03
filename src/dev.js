const fs = require("fs");
const http = require("http");
const path = require("path");

function dev() {
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

  server.listen(3000, () => {
    console.log("Development server running at http://localhost:3000");
  });
}

module.exports = { dev };
