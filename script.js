let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let newQuote = document.querySelector("#new-quote");
let twitterBtn = document.querySelector("#twitter");
let copyBtn = document.querySelector("#copy");


// const url = "https://api.quotable.io/random";
const url = "https://type.fit/api/quotes";

let getQuote = () => {
    fetch(url)
        .then(response => response.json())
        .then(response =>  {
            const firstObject = response[Math.floor(Math.random()*response.length)];
            console.log(firstObject.text);
            console.log(firstObject.author);
            quote.innerText = firstObject.text;
         if(!firstObject.author) {
                    author.innerText = "- Anonymous";
                    
            } else author.innerText = "- " + firstObject.author;
            
        
        });
}

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText} ${author.innerText}`;
    window.open(tweetUrl, "_blank");
});

copyBtn.addEventListener("click", () => {
    // console.log("button was clicked");     
    navigator.clipboard
      .writeText(quote.innerText)
      .then(
              success => console.log("text copied"), 
              err => console.log("error copying text")
        );
});
    
    

window.addEventListener("load", getQuote);
newQuote.addEventListener("click", getQuote);