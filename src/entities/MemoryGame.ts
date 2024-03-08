import { MemoryCard } from "./MemoryCard";
import type { Card, Game } from "./types";

export class MemoryGame implements Game {
  private _flippedCards: Card[] = [];
  private _originalValues: string[] = [];
  private _deck: string[] = [];

  cards: Card[] = [];
  match: number = 0;

  constructor(initialValues: string[]) {
    this._originalValues = initialValues;
    this.initializeGame();
  }

  private initializeGame(): void {
    this.createDeck();
    this.cards = this._deck.map((value, index) => new MemoryCard(index, value));
  }

  private createDeck(): void {
    const fullDeck = [...this._originalValues, ...this._originalValues];
    this._deck = fullDeck.sort(() => 0.5 - Math.random());
  }

  flipCard(cardId: number): void {
    const selectedCard = this.cards[cardId];
    this.cards[cardId].toggleFlippedStatus();
    this.addToFlippedCards(selectedCard);
  }

  canCheck(): boolean {
    return this._flippedCards.length === 2;
  }

  check(): boolean {
    if (this.isMatch()) {
      this.updateMatch();
    } else {
      const { firstSelected, secondSelected } = this.flippedCards;

      this.cards[firstSelected.id].toggleFlippedStatus();
      this.cards[secondSelected.id].toggleFlippedStatus();
    }

    this.flushFlippedCards();

    return this.isGameComplete();
  }

  private addToFlippedCards(selectedCard: Card) {
    //TODO: extract only required data (value and id) to respect ISP
    this._flippedCards.push(selectedCard);
  }

  private flushFlippedCards() {
    this._flippedCards.length = 0;
  }

  private isMatch(): boolean {
    const { isSameContent, isSameIndex } = this.getMatchStatus();
    return isSameContent && !isSameIndex;
  }

  private getMatchStatus(): {
    isSameContent: boolean;
    isSameIndex: boolean;
  } {
    const { firstSelected, secondSelected } = this.flippedCards;

    const isSameContent = firstSelected.value === secondSelected.value;
    const isSameIndex = firstSelected.id === secondSelected.id;

    return { isSameContent, isSameIndex };
  }

  private get flippedCards(): {
    firstSelected: Card;
    secondSelected: Card;
  } {
    const [firstSelected, secondSelected] = this._flippedCards;
    return { firstSelected, secondSelected };
  }

  private updateMatch(): void {
    this.match++;
  }

  private isGameComplete(): boolean {
    return this.cards.length / 2 === this.match;
  }
}
