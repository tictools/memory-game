import { BoardController } from "../../entities";
import { updateSelectedCardEventFactory } from "../../events";

export function flipCard(
  element: HTMLInputElement,
  cardContent: string,
  cardsManager: BoardController
) {
  const selectedIndex = element.dataset.id as string;

  const updateSelectedCardEvent = updateSelectedCardEventFactory();

  element.textContent = cardContent;
  element.classList.remove("card--hidden");
  element.classList.add("card--visible");

  cardsManager.updateSelectedCards(cardContent);
  cardsManager.updateSelectedIndexes(selectedIndex);

  element.dispatchEvent(updateSelectedCardEvent);
}
