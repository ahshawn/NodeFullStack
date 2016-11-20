var movies = [
{
	title: "In bruges",
	rating: 5,
	haveWatched: true
},
{
	title: "Frozne",
	rating: 4.5,
	haveWatched: false
},
{
	title: "Mad Max Fury Road",
	rating: 5,
	haveWatched: true
},
{
	title: "Les Miserables",
	rating: 3.5,
	haveWatched: false
}
];

movies.forEach( function(movie) {
	var result = "You have ";
	if (movie.haveWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars"
	console.log(result);
});