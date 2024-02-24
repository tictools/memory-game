import JSConfetti from "js-confetti";

import { Card } from "../data";
import { BoardController } from "../state";
import { createCard } from "./createCard";

export const createBoard = (
  parent: HTMLDivElement,
  elementsCollection: Card[]
) => {
  const cardsManager = new BoardController(elementsCollection);

  const grid = document.createElement("div");
  grid.classList.add("grid");

  document.addEventListener("custom::card::updated", (event) => {
    const { selectedIndex } = (<CustomEvent>event).detail;

    const selectedCards = cardsManager.selectedCards();
    const selectedIndexes = cardsManager.selectedIndexes();

    function checkMatch() {
      if (
        selectedCards[0] === selectedCards[1] &&
        selectedIndexes[0] !== selectedIndexes[1]
      ) {
        debugger;
        cardsManager.setMatch(elementsCollection[selectedIndex]);
      } else {
        const card1 = document.querySelector(
          `div[data-id="${selectedIndexes[0]}"]`
        ) as HTMLInputElement;

        const card2 = document.querySelector(
          `div[data-id="${selectedIndexes[1]}"]`
        ) as HTMLInputElement;

        card1.classList.remove("card--visible");
        card1.classList.add("card--hidden");

        card2.classList.remove("card--visible");
        card2.classList.add("card--hidden");
      }

      cardsManager.resetSelectedCards();
      cardsManager.resetSelectedIndex();

      if (cardsManager.hasMatch()) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
    }

    if (selectedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  });

  elementsCollection.forEach((element, index) => {
    const card = createCard(element, index, cardsManager);
    grid.appendChild(card);
  });

  parent.appendChild(grid);
};
