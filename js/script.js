// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
	{
		quote: "I'm gonna make him an offer he can't refuse.",
		source: "Vito Corleone (Marlon Brando)",
		citation: "The Godfather",
		year: 1972
	},
	{
		quote: "Toto, I've got a feeling we're not in Kansas anymore.",
		source: "Dorothy Gale (Judy Garland)",
		citation: "The Wizard of Oz",
		year: 1939
	},
	{
		quote: "Go ahead, make my day.",
		source: "Harry Callahan (Clint Eastwood)",
		citation: "Sudden Impact",
		year: 1983
	},
	{
		quote: "May the Force be with you.",
		source: "Han Solo (Harrison Ford)",
		citation: "Star Wars",
		year: 1977
	},
	{
		quote: "You talkin' to me?",
		source: "Travis Bickle (Robert De Niro)",
		citation: "Taxi Driver",
		year: 1976
	},
	{
		quote: "E.T. phone home.",
		source: "E.T. (Pat Welsh)",
		citation: "E.T. the Extra-Terrestrial",
		year: 1982
	},
	{
		quote: "I'll be back.",
		source: "The Terminator (Arnold Schwarzenegger)",
		citation: "The Terminator",
		year: 1984
	},
	{
		quote: "Houston, we have a problem.",
		source: "Jim Lovell (Tom Hanks)",
		citation: "Apollo 13",
		year: 1995
	},
];