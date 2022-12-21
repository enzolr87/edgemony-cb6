// Esercizio 1
// Sulla base della lezione del giorno:

// scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola bootcamp;

let string = prompt("inserisci una stringa");

function sum (string, wordAgg) {
    return string + " "+wordAgg;
}

let total = sum(string, "bootcamp");
console.log(total);

// ------------->>>>>>>


// Esercizio 2
// scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)


let person = {
    name:"Enzo",
    surname:"La Russia",
    age:"35",
    job:"Educator",
    city:"Catania",

   run: function(){
        console.log("Prova prova! 123 prova!")
        console.log("yeahhhhhh")
    }

}
console.log(person.name)
person.run()


// --------------->>>>>>>>>>>>>>>>>>>>



// Avanzato
// Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

// Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro un array ([num1, num2]).

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