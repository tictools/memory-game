import { MemoryCard } from "./MemoryCard";
import type { Card, Game } from "./types";

export class MemoryGame implements Game {
  private flippedCards: Card[] = [];
  private originalValues: string[] = [];
  private deck: string[] = [];
  cards: Card[] = [];
  match: number = 0;

  constructor(initialValues: string[]) {
    this.originalValues = initialValues;
    this.initializeGame();
  }

  private initializeGame(): void {
    this.createDeck();
    this.cards = this.deck.map((value, index) => new MemoryCard(index, value));
  }

  private createDeck(): void {
    const fullDeck = [...this.originalValues, ...this.originalValues];
    this.deck = fullDeck.sort(() => 0.5 - Math.random());
  }

  flipCard(cardId: number): void {
    // Implement card flipping logic
    // Update the isFlipped property of the selected card
    // Handle logic for tracking flipped cards and checking for matches
    const selectedCard = this.cards[cardId];
    this.cards[cardId].toggleFlippedStatus();
    this.addToFlippedCards(selectedCard);
  }

  canCheck(): boolean {
    return this.flippedCards.length === 2;
  }

  check(): boolean {
    if (this.isMatch()) {
      debugger;
      this.updateMatch();
    } else {
      debugger;
      const { firstSelected, secondSelected } = this.getFlippedCards();

      this.cards[firstSelected.id].toggleFlippedStatus();
      this.cards[secondSelected.id].toggleFlippedStatus();
    }

    if (this.isGameComplete()) {
      console.log("COMPLETE!");
    }

    this.flushFlippedCards();

    return this.isGameComplete();
  }

  private addToFlippedCards(selectedCard: Card) {
    this.flippedCards.push(selectedCard);
  }

  private flushFlippedCards() {
    this.flippedCards.length = 0;
  }

  private isMatch(): boolean {
    const { isSameContent, isSameIndex } = this.getMatchStatus();

    return isSameContent && !isSameIndex;
  }

  private getMatchStatus(): {
    isSameContent: boolean;
    isSameIndex: boolean;
  } {
    const { firstSelected, secondSelected } = this.getFlippedCards();

    const isSameContent = firstSelected.value === secondSelected.value;
    const isSameIndex = firstSelected.id === secondSelected.id;

    return { isSameContent, isSameIndex };
  }

  private getFlippedCards(): {
    firstSelected: Card;
    secondSelected: Card;
  } {
    const [firstSelected, secondSelected] = this.flippedCards;
    return { firstSelected, secondSelected };
  }

  private updateMatch(): void {
    this.match++;
  }

  private isGameComplete(): boolean {
    return this.cards.length / 2 === this.match;
  }
}
