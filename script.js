var word = "";
var easy = ["pink", "red", "green", "blue", "white", "black", "yellow", "orange"];
var med = ['maroon', 'turquoise', 'beige', 'magenta', 'lavender', 'mauve', 'fuchsia', 'sapphire', 'slate'];
var hard = ['eminence', 'cordovan', 'cinnabar', 'mikado', 'cerulean', 'amaranth'];
var guesses = 6;
var guessedLetters = [];

function startGame(){
    //restarts the game
    word = "";
    guesses = 6;
    guessedLetters = [];

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
        document.getElementById('numGuesses').innerHTML = guesses.toString();
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

function guessLetter(letter){
    if(word.indexOf(letter) === -1){
        guesses--;
    }

    document.getElementById('numGuesses').innerHTML = guesses.toString();

    if(guesses > 0){
        guessedLetters.push(letter);
        document.getElementById('guessed').innerHTML = printWord();
    }
}
