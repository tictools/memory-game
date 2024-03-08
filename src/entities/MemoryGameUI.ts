import JSConfetti from "js-confetti";
import type { Game, GameUI } from "./types";

export class MemoryGameUI implements GameUI {
  private DELAY: number = 500;
  private _game: Game;
  private _boardElement: HTMLDivElement;
  private _containerElement: HTMLElement;
  private _confetti: JSConfetti;

  constructor(
    game: Game,
    containerElement: HTMLElement,
    jsConfetti: JSConfetti
  ) {
    this._confetti = jsConfetti;
    this._game = game;
    this._containerElement = containerElement;

    this._boardElement = document.createElement("div");
    this.initiliazeBoardElement();
  }

  render(): void {
    this._boardElement.innerHTML = "";

    this._game.cards.forEach((card) => {
      const cardElement = card.createHTMLElement();

      cardElement.addEventListener("click", () => {
        if (this._game.canCheck()) return;

        this.handleCardClick(card.id);
      });

      this._boardElement.appendChild(cardElement);
    });
  }

  debounceRender() {
    this.renderAndDebounceCheck(this.DELAY).then((isGameComplete) => {
      this.render();
      isGameComplete && this._confetti.addConfetti();
    });
  }

  private initiliazeBoardElement() {
    this._boardElement.classList.add("memory-board");
    this._containerElement.appendChild(this._boardElement);
  }

  private handleCardClick(cardId: number): void {
    this._game.flipCard(cardId);
    this.handleRender();
  }

  private handleRender() {
    if (this._game.canCheck()) {
      this.debounceRender();
    } else {
      this.render();
    }
  }
  
  private renderAndDebounceCheck(ms: number) {
    this.render();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._game.check());
      }, ms);
    });
  }
}
