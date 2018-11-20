// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti. (84!)
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50



// creo il ciclo per i 16 numeri random del computer

var arrayRandomComputer = [];
var numeroUtente = 1;
var checkNumero = false;


for (var i = 1; i <= 16; i++)
{
  var numeroRandomComputer = Math.floor(Math.random()* 100 + 1);
  console.log(numeroRandomComputer);
  arrayRandomComputer.push(numeroRandomComputer);
  if (numeroUtente = arrayRandomComputer[i])
  {
    checkNumero = true;
  }

}
if (checkNumero == true) {
  document.writeln('hai perso')
}
console.log(arrayRandomComputer);


// if (numeroUtente = numeroRandomComputer) {
//   document.writeln('hai perso!');
// }
// else {
//   document.writeln('inserisci un altro numero')
// }
