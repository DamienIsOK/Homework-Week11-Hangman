// var wordsJS = require('./word.js');
// var lettersJS = require('./letter.js');
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

var inquirer = require('inquirer');

// I have a feeling I'm supposed to be using Inquirer here. Correct?? //
function Word(chosenWord) {
	this.chosenWord = chosenWord
	this.print = function() {
		console.log(chosenWord)
	}
}

inquirer.prompt([{
	name: "name",
	message: "What's your name?"
}, {
	name: "position",
	message: "What's your position?"
}, {
	name: "age",
	message: "What's your age?"
}, {
	name: "language",
	message: "What's your favorite language?"
}]).then(function(answers){
    var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
	newGuy.print();
})

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
// var chosenWord = words[Math.floor(Math.random() * words.length)];
// console.log("random word: " + chosenWord);

// lettersInChosenWord = chosenWord.split('');
// console.log(lettersInChosenWord);


// function dashWord() {

// 	for(var i = 0; i < lettersInChosenWord.length; i++) {
// 		if(gameJS.playerGuess.indexOf(lettersInChosenWord[i]) >= 0){
// 			console.log(result = result + gameJS.playerGuess);
// 		} else {
// 			console.log(result = result + dash);
// 		}
// 	}

// }

// dashWord();