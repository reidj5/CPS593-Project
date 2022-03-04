import Quotes from '../data/quotes.js';


const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
};

const placeQuote = () => {
    const quote = randomQuote();
    const quoteElement = document.querySelector('.quote');
    quoteElement.innerHTML = `<p class="quote-text">${quote.QuoteText}</p> <p class="quote-author">- ${quote.Author}</p>`;

};

document.addEventListener("DOMContentLoaded", function() {
    placeQuote();
});