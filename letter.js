var wordsJS = require('./word.js');
var lettersJS = require('./letter.js');
var gameJS = require('./game.js');

var dash = "_ ";
var emptyLetters = [];

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