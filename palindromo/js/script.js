// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo una parola all'utente
let userWord = prompt('Dimmi una parola')
// Definisco la variabile reversedWord dove andra' la parola al contrario
let reversedWord = ''


// Scorro tutti i caratteri di userWord al contrario e li inserisco in una stringa chiamata reversedWord
for (let i = userWord.length - 1; i >= 0; i--) {
    const thisLetter = userWord[i]
    reversedWord += thisLetter
}
console.log(reversedWord)

// Tramite la funzione scopro se userWord è un palindromo :
    // Se userWord === reversedWord, è un palindromo
    // Altrimenti no
function myFunction() {
    if (userWord === reversedWord) {
        alert('La parola è un palindromo')
    } else {
        alert('La parola non è un palindromo')
    }
}
myFunction()
