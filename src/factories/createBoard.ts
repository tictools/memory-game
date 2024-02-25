import JSConfetti from "js-confetti";

import { CardContent } from "../data";
import { BoardController } from "../entities";
import { selectElementByDataId } from "../selectors";
import { createCard } from "./createCard";

export const createBoard = (
  parent: HTMLDivElement,
  elementsCollection: CardContent[]
) => {
  const jsConfetti = new JSConfetti();
  const board = new BoardController(elementsCollection, jsConfetti);

  const grid = document.createElement("div");
  grid.classList.add("grid");

  elementsCollection.forEach((element, index) => {
    const card = createCard(element, index, board);
    grid.appendChild(card);
  });

  parent.appendChild(grid);

  parent.addEventListener("custom::card::updated", () => {
    const [firstIndex, secondIndex] = board.selectedIndexes();
    const card1 = selectElementByDataId(firstIndex);
    const card2 = selectElementByDataId(secondIndex);

    board.checkBoard(card1, card2);
  });
};
