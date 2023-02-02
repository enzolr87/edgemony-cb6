const http = require("http");
const fs = require("fs");
const book = require("./libri.json");

let homepage = fs.readFileSync("homepage.html");
let chi_sono = fs.readFileSync("chisono.html");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(homepage);
    } else if (req.url === "./chisono.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(chi_sono);
    } else if (req.url === "./libri.json") {
      res.writeHead(200, { "Content-Type": "applicatione/json" });
      const user = JSON.stringify({
        titolo: "api",
      });

      res.end();
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(8080);
console.log("Server attivo");
