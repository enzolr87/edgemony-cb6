const http = require("http");
const fs = require("fs");

// usiamo un modulo per gestire il file system del nostro progetto

const homePage = fs.readFileSync("index.html");

let server = http.createServer((req, res) => {
  if (req.url === "/prodotti") res.end("pagina prodotti");
  else if (req.url === "/clienti") res.end("pagina clienti");
  //creo l'output
  else if (req.url === "/") res.end(homePage);
  else {
    res.writeHead(404);
    res.end("not found");
  }
});

server.listen(3000);