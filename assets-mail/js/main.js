/* 
===> MAIL <===
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/



//Chiedere all’utente la sua email
// Variables
let emailElement = document.getElementById('email');
let btnElement = document.getElementById('btn');

// Array
const gmailService = '@gmail.com';
let emailList = [`silvio${gmailService}`, `paolo${gmailService}`, `serena${gmailService}`, `gaia${gmailService}`];

// Function
btnElement.addEventListener('click', function() {
    // Variables
    let emailInput = emailElement.value;
    let emailVerified = false;

    // Ciclare l'array
    for (let i = 0; i < emailList.length; i++) {
        let emailUser = emailList[i];

        // Verificare l'email in input
        if (emailInput == emailUser) {
            emailVerified = true;
        };
    };

    if (emailVerified == true) {
        alert('Login avvenuto con successo');
    } else {
        alert('La mail inserita non è corretta, riprova!');
    };

});

//Controllare che sia n;ella lista di chi può accedere

//Stampare un messaggio appropriato sull’esito del controllo (allert)