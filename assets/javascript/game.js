



//Setting everything to zero.//
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = []; //?????
var lettersToGuess = null; //??
console.log(wins, losses, guesses, guessesLeft, guessedLetters, lettersToGuess);


//Let the computer select a random number from the list of available character choices.//
//Letter choices available.//
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(computerChoice);





//Start the game. Computer picks a random letter.//
function startGame() {
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];


    /*for (var i = 0; i < computerChoice.length; i++);
    guessedLetters.push(" "); //new additionf rom HW3_try.html//
    for (var i = 0; i < 9; i++); //new addition from HW3_try.html//
    console.log(startGame);*/
};


computerChoice = prompt("Are you ready to start the game?");//computerChoice = prompt("What letter am I thinking of?");//new addition from HW3_try.html//

startGame();

//Allows the user 9 guesses.//
//guesses == guesses || 9 //

//Here we are grabbing the HTML element and setting it equal to the guessesLeft id (ie. guessesLeft will get displayed in HTML).//
function updateGuessesLeft() {
    document.getElementById("guessesLeft").innerHTML = "Number of guesses left:" + guessesLeft;
};

/*function updateLettersToGuess() {
    this.lettersToGuess = this.computerChoices[Math * this.computerChoices.length];
    console.log(updateLettersToGuess);
};*/


//Here we take the guesses the user has tried, then displays it as letters separated by commas.//
function updateGuessesSoFar() {
    console.log(document.getElementById("guessedLetters").innerHTML = "Your guesses so far:" + guessedLetters);
    console.log(guessedLetters);
};



/*updateLettersToGuess();
updateGuessesLeft();*/

//When key is released it becomes the users guess.//
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoice.includes(userGuess);
    console.log(userGuess, check);
    if (check === false) {
        alert("That was the incorrect letter.");
        guessesLeft--;
        updateGuessesLeft();
        guessedLetters.push(userGuess);
        updateGuessesSoFar();
        if (guessesLeft > 0) {
            if (userGuess == lettersToGuess) {
                wins++;
                document.getElementById("wins").innerHTML = "Wins:" + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }
        }
        else if (guessesLeft == 0) {
            //Then will lose and we'll update the HTML to display the losses.//
            losses++;
            document.getElementById("losses").innerHTML = "Losses:" + losses;
            alert("You are not psychic.");
            reset();   //Then we'll call the reset.//
        }

        return false;
    }
    else if (check === true) {
        //If users choice was an alphabet char. then update guessesLeft and add users guess to the array of guesses letters.//
        guessesLeft--;
        guessedLetters.push(userGuess);

        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == lettersToGuess) {
                wins++;
                document.getElementById("wins").innerHTML = "Wins:" + wins;
                userGuess = userGuess.toUpperCase();
                alert("You gusses correct!");
                reset();
            }
        }
        else if (guessesLeft == 0) {
            //Then will lose and we'll update the HTML to display the losses.//
            losses++;
            document.getElementById("losses").innerHTML = "Losses:" + losses;
            alert("You are not psychic.");
            reset();   //Then we'll call the reset.//
        }
        return false;
    };

    //Function will be called when we reset everything.//
    

}
var reset = function () {
        totalGuesses = 9;
        guessesLeft = 9;
        guessedLetters = [];

        startGame();
        updateGuessesLeft();
        updateGuessesSoFar();

        console.log(reset);
    };
    //console.log() to know it when the correct letter has been choosen, does it work and display properly.
