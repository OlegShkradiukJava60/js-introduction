// References to DOM elements
const inputWordElem = document.querySelector(".word-input");
const coloredLettersElem = document.querySelector(".colored-letters");
let letterElems;

//words
const words = [
    { div: "A common block-level element in HTML" },
    { span: "An inline container in HTML" },
    { class: "A reusable CSS selector applied to elements" },
    { margin: "Space outside the element's border" },
    { padding: "Space between content and border" },
    { display: "CSS property that controls box behavior" },
    { color: "CSS property for text color" },
    { background: "CSS property for filling element area" },
    { button: "An HTML element used to trigger actions" },
    { nav: "HTML5 semantic element for navigation links" },
    { footer: "HTML5 semantic tag for the bottom section" },
    { header: "HTML5 semantic tag for the top section" },
    { border: "CSS property that draws a line around element" },
];


//global variables
let selectedWord = "";
let displayedWord = [];
let remainingAttempts = 0;
let maxLetterInputs = 0;

// links 
const definitionElem = document.getElementById("definition");
const wordDisplayElem = document.getElementById("word-display");
const letterInputElem = document.getElementById("letter-input");
const wordInputElem = document.getElementById("word-input");
const attemptsElem = document.getElementById("attempts");
const gameMessageElem = document.getElementById("game-message");
const guessButton = document.getElementById("guess-button");
const remainingLetterCountElem = document.getElementById("remaining-letter-count");
const playAgainButton = document.getElementById("play-again");

function startGame() {
    const randomEntry = words[Math.floor(Math.random() * words.length)];
    selectedWord = Object.keys(randomEntry)[0];
    displayedWord = Array(selectedWord.length).fill("_");

    maxLetterInputs = Math.max(1, Math.ceil(selectedWord.length * 0.3));
    remainingAttempts = Math.max(1, Math.ceil(selectedWord.length * 1));

    definitionElem.textContent = randomEntry[selectedWord];
    wordDisplayElem.textContent = displayedWord.join(" ");
    attemptsElem.textContent = remainingAttempts;
    updateLetterCount();


    letterInputElem.value = "";
    wordInputElem.value = "";
    wordInputElem.readOnly = true;
    letterInputElem.disabled = false;
    gameMessageElem.textContent = "";
    guessButton.disabled = true;
    playAgainButton.style.display = "none";
}

//Shows how many letters are left
function updateLetterCount() {
    remainingLetterCountElem.textContent = `Remaining letters you can input: ${maxLetterInputs}`;
}
//Processing single letter input
letterInputElem.addEventListener("input", () => {
    if (remainingAttempts <= 0) {
        gameMessageElem.textContent = "attempts are over, try to guess the word!!!";
        letterInputElem.disabled = true;
        wordInputElem.readOnly = false;
        guessButton.disabled = false;
        return;
    }

    //Checking the numbers are correct
    const letter = letterInputElem.value.toLowerCase();
    if (!letter) return;
    let correct = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i].toLowerCase() === letter) {
            displayedWord[i] = selectedWord[i];
            correct = true;
        }
    }

    //Update after try
    remainingAttempts--;
    maxLetterInputs = Math.max(0, maxLetterInputs - 1);
    updateLetterCount();
    wordDisplayElem.textContent = displayedWord.join(" ");
    attemptsElem.textContent = remainingAttempts;

    //Checking victory or defeat
    if (!displayedWord.includes("_")) {
        gameMessageElem.textContent = "🎉 You guessed it!";
        letterInputElem.disabled = true;
        wordInputElem.readOnly = true;
        guessButton.disabled = true;
        playAgainButton.style.display = "block";
    } else if (remainingAttempts === 0 || maxLetterInputs === 0) {
        gameMessageElem.textContent = "❌ No more guesses! Try the full word.";
        letterInputElem.disabled = true;
        wordInputElem.readOnly = false;
        guessButton.disabled = false;
    }

    letterInputElem.value = "";
});


//Button "Guess the whole word" 

guessButton.addEventListener("click", () => {
    const guess = wordInputElem.value.trim().toLowerCase();
    if (!guess) return;

    if (guess === selectedWord.toLowerCase()) {
        gameMessageElem.textContent = " Correct! You won!";
        displayedWord = selectedWord.split('');
        wordDisplayElem.textContent = displayedWord.join(" ");
    } else {
        gameMessageElem.textContent = `Wrong! The correct word was: ${selectedWord}`;
    }

    wordInputElem.readOnly = true;
    guessButton.disabled = true;
    playAgainButton.style.display = "block";
});

playAgainButton.addEventListener("click", startGame);

document.addEventListener('DOMContentLoaded', startGame);