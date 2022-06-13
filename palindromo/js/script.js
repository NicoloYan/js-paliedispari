// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo una parola all'utente
let userWord = prompt('Dimmi una parola')
// Definisco le variabili e gli arrays
let reversedArray = []
let normalArray = []
let reversedWord = reversedArray.join('')
let word = normalArray.join('')

// Scorro tutti i caratteri di userWord al contrario e li inserisco in reversedArray
for (let i = userWord.length - 1; i >= 0; i--) {
    reversedWord = reversedArray.push(userWord[i])
}
console.log(reversedArray)

// Scorro tutti i caratteri di userWord ner ''verso giusto'' e li inserisco in normalArray
for (let i = 0; i < userWord.length; i++) {
    word = normalArray.push(userWord[i])
}
console.log(normalArray)

// Tramite la funzione scopro se userWord è un palindromo :
    // Se word === reversedWord, è un palindromo
    // Altrimenti no
function myFunction() {
    if (word === reversedWord) {
        alert('La parola è un palindromo')
    } else {
        alert('La parola non è un palindromo')
    }
}
myFunction()
