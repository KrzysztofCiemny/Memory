import cardsImagesArray from "./cardsArray.js";
import turnCard from "./turnCards.js";

const playAgainButton = document.querySelector('.play-again');
const winPlate = document.querySelector('.win-plate');

export default function addingPlayAgainEvent() {
    playAgainButton.addEventListener('click', playAgain);
}

function playAgain() {
    cardsImagesArray.sort(() => 0.5 - Math.random());
    const cards = document.querySelectorAll('img');
    cards.forEach(card => {
        card.setAttribute('src', 'img/front.jpeg');
        card.addEventListener('click', turnCard);
        card.style.cursor = 'pointer';
    });
    winPlate.classList.toggle('goDown');
}