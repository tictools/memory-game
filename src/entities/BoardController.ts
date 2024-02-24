import { CardContent } from "../data";

export class BoardController {
  cards: CardContent[];
  selected: CardContent[];
  match: CardContent[];
  index: string[];

  constructor(initialValue: CardContent[]) {
    this.cards = initialValue;
    this.selected = [];
    this.match = [];
    this.index = [];
  }

  updateMatch(card: CardContent) {
    this.match.push(card);
  }

  hasMatch() {
    return this.cards.length / 2 === this.match.length;
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
}
