//11 quotes
var quotes = [
	{
		quote: "I'm gonna make him an offer he can't refuse.",
		source: "Vito Corleone (Marlon Brando)",
		citation: "The Godfather",
		year: 1972,
		tags: "Movie Quote"
	},
	{
		quote: "Toto, I've got a feeling we're not in Kansas anymore.",
		source: "Dorothy Gale (Judy Garland)",
		citation: "The Wizard of Oz",
		year: 1939,
		tags: "Movie Quote"
	},
	{
		quote: "Go ahead, make my day.",
		source: "Harry Callahan (Clint Eastwood)",
		citation: "Sudden Impact",
		year: 1983,
		tags: "Movie Quote"
	},
	{
		quote: "May the Force be with you.",
		source: "Han Solo (Harrison Ford)",
		citation: "Star Wars",
		year: 1977,
		tags: "Movie Quote"
	},
	{
		quote: "You talkin' to me?",
		source: "Travis Bickle (Robert De Niro)",
		citation: "Taxi Driver",
		year: 1976,
		tags: "Movie Quote"
	},
	{
		quote: "E.T. phone home.",
		source: "E.T. (Pat Welsh)",
		citation: "E.T. the Extra-Terrestrial",
		year: 1982,
		tags: "Movie Quote"
	},
	{
		quote: "I'll be back.",
		source: "The Terminator (Arnold Schwarzenegger)",
		citation: "The Terminator",
		year: 1984,
		tags: "Movie Quote"
	},
	{
		quote: "Houston, we have a problem.",
		source: "Jim Lovell (Tom Hanks)",
		citation: "Apollo 13",
		year: 1995,
		tags: "Movie Quote"
	},
	{
		quote: "Don\'t cry because it\'s over, smile because it happened.",
		source: "Dr.Seuss",
		tags: "Inspirational Quotes"
	},
	{
		quote: "Be yourself; everyone else is already taken.",
		source: "Oscar Wilde",
		tags: "Inspirational Quotes"
	},
	{
		quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		source: "Albert Einstein",
		tags: "Humor"
	}
	
];

var quoteBackup = [];

//returns a random quote from the array of quotes
function getRandomQuote(){
	var x = Math.floor(Math.random() * quotes.length);
	return quotes[x];
}

//changes backgroundColor each time it's called(each time the button is pressed)
function changeBackground(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
}

// calls getRandomQuote function and prints out the random quote
function printQuote(){
	var quoteElement = getRandomQuote();
	
	//concatenate the string that contains the quote
	var quoteStirng="";
	quoteStirng += '<p class="quote">' + quoteElement.quote + '</p>' + 
							'<p class="source">' + quoteElement.source;
	if(typeof quoteElement.citation !== 'undefined'){
		quoteStirng += '<span class="citation">' + quoteElement.citation + '</span>';
	} if(typeof quoteElement.year !== 'undefined'){
		quoteStirng += '<span class="year">' + quoteElement.year + '</span>';
	}
	quoteStirng += "<span class ='tags'>" + quoteElement.tags + "</span>" +'</p>';
	
	//change the quote
	document.getElementById('quote-box').innerHTML = quoteStirng;
	
	//change the background color
	changeBackground();
	
	//log the quote to the console
	console.log(quoteElement.quote);
	
	//remove the displayed quote from the list of quotes or "start over"
	//console.log("quotes: "quotes.length);
	if(quotes.length == 1){
		quotes = quoteBackup;
		quoteBackup = [];
	}else {

		quoteBackup.push(quoteElement); 
		//console.log("quoteBackup: "+quoteBackup.length);
		var y = quotes.indexOf(quoteElement);
		quotes.splice(y, 1);
	}
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);