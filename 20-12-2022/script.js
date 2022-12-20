// # Esercizio 1

// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo `string` a scelta, rispettando i seguenti punti:

// - utilizzare il ciclo for classico

// - sarà l'utente ad inserire queste stringhe (`prompt`)

// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

// ----------------------

// Creo un array vuoto

let listExpense =[];

// Ciclo for classico

for (let i = 0; i < 10; i++) {
    listExpense.push(prompt("inserisci 10 cose da mangiare"));
    
}

// Stampo in console

console.log(listExpense);

// ---------------------------

// Avanzato


// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (`for in`e `for of`)

// For minimal - Index

for (let listIndex in listExpense){
    console.log(listIndex);

} 

// // For minimal - Value


for (let listIndex of listExpense){
    console.log(listIndex);

} 





