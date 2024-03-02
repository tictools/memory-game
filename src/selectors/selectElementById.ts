export const selectElementById = function (id: string) {
  return document!.querySelector<HTMLDivElement>(id);
};
