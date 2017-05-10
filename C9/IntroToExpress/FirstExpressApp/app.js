var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye");
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res) {
    res.send("Meow!")
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("*", function(req, res) {
    res.send("You are a star!");
});

//Tell express to list for request(start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});
