var wordBank = ["Audi", "BMW", "Porsche", "Mercedes", "Bugatti", "Ferrari", "Lamborghini", "Aston Martin", "Bentley", "Alfa Romeo"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongLetter = [];
var userGuesses = [];
var underscores = [];
var randomWord;

function startGame() {

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);
}




