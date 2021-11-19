import cardsImagesArray from "./cardsArray.js";

let cardsClicked = [];
let cardsClickedIndex = [];

function turnCard() {
    const cardIndex = this.getAttribute('data-index');
    cardsClicked.push(cardsImagesArray[cardIndex].name);
    cardsClickedIndex.push(cardIndex);
    this.setAttribute('src', cardsImagesArray[cardIndex].img);
    if (cardsClicked.length === 2) checkForMatches();
}

const first = 0;
const second = 1;

function checkForMatches() {
    const cards = document.querySelectorAll('img');
    const firstClickedCardId = cardsClickedIndex[first];
    const secondClickedCardId = cardsClickedIndex[second];
    if(cardsClicked[first] === cardsClicked[second]) match(cards, firstClickedCardId, secondClickedCardId);
    else noMatch(cards, firstClickedCardId, secondClickedCardId);
    cardsClicked = [];
    cardsClickedIndex = [];
}
function match(cards, first, second){
    cards[first].classList.add('card-hit');
    cards[second].classList.add('card-hit');
}
function noMatch(cards, first, second){
    cards[first].setAttribute('src', 'img/front.jpeg');
    cards[second].setAttribute('src', 'img/front.jpeg');
}

export default turnCard;