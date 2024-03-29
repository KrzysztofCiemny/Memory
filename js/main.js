import playAgain from "./playAgain.js";
import turnCard from "./turnCards.js";

document.addEventListener('DOMContentLoaded', () => {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 18);
        card.style.order = randomPosition;
    });
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener('click', turnCard));

const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click', playAgain);

export default cards;
