/*1. Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola. 

function parolaGirata (parola); {

} */

/*2. Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

function concatenaStringhe(string) {
  for (let i = 0; i < numeroStringhe; i++);
}

let numeroStringhe = parseInt(prompt("Quante stringhe vuoi concatenare?"));
const stringa = [];

let stringhe = prompt("Scrivi qui la prima stringa");
let stringhe2 = prompt("Scrivi ora la seconda stringa");
console.log(stringhe + stringhe2);

concatenaStringhe(); */

/*3. Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.*/

function doppioNumero(numero) {
  return numero * 2;
}

for (let i = 0; i < 10; i++) {
  let numeroUtente = Number(prompt("Inserisci qui i numeri"));
  console.log(numeroUtente * 2);
}

doppioNumero();
