var wordsJS = require('./word.js');
var lettersJS = require('./letter.js');
var gameJS = require('./game.js');
exports.playerGuess = process.argv[2];

var gameJS = require('./game.js');
var words = ["atlanta", "baltimore", "chicago", "detroit", "houston", "indianapolis", "new york"];
var result = "";

var chosenWord  = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array
var arrayofChosenWord = [];
var numBlanks	= 0; // This will be the number of blanks we show based on the solution
var blanksAndSuccesses = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _') 
var wrongGuesses = []; // Holds all of the wrong guesses
var dash = " _ ";

// Game counters
var winCounter  = 0;
var lossCounter = 0;
var numGuesses  = 9;


var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log("random word: " + chosenWord);

lettersInChosenWord = chosenWord.split('');
console.log(lettersInChosenWord);

// var randomWord = function() {
// 	var chosenWord = wordsJS.words[Math.floor(Math.random() * wordsJS.words.length)];
// 	console.log(chosenWord);

// 	if(playerGuess == chosenWord) {
// 		console.log("correct");
// 		var split = chosenWord.split("");
// 		console.log("split: " + split)
// 	} else {
// 		console.log("incorrect");
// 		var split = chosenWord.split("");
// 		console.log("split: " + split)
// 		emptyLetters.push(split);
// 		console.log(emptyLetters);
// 	}

// }

// var dashWord = function(word,letters) {
// 	var result = "";
// 	for(var i = 0; i < wordsJS.words.length; i++){
// 		if(letters.indexOf(word[i]) > -1){
// 			console.log(result = result + word[i]);
// 		} else {
// 			console.log(result = result + dash);
// 		}
// 	}
// 	console.log('The result is: ' + result + letters + word);
// 	return result;
// 	return letters;
// 	return word;
// }


// randomWord();
// dashWord();