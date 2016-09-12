// var wordsJS = require('./word.js');
// var lettersJS = require('./letter.js');
var gameJS = require('./game.js');
var words = ["atlanta", "baltimore", "chicago", "detroit", "houston", "indianapolis", "new york"];


var chosenWord  = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array
var arrayofChosenWord = [];
var numBlanks	= 0; // This will be the number of blanks we show based on the solution
var blanksAndSuccesses = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _') 
var wrongGuesses = []; // Holds all of the wrong guesses
var dash = "*";
// function randomWord() {
// 	var chosenWord = words[Math.floor(Math.random() * words.length)];
// 	console.log("random word: " + chosenWord);

// 	if(gameJS.playerGuess == chosenWord) {
// 		console.log("Player: " + gameJS.playerGuess);
// 		console.log("correct");
// 		split = chosenWord.split("");
// 		console.log("split array " + split);

// 	} else {
// 		console.log("Player: " + gameJS.playerGuess);
// 		console.log("incorrect");
// 		split = chosenWord.split("");
// 		console.log("split array " + split);
// 	}

// }

// Get a random word from the `words` array and save it to chosenWord
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log("random word: " + chosenWord);

lettersInChosenWord = chosenWord.split('');
console.log(lettersInChosenWord);


function dashWord() {

	for(var i = 0; i < lettersInChosenWord.length; i++) {
		if(gameJS.playerGuess.indexOf(lettersInChosenWord[i]) >= 0){
			console.log(gameJS.playerGuess);
		} else {
			console.log(dash);
		}
	}

}

dashWord();