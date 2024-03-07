import JSConfetti from "js-confetti";

import { animals } from "./data";
import { MemoryGame, MemoryGameUI } from "./entities";
import { selectElementById } from "./selectors";

import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const app = selectElementById("#app"); // '!' assert not null

  const jsConfetti = new JSConfetti();
  const memoryGame = new MemoryGame(animals);
  const memoryGameUI = new MemoryGameUI(memoryGame, app!, jsConfetti);

  memoryGameUI.render();
});
