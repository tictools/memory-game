import JSConfetti from "js-confetti";
import { CardContent } from "../data";

export class BoardController {
  cards: CardContent[];
  selected: CardContent[];
  match: number;
  index: string[];
  jsConfetti: JSConfetti;

  constructor(initialValue: CardContent[], jsConfetti: JSConfetti) {
    this.cards = initialValue;
    this.selected = [];
    this.match = 0;
    this.index = [];
    this.jsConfetti = jsConfetti;
  }

  updateMatch() {
    this.match++;
  }

  isFullMatch() {
    return this.cards.length / 2 === this.match;
  }

  selectedCards() {
    return this.selected;
  }

  canCheck() {
    return this.selected.length === 2;
  }

  isMatch() {
    const [firstSelected, secondSelected] = this.selectedCards();
    const [firstIndex, secondIndex] = this.selectedIndexes();

    return firstSelected === secondSelected && firstIndex !== secondIndex;
  }

  updateSelectedCards(card: CardContent) {
    this.selected.push(card);
  }

  resetSelectedCards() {
    this.selected.length = 0;
  }

  selectedIndexes() {
    return this.index;
  }

  updateSelectedIndexes(index: string) {
    this.index.push(index);
  }

  resetSelectedIndex() {
    this.index.length = 0;
  }

  checkMatch(card1: HTMLInputElement, card2: HTMLInputElement) {
    if (this.isMatch()) {
      this.updateMatch();
    } else {
      card1.classList.remove("card--visible");
      card1.classList.add("card--hidden");

      card2.classList.remove("card--visible");
      card2.classList.add("card--hidden");
    }

    this.resetSelectedCards();
    this.resetSelectedIndex();

    if (this.isFullMatch()) {
      this.jsConfetti.addConfetti();
    }
  }

  checkBoard(card1: HTMLInputElement, card2: HTMLInputElement) {
    if (this.canCheck()) {
      setTimeout(() => this.checkMatch(card1, card2), 500);
    }
  }
}
