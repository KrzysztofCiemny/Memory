import addingPlayAgainEvent from "./playAgain.js";
import turnCard from "./turnCards.js";

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener('click', turnCard));

addingPlayAgainEvent();




