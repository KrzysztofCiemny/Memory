import cardsImagesArray from "./cardsArray.js";
import turnCard from "./turnCards.js";

const winPlate = document.querySelector('.win-plate');
const cards = document.querySelectorAll('.card');

export default function playAgain() {
    cardsImagesArray.sort(() => 0.5 - Math.random());
    setTimeout(flipBackAllCards, 1000);
    winPlate.classList.toggle('goDown');
}

function flipBackAllCards() {
    cards.forEach(card => {
        card.classList.toggle('flip');
        card.addEventListener('click', turnCard);
        card.style.cursor = 'pointer';
    });
}