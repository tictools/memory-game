import type { Card } from "./types";

export class MemoryCard implements Card {
  private _id: number;
  private isFlipped: boolean;
  private _value: string;

  constructor(id: number, value: string) {
    this._id = id;
    this._value = value;
    this.isFlipped = false;
  }

  get id(): number {
    return this._id;
  }

  get value() {
    return this._value;
  }
  createHTMLElement(): HTMLDivElement {
    const cardElement = document.createElement("div");
    cardElement.classList.add(
      "card",
      `${this.isFlipped ? "card--visible" : "card--hidden"}`
    );
    cardElement.dataset.cardId = this._id.toString();
    cardElement.textContent = this.isFlipped ? this._value : "";

    return cardElement;
  }

  toggleFlippedStatus(): void {
    this.isFlipped = !this.isFlipped;
  }
}
