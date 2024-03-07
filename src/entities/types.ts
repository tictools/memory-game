export interface Card {
  id: number;
  isFlipped: boolean;
  value: string;
  toggleFlippedStatus(): void;
  createHTMLElement(): HTMLDivElement;
}

export interface Game {
  cards: Card[];
  match: number;
  flipCard(cardId: number): void;
  check(): boolean;
  canCheck(): boolean;
  // updateMatch(): void;
  // isGameComplete(): boolean;
}

export interface GameUI {
  render(): void;
}
