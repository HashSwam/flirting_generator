// An array containing different flirting quotes
const quotes = [
    "I may not say this but I need you in life",
    "I can't turn 'water into wine' But I can turn 'you into mine'",
    "No new, It's still You",
    "I feel so alone without you",
    "Everything is fine, when you are mine...",
    "Eye contact then that little smile i want you can u be mine",
    "I may irritate you a lot. But believe me, I love you a lot.",
    "Eye contact then that little smile I want you. Can you be mine?",
    "I may irritate you a lot, but believe me, I love you a lot.",
    "In a world of chaos, your smile is my favorite refuge.",
    "If I were to rearrange the alphabet, I'd put U and I together.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a campfire? Because you're hot and I want s'more.",
    "I must be a snowflake, because I've fallen for you.",
    "If kisses were snowflakes, I'd send you a blizzard.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do you have a name, or can I call you mine?",
    "I must be a magician, because whenever I look at you, everyone else disappears.",
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "Are you a camera? Every time I look at you, I smile.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Can you take a picture with me? I want to prove that angels are real.",
    "If we were on a deserted island, I'd want to be stranded with you.",
    "You must be a campfire, because you're hot and I can't resist getting closer.",
    "Are you a map? Because I just got lost in your eyes."
];

// Get the HTML elements for the quote and button
const quoteText = document.getElementById('quoteText');
const generateButton = document.getElementById('generateButton');

// Add a click event listener to the button
generateButton.addEventListener('click', generateRandomQuote);

// Function to generate a random quote and display it
function generateRandomQuote() {
    // Generate a random index within the range of the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Set the text content of the quote element to the selected quote
    quoteText.textContent = quotes[randomIndex];
}
