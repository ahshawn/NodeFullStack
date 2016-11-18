//create secret number
var secret = 4;

//ask user for guess
var guess = prompt("Guess a number");
var numberGuess = Number(guess);



//check guess
if (numberGuess === 4) 
{
	alert("You are correct!");
}
else {
	alert("You got it wrong!");
}