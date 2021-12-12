import cardsImagesArray from "./cardsArray.js";

let cardsClickedName = [];
let cardsClickedIndex = [];
let cardsClicked = [];
const twoCards = 2;

function turnCard() {
    const card = this;
    card.removeEventListener('click', turnCard);
    card.style.cursor = 'auto';
    cardsClicked.push(card);

    const cardIndex = card.getAttribute('data-index');
    cardsClickedName.push(cardsImagesArray[cardIndex].name);
    cardsClickedIndex.push(cardIndex);
    card.setAttribute('src', cardsImagesArray[cardIndex].img);
    if (cardsClicked.length === twoCards) {
        checkForMatches();
    };
}

const first = 0;
const second = 1;
let allMatches = [];

function checkForMatches() {
    const cards = document.querySelectorAll('img');
    const firstClickedCardId = cardsClickedIndex[first];
    const secondClickedCardId = cardsClickedIndex[second];
    if (cardsClickedName[first] === cardsClickedName[second]) {
        match(firstClickedCardId, secondClickedCardId);
    }
    else {
        noMatch(cards, firstClickedCardId, secondClickedCardId);
    }
    cardsClickedName = [];
    cardsClickedIndex = [];
    cardsClicked = [];
}
function match(firstClicked, secondClicked) {
    allMatches.push(firstClicked, secondClicked);
    if (allMatches.length === cardsImagesArray.length) {
        youWin();
    }
}
function noMatch(cards, firstClicked, secondClicked) {
    setTimeout(() => {
        cards[firstClicked].setAttribute('src', 'img/front.jpeg');
        cards[secondClicked].setAttribute('src', 'img/front.jpeg');
        cardsClicked.forEach(card => {
            card.addEventListener('click', turnCard);
            card.style.cursor = 'pointer';
        });
    }, 1500);
}

const winPlate = document.querySelector('.win-plate');
function youWin() {
    winPlate.classList.toggle('goDown');
    allMatches = [];
}

const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click', () => {
    cardsImagesArray.sort(() => 0.5 - Math.random());
    const cards = document.querySelectorAll('img');
    cards.forEach(card => {
        card.setAttribute('src', 'img/front.jpeg');
        card.addEventListener('click', turnCard);
        card.style.cursor = 'pointer';
    });
    winPlate.classList.toggle('goDown');
});
export default turnCard;