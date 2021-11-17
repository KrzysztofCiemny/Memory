import cardsImagesArray from "./cardsArray.js";

const board = document.querySelector('.cards');
console.log(cardsImagesArray);

function showCards () {
    for(let i=0; i<cardsImagesArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'img/front.jpeg');
        card.setAttribute('data-index', i);
        // card.addEventListener('click', turnCard);
        board.appendChild(card);
    }
}
export default showCards;