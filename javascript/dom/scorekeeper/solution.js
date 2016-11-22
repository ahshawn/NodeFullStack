var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1CurrentScore = document.querySelector("#p1CurrentScore");
var p2CurrentScore = document.querySelector("#p2CurrentScore");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click", function () {
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1CurrentScore.classList.add("winner");
		}
		p1CurrentScore.textContent = p1Score;	
	}
});

p2Button.addEventListener("click", function () {
	if (!gameOver) {
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2CurrentScore.classList.add("winner");
		}
		p2CurrentScore.textContent = p2Score;		
	}
});

resetButton.addEventListener("click", function () {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p2CurrentScore.textContent = p2Score;
	p1CurrentScore.textContent = p1Score;
	p1CurrentScore.classList.remove("winner");
	p2CurrentScore.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function () {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});