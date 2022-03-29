/* 
GIOCO DEI DADI
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// ===> DADI <===

//Generare un numero random da 1 a 6 per il giocatore
let numberPlayerElement = Math.floor(Math.random() * 6 + 1);
console.log(`Numero Player:${numberPlayerElement}`);
let numberComputerElement = Math.floor(Math.random() * 6 + 1);
console.log(`Numero PC:${numberComputerElement}`);

if (numberPlayerElement > numberComputerElement) {
    console.log('hai vinto');
} else if (numberPlayerElement < numberComputerElement) {
    console.log('hai perso');
} else {
    console.log('pareggio');
}


//Generare un numero random da 1 a 6 per il PC

// Stabilire il vincitore, in base a chi fa il punteggio più alto