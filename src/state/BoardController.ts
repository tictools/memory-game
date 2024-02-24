import { Card } from "../data";

export class BoardController {
  cards: Card[];
  selected: Card[];
  match: Card[];
  index: string[];

  constructor(initialValue: Card[]) {
    this.cards = initialValue;
    this.selected = [];
    this.match = [];
    this.index = [];
  }

  setMatch(card: Card) {
    this.match.push(card);
  }

  hasMatch() {
    return this.cards.length / 2 === this.match.length;
  }

  selectedCards() {
    return this.selected;
  }

  updateSelectedCards(card: Card) {
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
}
