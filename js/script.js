let apiQuotes = [];
// getting different quotes
function newQuotes() {
    // pick a random quotes from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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