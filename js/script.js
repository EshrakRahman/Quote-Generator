// query selector
const quotesTextElm = document.getElementById("quote");
const quoteAuthorElm = document.getElementById("author");
const newQuoteBtnElm = document.getElementById("new-quote");
const twitterBtnElm = document.querySelector(".twitter-button");
const loaderElm = document.getElementById("loader");
const quoteContainer = document.getElementById("quotes-container");


let apiQuotes = [];


// loading
function loading() {
    quoteContainer.hidden = true;
    loaderElm.hidden = false;
}
// hide loading
function complete() {
    quoteContainer.hidden = false;
    loaderElm.hidden = true;
}
// getting different quotes
function newQuotes() {
    loading();
    // pick a random quotes from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // checking if author name is null then replace it with unknown
    if (quote.author === null){
        quoteAuthorElm.textContent = "Unknown";
    } else {
        quoteAuthorElm.textContent = quote.author;
    }
    // if the text length of quotes bigger then resize the font size
    if (quote.text.length > 120){
        quotesTextElm.classList.add('long-quote');
    }else {
        quotesTextElm.classList.remove('long-quote');
    }
    // set the quote text and hide the loader
    quotesTextElm.textContent = quote.text;
    complete();
}

// get Quotes from api
async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    }catch (error){
    // catching error
    }
}

// tweet quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotesTextElm.textContent} - ${quoteAuthorElm.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listener
newQuoteBtnElm.addEventListener('click', newQuotes);
twitterBtnElm.addEventListener('click', tweetQuote);

// On load
getQuotes();