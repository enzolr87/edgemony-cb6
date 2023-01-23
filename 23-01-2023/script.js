// Esercizio 1
// Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando ASYNC / AWAIT) che effettui una chiamata al seguente endpoint: https://dummyjson.com/quotes.

// Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1. Per qulunque riferimento utilizzare la documentazione presente al seguente indirizzo: https://dummyjson.com/

import { qS, cE,} from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const containerEl = cE("div");
containerEl.className = ("container");


bodyEl.appendChild(containerEl);
containerEl.appendChild(cardCreate,(data));

GET("quotes").then((data) =>{
    containerEl.appendChild(cardCreate(data.quotes[0]));

});
