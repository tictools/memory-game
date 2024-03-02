import { CardContent } from "../data";
import { BoardController } from "../entities";
import { createCard } from "./createCard";

export const createBoard = (
  parent: HTMLDivElement,
  elementsCollection: CardContent[],
  board: BoardController
) => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  elementsCollection.forEach((element, index) => {
    const card = createCard(element, index, board);
    grid.appendChild(card);
  });

  parent.appendChild(grid);
};
