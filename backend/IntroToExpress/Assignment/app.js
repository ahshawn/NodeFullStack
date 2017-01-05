var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		cat: "I hate you human",
		goldfish: "..."
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];

	res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:times", function(req,res){
	var word = req.params.word;
	var times = parseInt(req.params.times);
	var message = "";
	for(var i = 0; i < times; i++) {
		message += word + " ";
	}
	res.send(message);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

// app.listen(process.env.PORT, process.env.IP, function() {
// 	console.log("Server has started on localhost:3000");
// });
app.listen(3000, function() {
	console.log("server started on localhost:3000");
})