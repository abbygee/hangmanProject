var word = "";
var easy = ["pink", "red", "green", "blue", "brown", "yellow", "orange"];
var med = ['maroon', 'turquoise', 'beige', 'magenta', 'lavender', 'fuchsia', "sapphire", 'slate'];
var hard = ["eminence", "cordovan", "cinnabar", "mikado", "cerulean", "amaranth"];
var guesses = 6;
var guessedLetters = [];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function setUp(){
    document.getElementById("img").src = "images/6.png";
    for(var i = 0; i < alpha.length; i++){

        var btn = document.createElement('button');

        btn.setAttribute("id", alpha[i]);
        btn.setAttribute("class", "w3-button w3-white w3-border w3-border-black w3-round-large");
        btn.setAttribute("onclick","guessLetter(this.id)");
        btn.innerHTML = alpha[i].toLocaleUpperCase();

        document.getElementById('allButtons').appendChild(btn);
    }
}

function startGame(){
    //restarts the game for the user
    word = "";
    guesses = 6;
    guessedLetters = [];
    document.getElementById('final').innerHTML = "";
    document.getElementById('wrong').innerHTML = "";
    document.getElementById('guessedLetters').innerHTML = "";
    document.getElementById("back").style.backgroundColor = "initial";
    document.getElementById("img").src = "images/6.png";

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
    // checks if the user has chosen a category yet
    var cat = document.getElementById('cat').value;
    if(cat === 'default') {
        alert('Please choose a difficulty before continuing');
    }else{
        document.getElementById(letter).disabled = true;

        if(word.indexOf(letter) === -1 && guesses > 0 && printWord() !== word){
            guesses--;
            document.getElementById("img").src = "images/" + guesses + ".png";
        }

        // adds the guessed letter to the array and tells user what goes on
        guessedLetters.push(letter);
        document.getElementById('guessedLetters').innerHTML = "All guessed letters: " + guessedLetters.toString();

        // prints their current word status
        document.getElementById('guessed').innerHTML = printWord();

        // tells user amount of guesses left
        if(guesses === 1){
            document.getElementById('numGuesses').innerHTML = guesses.toString() + " guess left";
        }else{
            document.getElementById('numGuesses').innerHTML = guesses.toString() + " guesses left";
        }

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
            document.getElementById('final').innerHTML = "Winner winner chicken dinner! Click start game to play again :-)";
            for(var i = 0; i < alpha.length; i++){
                document.getElementById(alpha[i]).disabled = true;
            }
            backColor();
        }
    }
}

function backColor(){
    var cat = document.getElementById('cat').value;
    var body = document.getElementById("back");

    //changes background to fulfill the color of the user's word
    if(cat === 'Easy'){
        body.style.backgroundColor = word;
    }

    if(cat === 'Medium'){
        if(word === 'slate'){
            body.style.backgroundColor = "lightslategrey";
        }else{
            if(word === "sapphire"){
                body.style.backgroundColor = "#0f52ba";
            }else{
                body.style.backgroundColor = word;
            }
        }
    }

    if(cat === 'Hard'){
        if(word === "eminence"){
            body.style.backgroundColor = "#6e3974";
        }
        if(word === "cordovan"){
            body.style.backgroundColor = "#893f45";
        }
        if(word === "cinnabar"){
            body.style.backgroundColor = "#E44D2E";
        }
        if(word === "mikado"){
            body.style.backgroundColor = "#FFC40C";
        }
        if(word === "cerulean"){
            body.style.backgroundColor = "#2a52be";
        }
        if(word === "amaranth"){
            body.style.backgroundColor = "#F19CBB";
        }
    }
}