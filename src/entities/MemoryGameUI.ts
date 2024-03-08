import JSConfetti from "js-confetti";
import type { Game, GameUI } from "./types";

export class MemoryGameUI implements GameUI {
  private game: Game;
  private boardElement: HTMLDivElement;
  private containerElement: HTMLElement;
  private confetti: JSConfetti;

  constructor(
    game: Game,
    containerElement: HTMLElement,
    jsConfetti: JSConfetti
  ) {
    this.confetti = jsConfetti;
    this.game = game;
    this.containerElement = containerElement;
    this.boardElement = document.createElement("div");
    this.boardElement.classList.add("memory-board");
    this.containerElement.appendChild(this.boardElement);
  }

  render(): void {
    this.boardElement.innerHTML = "";

    this.game.cards.forEach((card) => {
      const cardElement = card.createHTMLElement();

      cardElement.addEventListener("click", () => {
        if (this.game.canCheck()) return;

        this.handleCardClick(card.id);
      });

      this.boardElement.appendChild(cardElement);
    });
  }

  private handleCardClick(cardId: number): void {
    this.game.flipCard(cardId);

    if (this.game.canCheck()) {
      this.debounceRender();
    } else {
      this.render();
    }
  }
  private renderAndDebounceCheck(ms: number) {
    this.render();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.game.check());
      }, ms);
    });
  }

  debounceRender() {
    this.renderAndDebounceCheck(1500).then((isGameComplete) => {
      this.render();
      isGameComplete && this.confetti.addConfetti();
    });
  }
}
