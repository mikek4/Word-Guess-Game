var guessedLetters = [];
var movies = ["Jaws", "Jurassic Park", "Terminator", "Predator"];


document.onkeyup = function (event) {

var letter = event.key.toLowerCase();

function guessLetter() {
    console.log("You picked: " + letter);
    guessedLetters.push(letter);
    console.log("Number of Guesses: " + guessedLetters.length);
}

function prevGuess() {
    
    for(var i = 0; i < guessedLetters.length; i++) {
    console.log("Previous Guesses: " + guessedLetters);
    }
    
}

guessLetter();
prevGuess();

}


