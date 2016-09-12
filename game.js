var wordsJS = require('./word.js');
var lettersJS = require('./letter.js');
var gameJS = require('./game.js');
exports.playerGuess = process.argv[2];

// Game counters
var winCounter  = 0;
var lossCounter = 0;
var numGuesses  = 9;



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