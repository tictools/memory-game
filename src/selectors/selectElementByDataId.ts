export const selectElementByDataId = function (dataId: string) {
  return document.querySelector(`div[data-id="${dataId}"]`) as HTMLInputElement;
};
