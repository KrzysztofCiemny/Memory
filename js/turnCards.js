import cardsImagesArray from "./cardsArray";

let cardsClicked = [];
let cardsClickedIndex = [];

function turnCard() {
    const cardIndex = this.getAttribute('data-index');
    cardsClicked.push(cardsImagesArray[cardIndex].name);
    cardsClickedIndex.push(cardIndex);
    this.setAttribute('src', cardsImagesArray[cardIndex].img);
}
export default turnCard;