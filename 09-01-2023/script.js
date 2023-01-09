// Esercizio 1
// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// nb. ogni singola operazione sara una arrow function

// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

// --------------------


const somma = (x, y) => x + y;
console.log(somma);


const sottrazione = (x, y) => x - y;
console.log(sottrazione);

const moltiplicazione = (x, y) => x * y;
console.log(moltiplicazione);

const divisione = (x, y) => x / y;
console.log(divisione);


function calculator(operation,firstNumb, secondNumb){
    if (operation==="+"){
        return firstNumb + secondNumb;

    } else if (operation === "-"){
        return firstNumb - secondNumb;
        
    } else if (operation === "*"){
        return firstNumb * secondNumb;

    } else if (operation === "/"){
        return firstNumb / secondNumb;
    }

}

console.log(calculator("+", 10, 5));
console.log(calculator("-", 10, 5));
console.log(calculator("*", 10, 5));
console.log(calculator("/", 10, 5));

