import { BoardController } from "./entities";
import { selectElementByDataId } from "./selectors";

export const init = (board: BoardController) => {
  parent.addEventListener("custom::card::updated", () => {
    const [firstIndex, secondIndex] = board.selectedIndexes();
    const card1 = selectElementByDataId(firstIndex);
    const card2 = selectElementByDataId(secondIndex);

    board.checkBoard(card1, card2);
  });
};
