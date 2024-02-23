import { Card } from "../data";

export const createCard = function (
  content: Card,
  index: number
): HTMLDivElement {
  const card = document.createElement("div");
  card.textContent = content;
  card.classList.add("card");
  card.dataset.id = index.toString();

  card.addEventListener("click", (event: MouseEvent) => {
    const targetElement = event.target as HTMLInputElement;

    console.log({
      target: targetElement.dataset,
      content,
    });
  });

  return card;
};
