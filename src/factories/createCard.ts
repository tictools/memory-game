import { CardContent } from "../data";
import { BoardController } from "../entities";
import { flipCard } from "./helpers";

export const createCard = function (
  content: CardContent,
  index: number,
  cardsManager: BoardController
): HTMLDivElement {
  const card = document.createElement("div");
  card.textContent = "";
  card.classList.add("card", "card--hidden");
  card.dataset.id = index.toString();

  card.addEventListener("click", (event: MouseEvent) => {
    const targetElement = event.target as HTMLInputElement;
    flipCard(targetElement, content, cardsManager);
  });

  return card;
};
