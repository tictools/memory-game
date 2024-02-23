import type { Card } from "../data";

export const sortCards = function (cardsCollection: Card[]): Card[] {
  return cardsCollection.sort(() => 0.5 - Math.random());
};
