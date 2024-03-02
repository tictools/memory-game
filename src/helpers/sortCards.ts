import type { CardContent } from "../data";

export const sortCards = function (
  cardsCollection: CardContent[]
): CardContent[] {
  return cardsCollection.sort(() => 0.5 - Math.random());
};
