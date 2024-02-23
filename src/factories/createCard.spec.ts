import { describe, expect, test } from "vitest";
import { createCard } from "./createCard";

describe("Given createCard function", () => {
  test("When Then", () => {
    const card = createCard("apple", 1);
    console.log("🚀 ~ test ~ card:", card);
    expect(1).toBeTruthy();
  });
});
