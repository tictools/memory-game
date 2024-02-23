import { Card } from "../data";
import { createCard } from "./createCard";

export const createBoard = (
  parent: HTMLDivElement,
  elementsCollection: Card[]
) => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  elementsCollection.forEach((element, index) => {
    const card = createCard(element, index);
    grid.appendChild(card);
  });

  parent.appendChild(grid);
};
