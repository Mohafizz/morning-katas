// Test cases: actual --> expected
// sortDigitsInDescendingOrder(21445) --> 54421
// sortDigitsInDescendingOrder(145263) --> 654321
// sortDigitsInDescendingOrder(1254859723) --> 9875543221
let sortDigitsInDescendingOrder = require("../src/sortDigitsInDescendingOrder");

describe.skip("sortDigitsInDescendingOrder", () => {
  it("should not be an empty string", () => {
    expect(sortDigitsInDescendingOrder("")).toEqual(false);
  });

  it.skip("should split the string to array", () => {
    expect(sortDigitsInDescendingOrder("214")).toEqual(["2", "1", "4"]);
  });

  it.skip("should return a sorted array", () => {
    expect(sortDigitsInDescendingOrder("214")).toEqual(["4", "2", "1"]);
  });

  it.skip("should return a sorted string", () => {
    expect(sortDigitsInDescendingOrder("12475")).toEqual("75421");
  });

  it("should return integers", () => {
    expect(sortDigitsInDescendingOrder(123)).toEqual(321);
  });
});
