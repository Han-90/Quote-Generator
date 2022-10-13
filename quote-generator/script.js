const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

function newQuote() {
    // Ich picke ein zufälliges Quote vom apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

// Get Quotes From API
async function getQuotes() {
    const apiURL = 'https: //jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }

    // On Load
    getQuotes();
}