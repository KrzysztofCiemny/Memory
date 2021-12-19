import turnCard from "./turnCards.js";
import cards from "./main.js";

const winPlate = document.querySelector('.win-plate');

export default function playAgain() {
    setTimeout(flipBackAllCards, 1000);
    setTimeout(shuffle, 1500);
    winPlate.classList.toggle('goDown');
}

function flipBackAllCards() {
    cards.forEach(card => {
        card.classList.toggle('flip');
        card.addEventListener('click', turnCard);
        card.style.cursor = 'pointer';
    });
}

function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 18);
        card.style.order = randomPosition;
    })
}

