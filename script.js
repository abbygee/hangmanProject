var word = "";
var easy = ["pink", "red", "green", "blue", "white", "black", "yellow", "orange"];
var med = ['maroon', 'turquoise', 'beige', 'magenta', 'lavender', 'mauve', 'fuchsia', 'sapphire', 'slate'];
var hard = ['eminence', 'cordovan', 'cinnabar', 'mikado', 'cerulean', 'amaranth'];
var guesses = 6;
var guessedLetters = [];

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function startGame(){
    //restarts the game
    word = "";
    guesses = 6;
    guessedLetters = [];
    document.getElementById('final').innerHTML = "";
    document.getElementById('wrong').innerHTML = "";

   /* for(var a = 0; a < alpha.length; a++){
        document.getElementById()
    }*/

    //determines words from the difficulty the user chose
    var cat = document.getElementById('cat').value;

    if(cat === 'default'){
        alert('Please choose a difficulty before continuing');
    }else{
        if(cat === 'Easy'){
            word = easy[Math.floor(Math.random() * easy.length)];
        }
        if(cat === 'Medium'){
            word = med[Math.floor(Math.random() * med.length)];
        }
        if(cat === 'Hard'){
            word = hard[Math.floor(Math.random() * hard.length)];
        }
        //states the blank lines of the user's word
        var empty = "";
        for(var i = 0; i < word.length; i++){
            empty += "_ ";
        }

        //prints the word and guesses to user
        document.getElementById('guessed').innerHTML = empty;
        document.getElementById('numGuesses').innerHTML = guesses.toString() + " guesses left";
    }
}

function printWord(){
    var answer = "";

    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            answer += word[i];
        }else{
            answer += "_ ";
        }
    }
    return answer;
}

function guessLetter(letter){
    document.getElementById(letter).disabled = true;

    if(word.indexOf(letter) === -1 && guesses > 0 && printWord() !== word){
        guesses--;
    }

    // adds the guessed letter to the array and tells user what goes on
    guessedLetters.push(letter);
    document.getElementById('guessedLetters').innerHTML = guessedLetters.toString();

    // prints their current word status
    document.getElementById('guessed').innerHTML = printWord();

    // tells user amount of guesses left
    document.getElementById('numGuesses').innerHTML = guesses.toString() + " guesses left";

    if(printWord() !== word && guesses === 0){
        document.getElementById('final').innerHTML = "but you ran out of guesses and lost :( sorry loser, click start game to try again!";
        document.getElementById('wrong').innerHTML = "The correct answer was: " + word;
    }

    if(printWord() === word){
        document.getElementById('final').innerHTML = "Hurray! You won! Click start game to play agin :-)"
    }
}
