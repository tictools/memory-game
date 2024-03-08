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
  reset(): void;
}

export interface GameUI {
  render(): void;
}

export type FlippedCardData = {
  id: number;
  value: string;
};
