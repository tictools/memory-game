export const createMainHeading = (rootElement: HTMLDivElement) => {
  const heading1 = document.createElement("h1");
  heading1.textContent = "Memory Game";
  rootElement!.appendChild(heading1);
};
