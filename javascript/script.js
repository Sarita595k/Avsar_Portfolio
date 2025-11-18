// script for greetings 

const greetingsContainer = document.getElementById("greetings-container")

const greetings = [
    'Hello',
    'Hola',
    'Bonjour',
    'Hallo',
    'Ola',
    'Namaskāra',
    'Allianchu',
    'سلام',
];

let currentIndex = 0;

function updateText() {
    greetingsContainer.textContent = greetings[currentIndex]
    currentIndex = (currentIndex + 1) % greetings.length;
};

setInterval(updateText, 1000);

updateText();

// let text=  "Thanks for Watching";
// let result=text.repeat(5);

//     document.getElementsByClassName("overlay-text").innerhtml=result

//  bottom arrow
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector("html").style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = 'unset';
    }, timeout);

});