import type { Card } from "./types";

export class MemoryCard implements Card {
  id: number;
  isFlipped: boolean;
  value: string;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
    this.isFlipped = false;
  }

  createHTMLElement(): HTMLDivElement {
    const cardElement = document.createElement("div");
    cardElement.classList.add(
      "card",
      `${this.isFlipped ? "card--visible" : "card--hidden"}`
    );
    cardElement.dataset.cardId = this.id.toString();
    cardElement.textContent = this.isFlipped ? this.value : "";

    // cardElement.addEventListener("click", () => {
    //   Handle card click event (flip the card)
    //   You may want to delegate this to the MemoryGame instance
    // });

    return cardElement;
  }

  toggleFlippedStatus(): void {
    this.isFlipped = !this.isFlipped;
  }
}
