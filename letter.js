var userGuess = process.argv[2];
var words = ["atlanta", "baltimore", "chicago", "detroit", "houston", "indianapolis", "new york"];
var lettersInChosenWord = ["t"];
var dash = "_ ";

function Letters(letter) {
	correctLetter: function(){
		if(words.indexOf(userGuess)) {
			console.log("Correct word")
		} else {
			console.log("Inccorect word")
		}
	}
}