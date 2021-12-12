import cardsImagesArray from "./cardsArray.js";

let cardsClickedName = [];
let cardsClickedIndex = [];
let cardsClicked = [];
const twoCards = 2;
let lockBoard = false;

function turnCard() {
    if(lockBoard) return;
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
    const firstClickedCardId = cardsClickedIndex[first];
    const secondClickedCardId = cardsClickedIndex[second];
    if (cardsClickedName[first] === cardsClickedName[second]) {
        match(firstClickedCardId, secondClickedCardId); 
    }
    else {
        lockBoard = true;
        setTimeout(noMatch, 1500);
    }
    cardsClickedName = [];
    cardsClickedIndex = [];
}
function match(firstClicked, secondClicked) {
    allMatches.push(firstClicked, secondClicked);
    if (allMatches.length === cardsImagesArray.length) {
        youWin();
    }
    cardsClicked = [];
}
function noMatch() {
    cardsClicked.forEach(card => {
        card.setAttribute('src', 'img/front.jpeg');
        card.addEventListener('click', turnCard);
        card.style.cursor = 'pointer';
    });
    cardsClicked = [];
    lockBoard = false;
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