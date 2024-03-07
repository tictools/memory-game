import JSConfetti from "js-confetti";

import { animals } from "./data";
import { BoardController } from "./entities";
import { sortCards } from "./helpers";
import { init } from "./init";
import { selectElementById } from "./selectors";

import "./styles.css";

const cardsCollection = sortCards([...animals, ...animals]);

document.addEventListener("DOMContentLoaded", () => {
  const app = selectElementById("#app"); // '!' assert not null

  const jsConfetti = new JSConfetti();
  const board = new BoardController(cardsCollection, jsConfetti);

  init(app!, cardsCollection, board);
});
