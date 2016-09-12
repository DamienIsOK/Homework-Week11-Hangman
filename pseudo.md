* Both `letter.js` and `word.js` should be constructor files:
    * `word.js` should contain all of the methods which will check the letters guessed versus the random word selected.

	    + Create an empty array to contain all of my letters guessed
	    + When a user selects a letter, it will be pushed to the empty array
	    + Check if the letters guessed are an index of my array

    * `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.

		+ Get length of random word
		+ Print _ for each character of random word


* Your `game.js` file will randomly select a word for the player.

	+ Create an array of random words
	+ Save random word to a variable
	+ Split that random word into an array

* `main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.

	+ Create a variable with # of guesses
	+ If letter guessed is in the array, then replace _ with that letter
	+ If letter guessed is NOT in the array, then decrement guesses
	+ Log the remaining # of guesses
	+ If # of guesses is 0 then log, "You lose"
	+ If # of guesses is 0, then show the correct word

* The app should end when a player guesses the correct word or runs out of guesses.