import cardsImagesArray from "./cardsArray.js";

let cardsClickedName = [];
let cardsClicked = [];
let lockBoard = false;
const twoCards = 2;

export default function turnCard() {
    if(lockBoard) return;

    const clickedCard = this;
    clickedCard.removeEventListener('click', turnCard); 
    clickedCard.style.cursor = 'auto';
    clickedCard.classList.toggle('flip');
    cardsClicked.push(clickedCard);
    
    const cardIndex = clickedCard.getAttribute('data-index');
    cardsClickedName.push(cardsImagesArray[cardIndex].name);
    if (cardsClicked.length === twoCards) {
        checkForMatches();
    };
}

const first = 0;
const second = 1;

function checkForMatches() {
    if (cardsClickedName[first] === cardsClickedName[second]) {
        match();
    }
    else {
        lockBoard = true;
        setTimeout(noMatch, 1200);
    }
    cardsClickedName = [];
}

let allMatches = [];
const halfOfCards = 2;

function match() {
    allMatches.push(cardsClicked);
    if (allMatches.length === cardsImagesArray.length / halfOfCards) {
        youWin();
    }
    cardsClicked = [];
}

function noMatch() {
    cardsClicked.forEach(card => {
        card.classList.toggle('flip');
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