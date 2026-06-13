import { describe, it, expect } from "vitest";
import { addAffirmation, affirmationOfTheDay, type Affirmation } from "./index";

describe("addAffirmation", () => {
  it("appends with a sequential id", () => {
    let list: Affirmation[] = [];
    list = addAffirmation(list, "I am focused");
    list = addAffirmation(list, "I follow through");
    expect(list).toEqual([
      { id: 1, text: "I am focused" },
      { id: 2, text: "I follow through" },
    ]);
  });
  it("trims and rejects empty text", () => {
    expect(addAffirmation([], "  hi  ")[0].text).toBe("hi");
    expect(() => addAffirmation([], "   ")).toThrow();
  });
});

describe("affirmationOfTheDay", () => {
  const list: Affirmation[] = [
    { id: 1, text: "a" },
    { id: 2, text: "b" },
    { id: 3, text: "c" },
  ];
  it("is deterministic for a given date", () => {
    const d = new Date("2026-06-13T10:00:00Z");
    expect(affirmationOfTheDay(list, d)).toEqual(affirmationOfTheDay(list, d));
  });
  it("returns null for an empty list", () => {
    expect(affirmationOfTheDay([], new Date())).toBeNull();
  });
});
