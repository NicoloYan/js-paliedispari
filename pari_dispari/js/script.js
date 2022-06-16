// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Inserisco la decisione dell'utente in una variabile
let userEvenOrOdd = prompt('Scegli pari o dispari')

// Inserisco il numero dato dall'utente in una variabile
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log('Numero utente', userNumber)
// Genero numero random per il computer
let botNumber = getRndInteger(1, 5)
console.log('Numero bot', botNumber)
// Sommo userNumber + botNumber
const sum = userNumber + botNumber
console.log('Somma', sum)
// Stabilisco se sum è pari o dispari
let sumEvenOrOdd = isEvenOrOdd(sum)

// Decreto il vincitore
if (userEvenOrOdd === 'pari' && sumEvenOrOdd === 'even') {
    alert('Complimenti, hai vinto!')
} else if (userEvenOrOdd === 'dispari' && sumEvenOrOdd === 'odd') {
    alert('Complimenti, hai vinto!')
} else if (userEvenOrOdd === 'pari' && sumEvenOrOdd === 'odd') {
    alert('Hai perso, riprova!')
} else {
    alert('Hai perso, riprova!')
}



// ----------
// FUNCTIONS
// ----------


// Funzione che verifica se un numero è pari o dispari

function isEvenOrOdd(number) {
    let evenOrOdd;
    // se il number % 2 da resto 0 -> evenOrOdd = 'even'
    // altrimenti evenOrOdd = 'odd'
    if(number % 2 === 0) {
        evenOrOdd = 'even'
    } else {
        evenOrOdd = 'odd';
    }

    return evenOrOdd;
}

// Funzione che genera numero random compreso tra min e max

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
