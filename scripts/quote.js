const Quotes = [{
        QuoteID: "1",
        QuoteText: "It’s not who I am underneath, but what I do that defines me.",
        Author: "Batman"
    },
    {
        QuoteID: "2",
        QuoteText: "He’s the hero Gotham deserves, but not the one it needs right now. So we’ll hunt him...Because he can take it...Because he’s not our hero. He’s a silent guardian, a watchful protector...A dark knight.",
        Author: "Jim Gordon"
    },
    {
        QuoteID: "3",
        QuoteText: "Do you know what is the greatest gift anyone can receive in his lifetime? The greatest gift we can receive is to have the chance, just once in our lives, to make a difference.",
        Author: "Doctor Strange"
    },
    {
        QuoteID: "4",
        QuoteText: "Life doesn’t give us purpose. We give life purpose.",
        Author: "The Flash"
    },
    {
        QuoteID: "5",
        QuoteText: "You gotta be one of the good guys son. 'Cause there's way too many of the bad.",
        Author: "The Preacher"
    },
    {
        QuoteID: "6",
        QuoteText: "You Either Die A Hero, Or You Live Long Enough To See Yourself Become The Villain.",
        Author: "Harvey Dent"
    },
    {
        QuoteID: "7",
        QuoteText: "You Really Put The ‘Fun’ In Funeral",
        Author: "Harley Quinn"
    },
]

const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
};

const placeQuote = () => {
    quote = randomQuote();
    const quoteElement = document.querySelector('.quote');
    quoteElement.innerHTML = quote.QuoteText;

};

document.addEventListener("DOMContentLoaded", function() {
    placeQuote();
});