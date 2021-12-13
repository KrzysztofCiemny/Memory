import cardsImagesArray from "./cardsArray.js";

let cardsClickedName = [];
let cardsClicked = [];
let lockBoard = false;
const twoCards = 2;

export default function turnCard() {
    if(lockBoard) return;
    const card = this;
    card.removeEventListener('click', turnCard); 
    card.style.cursor = 'auto';
    cardsClicked.push(card);

    const cardIndex = card.getAttribute('data-index');
    cardsClickedName.push(cardsImagesArray[cardIndex].name);
    card.setAttribute('src', cardsImagesArray[cardIndex].img);
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
        setTimeout(noMatch, 1500);
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
