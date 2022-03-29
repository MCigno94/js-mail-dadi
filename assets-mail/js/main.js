/* 
===> MAIL <===
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/


//Chiedere all’utente la sua email
let elementEmail = document.getElementById('email');
let emailInput = elementEmail.value
let mailService = '@gmail.com';
let mailList = [`mattia${mailService}`, `paolo${mailService}`, `federica${mailService}`, `anna${mailService}`];
//console.log(mailList);

for (let i = 0; i < mailList.length; i++) {
    let mailUser = mailList[i];
    //console.log(mailUser);

    //Controllare che sia nella lista di chi può accedere
    if (mailUser == elementEmail) {
        alert('ok')
    } else {
        //alert('mi spiace utente non trovato')
    }
}


//Stampare un messaggio appropriato sull’esito del controllo (allert)