// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var bombe = [] // 16 numeri casuali fra 1 e 100 non ripetuti
var safenumbers = [] // 84 numeri utente fra 1 e 100 non ripetuti non contenenti bombe

// genero sedici numeri fra 1 e 100
while (bombe.length < 16) {
  var sorted = dice(1,100)
  if (!(bombe.includes(sorted))) {
    bombe.push(sorted)
  }
}
bombe.sort()
console.log(bombe);


safenumbers.sort()
console.log(safenumbers);
while (safenumbers.length < 84) {
  var inseriti = parseInt(prompt("inserisci un numero da 1 a 100"));
  if (!safenumbers.includes(inseriti)) {
    if (bombe.includes(inseriti)) {
      console.log("you died!");
      break;
    } else {
      safenumbers.push(inseriti)
    }
  }
}




// while (safenumbers.length < 84) {
//   var inseriti = parseInt(prompt("inserisci un numero da 1 a 100"));
//   if (bombe.includes(inseriti)) {
//     console.log("you died!");
//   } else if (!(safenumbers.includes(inseriti))) {
//     safenumbers.push(inseriti)
//   }
// }
// safenumbers.sort()
// console.log(safenumbers);





//FUNZIONI
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
