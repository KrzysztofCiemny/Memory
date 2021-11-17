import cardsImagesArray from "./cardsArray.js";

function showCards () {
    for(let i=0; i<cardsImagesArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'img/front.jpeg');
        card.setAttribute('data-index', i);

    }
}