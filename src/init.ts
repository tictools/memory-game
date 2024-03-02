import { BoardController } from "./entities";
import { selectElementByDataId } from "./selectors";

export const init = (boardController: BoardController) => {
  parent.addEventListener("custom::card::updated", () => {
    const [firstIndex, secondIndex] = boardController.selectedIndexes();
    const card1 = selectElementByDataId(firstIndex);
    const card2 = selectElementByDataId(secondIndex);

    boardController.checkBoard(card1, card2);
  });
};
