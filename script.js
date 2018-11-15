var word = "";
var easy = ["pink", "red", "green", "blue", "white", "black", "yellow", "orange"];
var med = ['maroon', 'turquoise', 'beige', 'magenta', 'lavender', 'mauve', 'fuchsia', 'sapphire', 'slate'];
var hard = ['eminence', 'cordovan', 'cinnabar', 'mikado', 'cerulean', 'amaranth'];
var guesses = 6;
var guessedLetters = [];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function setUp(){
    for(var i = 0; i < alpha.length; i++){

        var btn = document.createElement('button');

        btn.setAttribute("id", alpha[i]);
        btn.setAttribute("onclick","guessLetter(this.id)");
        btn.innerHTML = alpha[i].toLocaleUpperCase();

        document.getElementById('allButtons').appendChild(btn);
    }
}

function startGame(){
    //restarts the game
    word = "";
    guesses = 6;
    guessedLetters = [];
    document.getElementById('final').innerHTML = "";
    document.getElementById('wrong').innerHTML = "";
    document.getElementById('guessedLetters').innerHTML = "";

    for(var a = 0; a < alpha.length; a++){
        document.getElementById(alpha[a]).disabled = false;
    }

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
    document.getElementById('guessedLetters').innerHTML = "All guessed letters: " + guessedLetters.toString();

    // prints their current word status
    document.getElementById('guessed').innerHTML = printWord();

    // tells user amount of guesses left
    document.getElementById('numGuesses').innerHTML = guesses.toString() + " guesses left";

    //determines what happens when the user wins or loses
    if(printWord() !== word && guesses === 0){
        document.getElementById('final').innerHTML = "but you ran out of guesses and lost :( sorry loser, click start game to try again!";
        document.getElementById('wrong').innerHTML = "The correct answer was: " + word;
        for(var i = 0; i < alpha.length; i++){
            document.getElementById(alpha[i]).disabled = true;
        }
        backColor();
    }

    if(printWord() === word){
        document.getElementById('final').innerHTML = "Winner winner chicken dinner! Click start game to play again :-)"
        backColor();
    }
}

function backColor(){
    var cat = document.getElementById('cat').value;
    var body = document.getElementsByTagName("body");

    //changes background to fulfill the color of the user's word
    if(cat === 'Easy'){
        body.style.backgroundColor = word;
    }

    if(cat === 'Medium'){
        if(word === 'sapphire'){
            body.setAttribute('class', 'sapphire');
        }else{
            body.style.backgroundColor = word;
        }
    }

    if(cat === 'Hard'){
        body.setAttribute('class', word);
    }

}