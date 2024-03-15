const quotes=[
    {
        quote: "Many would be cowards if they had courage enough.",
        author: " - Thomas Fuller",
    },
    {
        quote: "Life is not fair get used to it.",
        author: " - Bill Gates",
    },
    {
        quote: "The moment of victory is much too short to live for that and nothing else.",
        author: " - Martina Navratilova",
    },
    {
        quote: "The great aim of education is not knowledge but action.",
        author: " - Herbert Spencer",
    },
    {
        quote: "Education is what survives when what has been learned has been forgotten.",
        author: " - B. F. Skinner",
    },
    {
        quote: "Dream as if you'll live forever. Live as if you'll die today.",
        author: " - James Dean",
    },
    {
        quote: "I wasted time, and now doth time waste me.",
        author: " - William Shakespeare",
    },
    {
        quote: "When you stare into the abyss the abyss stares back at you.",
        author: " - Friedrich Nietzsche",
    },
    {
        quote: "Whatever does not destroy me makes me stronger.",
        author: " - Friedrich Nietzsche",
    },
    {
        quote: "You create your opportunities by asking for them.",
        author: " - Patty Hansen",
    },
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;