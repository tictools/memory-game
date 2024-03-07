import { CardContent } from "../data";
import { BoardController } from "../entities";
import { createCard } from "./createCard";

export const createCards = (
  parent: HTMLDivElement,
  elementsCollection: CardContent[],
  boardController: BoardController
) => {
  const grid = document.createElement("div");
  grid.classList.add("memory-board");

  elementsCollection.forEach((element, index) => {
    const card = createCard(element, index, boardController);
    grid.appendChild(card);
  });

  parent.appendChild(grid);
};
