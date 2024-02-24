import { Card } from "../data";
import { BoardController } from "../state";

export interface CardUpdatedEventData {
  selectedIndex: string;
}

const updateSelectedCardEventFactory = ({
  selectedIndex,
}: {
  selectedIndex: string;
}) => {
  const updateSelectedCardEvent = new CustomEvent<CardUpdatedEventData>(
    "custom::card::updated",
    {
      bubbles: true,
      cancelable: true,
      detail: { selectedIndex },
    } as CustomEventInit
  );

  return updateSelectedCardEvent;
};

function flipCard(
  element: HTMLInputElement,
  cardContent: string,
  cardsManager: BoardController
) {
  const selectedIndex = element.dataset.id as string;

  const updateSelectedCardEvent = updateSelectedCardEventFactory({
    selectedIndex,
  });

  element.textContent = cardContent;
  element.classList.remove("card--hidden");
  element.classList.add("card--visible");

  cardsManager.updateSelectedCards(cardContent);
  cardsManager.updateSelectedIndexes(selectedIndex);

  element.dispatchEvent(updateSelectedCardEvent);
}

export const createCard = function (
  content: Card,
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
