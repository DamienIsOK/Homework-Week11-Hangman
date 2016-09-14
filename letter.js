var wordsJS = require('./word.js');
var lettersJS = require('./letter.js');
var gameJS = require('./game.js');

var dash = "_ ";
var emptyLetters = [];

var words = ["atlanta", "baltimore", "chicago", "detroit", "houston", "indianapolis", "new york"];
var result = "";

var chosenWord  = ""; 
var lettersInChosenWord = []; 
var arrayofChosenWord = [];
var numBlanks	= 0; 
var blanksAndSuccesses = [];  
var wrongGuesses = []; 
var dash = " _ ";

function dashWord() {

	for(var i = 0; i < lettersInChosenWord.length; i++) {
		if(gameJS.playerGuess.indexOf(lettersInChosenWord[i]) >= 0){
			console.log(result = result + gameJS.playerGuess);
		} else {
			console.log(result = result + dash);
		}
	}

}

dashWord();