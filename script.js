let quote = document.getElementById("quote");
let author = document.getElementById("author");
let newQuote = document.getElementById("new-quote");


// const url = "https://api.quotable.io/random";
const url = "https://type.fit/api/quotes";

let getQuote = () => {
    fetch(url)
        .then(response => response.json())
        .then(response =>  {
            const firstObject = response[Math.floor(Math.random()*1500)];
            console.log(firstObject.text);
            console.log(firstObject.author);
            quote.innerText = firstObject.text;
            author.innerText = firstObject.author;
        });
}


window.addEventListener("load", getQuote);
newQuote.addEventListener("click", getQuote);