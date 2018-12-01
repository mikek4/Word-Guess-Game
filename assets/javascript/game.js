var guessedLetters = [];
var remainingTurns = 9;
var wins = 0;
var losses = 0;
var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

$(document).ready(function(){

var computerLetter = randomLetter[Math.floor(Math.random() * randomLetter.length)];  
$("#wins").html("Wins: " + wins);
$("#guesses").html("Remaining Turns: " + remainingTurns);
$("#losses").html("Losses: " + losses)


document.onkeyup = function (event) {

var letter = event.key.toLowerCase();

console.log(computerLetter);

// displays which letter is pressed and then adds it to the guessedletters array.
function guessLetter() {
    
    guessedLetters.push(letter);
    

    if (letter === computerLetter) {
        wins++;
        reset();
    }else {
        remainingTurns--;
    }

    if (remainingTurns === 0){
        losses++;
        reset();
    }
    
    $("#wins").html("Wins: " + wins);
    $("#guesses").html("Remaining Turns: " + remainingTurns);
    $("#losses").html("Losses: " + losses)
    $("#prevGuesses").html("Previous Letters: " + guessedLetters); 
   
}
guessLetter();
}

function reset() {
    remainingTurns = 9;
    guessedLetters = [];
    computerLetter = randomLetter[Math.floor(Math.random() * randomLetter.length)];
    console.log(guessedLetters.length);
}

});

