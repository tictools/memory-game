import JSConfetti from "js-confetti";

import { animals } from "./data";
import { BoardController } from "./entities";
import { createCards, createMainHeading } from "./factories";
import { sortCards } from "./helpers";
import { init } from "./init";
import { selectElementById } from "./selectors";

import "./style.css";

const cardsCollection = sortCards([...animals, ...animals]);

document.addEventListener("DOMContentLoaded", () => {
  const app = selectElementById("#app"); // '!' assert not null

  const jsConfetti = new JSConfetti();
  const board = new BoardController(cardsCollection, jsConfetti);

  createMainHeading(app!); // '!' asserts that 'app' is not null or undefined
  createCards(app!, cardsCollection, board);

  init(board);
});
