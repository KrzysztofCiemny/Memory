import cardsImagesArray from "./cardsArray.js";

let cardsClicked = [];
let cardsClickedIndex = [];

function turnCard() {
    const cardIndex = this.getAttribute('data-index');
    cardsClicked.push(cardsImagesArray[cardIndex].name);
    cardsClickedIndex.push(cardIndex);
    this.setAttribute('src', cardsImagesArray[cardIndex].img);
    // if (cardsClicked.length === 2) checkForMatches();
}
export default turnCard;