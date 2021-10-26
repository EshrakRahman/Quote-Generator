// query selector
const quotesTextElm = document.getElementById("quote");
const quoteAuthorElm = document.getElementById("author");
const newQuoteBtnElm = document.getElementById("new-quote");
const twitterBtnElm = document.getElementsByClassName("twitter-button");




let apiQuotes = [];

// getting different quotes
function newQuotes() {
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
    quotesTextElm.textContent = quote.text;
}

// get Quotes from api
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    }catch (error){
    // catching error
    }
}

// On load
getQuotes();