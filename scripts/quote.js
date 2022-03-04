import Quotes from '../data/quotes.js';


const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
};

const placeQuote = () => {
    const quote = randomQuote();
    const quoteElement = document.querySelector('.quote');
    quoteElement.innerHTML = quote.QuoteText;

};

document.addEventListener("DOMContentLoaded", function() {
    placeQuote();
});