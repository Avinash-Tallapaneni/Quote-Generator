let quote = document.querySelectorAll("quote");
let author = document.querySelectorAll("author");
let newQuote = document.querySelectorAll("new-quote-btn");

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
	}
};
// const url = "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10";

let getQuote = () => {
    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10")
        .then(response => response.json())
        .then(response => console.log(response));
}

window.addEventListener("load",getQuote);