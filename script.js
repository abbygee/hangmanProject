var word = "";
var words = ["pink", "red", "maroon", "turquoise"];
var guesses = 6;
var guessedLetters = [];

function startGame(){

    var empty = "";
    var rand = words[Math.floor(Math.random() * words.length)];
    for(var i = 0; i < rand.length; i++){
        empty += "_ ";
    }
    document.getElementById('guessed').innerHTML = empty;
    document.getElementById('numGuesses').innerHTML = guesses.toString();
}

function guessLetter(letter){
    if(word.indexOf(letter) === -1){
        guesses--;
    }

    if(guesses > 0){
        guessedLetters += letter;
        var answer = printWord();
        document.getElementById('guessed').innerHTML = answer;
    }
}

function printWord(){
    var answer = "";

    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            answer += word[i] + " ";
        }else{
            answer += "_ ";
        }
    }
    return answer;
}