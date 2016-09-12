var wordsJS = require('./word.js');
var lettersJS = require('./letter.js');
var gameJS = require('./game.js');

var dash = "_ ";
var emptyLetters = [];

function checkLetters(){
		var split = chosenWord.split("");
		console.log("split: " + split)
		emptyLetters.push(split);
		console.log(emptyLetters);
	
};