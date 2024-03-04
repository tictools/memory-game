import { CardContent } from "./data";
import { BoardController } from "./entities";
import { createCards } from "./factories";
import { selectElementByDataId } from "./selectors";

export const init = (
  parent: HTMLDivElement,
  elementsCollection: CardContent[],
  boardController: BoardController
) => {
  createCards(parent, elementsCollection, boardController);

  parent.addEventListener("custom::card::updated", () => {
    const [firstIndex, secondIndex] = boardController.selectedIndexes();
    const card1 = selectElementByDataId(firstIndex);
    const card2 = selectElementByDataId(secondIndex);

    boardController.checkBoard(card1, card2);
  });
};
