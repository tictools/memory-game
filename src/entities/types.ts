export interface Card {
  get id(): number;
  get value(): string;
  toggleFlippedStatus(): void;
  createHTMLElement(): HTMLDivElement;
}

export interface Game {
  cards: Card[];
  match: number;
  flipCard(cardId: number): void;
  check(): boolean;
  canCheck(): boolean;
}

export interface GameUI {
  render(): void;
}
