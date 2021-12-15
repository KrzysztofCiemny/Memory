import playAgain from "./playAgain.js";
import turnCard from "./turnCards.js";

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener('click', turnCard));

const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click', playAgain);






