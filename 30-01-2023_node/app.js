// Crea un progetto Node.js con un file chiamato app.js
// Crea un server che risponde alla porta 3000
// Crea 3 percorsi: pagina iniziale, studenti, corsi
// Nell’output puoi scrivere quello che vuoi  :mano_ok:
// Prova lo script ed esegui correttamente con il comando nel terminale
// Indica quali sono i percorsi che scriverai nella barra di ricerca del browser per raggiungere le tue pagine
//  Semplice, no?
// Happy coding!

//----------------------->>>>>>>>>>>>>>>>>>>>>>

//metodo require() => richiamo il modulo built-in

const http = require("http");

//imposto i 3 percorsi

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  }
  if (req.url === "/studenti") {
    res.end("Pagina studenti");
  }
  if (req.url === "/corsi") {
    res.end("Pagina corsi");
  }
});

//80 / 8000 /8080 /3000 / 3001 / 5000 / 5001 / 5010 / 3010
server.listen(3000);
