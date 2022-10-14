const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];
// Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        // if statement das ! steht für einen Javascript Operator "logical NOT". Das heißt falls ein Quote keinen Autor hat, zeige Unknown.
        authorText.textContent = 'Unknown';
    } else {
        // ansonsten zeige mir den Autor
        authorText.textContent = quote.author;
    }
    // Überprüfe Quote länge mit größer als um zu bestimmen wie der Quote ausgespielt werden soll
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
        // Falls der Quote mehr als 120 Zeichen hat füge ihm die CSS Klasse "long-quote" hinzu ansonsten entferne diese
        // Die Klasse "long-Quote" vergrößert meine Schriftgröße um 2rem --- siehe style.css
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;


}

// Get Quotes From API
async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
    //  Tweet Quote
    function tweetQuote() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
        window.open(twitterUrl, '_blank');
    }

    // Event Listeners
    newQuoteBtn.addEventListener('click', newQuote);
    twitterBtn.addEventListener('click', tweetQuote);
} // On Load
getQuotes();