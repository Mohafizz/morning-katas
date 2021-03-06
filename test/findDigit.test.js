// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

const findDigit = require("../src/findDigit");

describe("findDigit", () => {
  it("should return -1 if nth is not positive", () => {
    expect(findDigit(1, -1)).toEqual(-1);
  });
  it("should return 8 if the number is -2825 and nth is 3", () => {
    expect(findDigit(-2825, 3)).toEqual(8);
  });

  it("should return 8 if the number is 0 and nth is 20", () => {
    expect(findDigit(0, 20)).toEqual(0);
  });

  it("should return 8 if the number is 24 and nth is -8", () => {
    expect(findDigit(24, -8)).toEqual(-1);
  });

  it("should return 8 if the number is 65 and nth is 0", () => {
    expect(findDigit(65, 0)).toEqual(-1);
  });
});
