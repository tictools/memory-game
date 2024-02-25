export const updateSelectedCardEventFactory = () => {
  const updateSelectedCardEvent = new CustomEvent("custom::card::updated", {
    bubbles: true,
    cancelable: true,
  } as CustomEventInit);

  return updateSelectedCardEvent;
};
