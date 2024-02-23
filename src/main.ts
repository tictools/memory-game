import { animals } from "./data";
import { createBoard, createMainHeading } from "./factories";
import { sortCards } from "./helpers/sortCards";
import "./style.css";

const app = document!.querySelector<HTMLDivElement>("#app"); // '!' assert not null

createMainHeading(app!); // '!' asserts that 'app' is not null or undefined

const cardsCollection = sortCards([...animals, ...animals]);
createBoard(app!, cardsCollection);
