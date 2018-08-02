var wordBank = ["Audi", "BMW", "Porsche", "Mercedes", "Bugatti", "Ferrari", "Lamborghini", "Aston Martin", "Bentley", "Alfa Romeo"]

var wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

var lettersGuessed = [];

for (var i = 0; i < wordChoice.length; i++); {
    lettersGuessed[i] = '_';
}

console.log(answerArray);
console.log(wordChoice);


var remainingLetters = wordChoice.length;

while (remainingLetters > 0) {

}


for (var j = 0; j < wordChoice.length; j++) {
    if (wordChoice[j] === userGuess) {
    lettersGuessed[j] = userGuess;
    }
}

