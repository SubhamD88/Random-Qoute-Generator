
//var tweetButton = document.getElementById("tweet-share");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteButton = document.getElementById("button");
const apiUrl =[ "https://api.quotable.io/random",  "https://api.quotable.io/random?tags=technology", "https://api.quotable.io/random?tags=history" ];

async function getQuote(url){
const response = await fetch(url);
var data = await response.json();
quote.innerHTML = data.content;
author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "    ---- by " + author.innerHTML, "Tweet Window", "width=600, height: 500px");
}
