var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi There!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("someone made a request to /dog");
	res.send("MEOW");
});

app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
	console.log(req.params);
	res.send("Welcome to a comments page!");
});

app.get("*", function(req, res) {
	res.send("You are a star!");
});



//Tell express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started on localhost:3000");
});