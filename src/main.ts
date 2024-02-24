import { animals } from "./data";
import { createBoard, createMainHeading } from "./factories";
import { sortCards } from "./helpers/sortCards";
import "./style.css";

const cardsCollection = sortCards([...animals, ...animals]);

document.addEventListener("DOMContentLoaded", () => {
  const app = document!.querySelector<HTMLDivElement>("#app"); // '!' assert not null

  createMainHeading(app!); // '!' asserts that 'app' is not null or undefined
  createBoard(app!, cardsCollection);
});
