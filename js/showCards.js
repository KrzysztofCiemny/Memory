import cardsImagesArray from "./cardsArray.js";
import turnCard from "./turnCards.js"; 

const board = document.querySelector('.cards');

function showCards() {
    for (let i = 0; i < cardsImagesArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/front.jpeg');
        card.setAttribute('data-index', i);
        card.addEventListener('click', turnCard);
        board.appendChild(card);
    }
}


export default showCards;