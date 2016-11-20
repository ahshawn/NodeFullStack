var body = document.querySelector("body");
var button = document.querySelector("button");
var purpleBackground = false;

button.addEventListener("click", function () {
	if (!purpleBackground){
		body.style.background = "purple";
	} else {
		body.style.background = "white";
	}

	purpleBackground = !purpleBackground;
})