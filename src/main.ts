import { animals } from "./data";
import { createBoard, createMainHeading } from "./factories";
import { sortCards } from "./helpers";
import { selectElementById } from "./selectors";
import "./style.css";

const cardsCollection = sortCards([...animals, ...animals]);

document.addEventListener("DOMContentLoaded", () => {
  const app = selectElementById("#app"); // '!' assert not null

  createMainHeading(app!); // '!' asserts that 'app' is not null or undefined
  createBoard(app!, cardsCollection);
});
