import cardsImagesArray from "./cardsArray.js";

let cardsClicked = [];
let cardsClickedIndex = [];
const twoCards = 2;

function turnCard() {
    const cardIndex = this.getAttribute('data-index');
    cardsClicked.push(cardsImagesArray[cardIndex].name);
    cardsClickedIndex.push(cardIndex);
    this.setAttribute('src', cardsImagesArray[cardIndex].img);
    if (cardsClicked.length === twoCards) checkForMatches();
}

const first = 0;
const second = 1;
let allMatches = [];

function checkForMatches() {
    const cards = document.querySelectorAll('img');
    const firstClickedCardId = cardsClickedIndex[first];
    const secondClickedCardId = cardsClickedIndex[second];
    if(cardsClicked[first] === cardsClicked[second]) match(cards, firstClickedCardId, secondClickedCardId);
    else noMatch(cards, firstClickedCardId, secondClickedCardId);
    cardsClicked = [];
    cardsClickedIndex = [];
}
function match(cards, firstClicked, secondClicked){
    cards[firstClicked].classList.add('card-hit');
    cards[secondClicked].classList.add('card-hit');
    allMatches.push(firstClicked, secondClicked);
    if(allMatches.length === cardsImagesArray.length) youWin();
}
function noMatch(cards, firstClicked, secondClicked){
    cards[firstClicked].setAttribute('src', 'img/front.jpeg');
    cards[secondClicked].setAttribute('src', 'img/front.jpeg');
}

const winPlate = document.querySelector('.win-plate');
function youWin() {
    winPlate.style.animation = 'goDown forwards 1s 0.2s ease-in-out';
}

const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click', () => {
    cardsImagesArray.sort(() => 0.5 - Math.random());
    const cards = document.querySelectorAll('img');
    cards.forEach(card => {
        card.setAttribute('src', 'img/front.jpeg');
        card.classList.remove('card-hit');
    });
});
export default turnCard;