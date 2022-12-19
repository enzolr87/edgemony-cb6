// Chiedo all'utente il tipo di operazione che desidera svolgere
let userOperator = prompt("Ciao, che tipo di operazione vuoi fare?");

// Chiedo all'utente di inserire il primo numero
let firstNumb = prompt("Inserisci il primo numero");

// Chiedo all'utente di inserire il secondo numero
let secondNumb = prompt("Inserisci il secondo numero");

// Dichiaro la variabile per stampare il risultato
let result = "Il risultato è:" + firstNumb * secondNumb;

// Risulato operazione
console.log(result);

// ------------------------------------------

if (userOperator === "*" ||userOperator ==="moltiplicazione"){  
// Stampo la moltiplicazione
result = "moltiplicazione:" + firstNumb + "*" + secondNumb + "=" + (firstNumb * secondNumb);
// Stampo l'addizione
}else if (userOperator === "+" ||userOperator==="addizione"){
result = "addizione:" + firstNumb + "+" + secondNumb + "=" + (firstNumb + secondNumb);           
// Stampo la sottrazione
}else if (userOperator === "+" ||userOperator==="sottrazione"){
result = "sottrazione:" + firstNumb + "-" + secondNumb + "=" + (firstNumb - secondNumb);         
// Stampo la divisione
}else if (userOperator === "+" ||userOperator==="divisione")
result = "divisione:" + firstNumb + "/" + secondNumb + "=" + (firstNumb / secondNumb);

 else {
    alert("Siamo spiacenti ma "+ userOperator + " non è prevista come operazione");
    alert("Prova con la moltiplicazione - sottrazione - oppure divisione");
    
}

    // Stampa esito
    alert(result);
    console.log(result);



 


