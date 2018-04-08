// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"
// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"
let decodeMessage = require("../src/decodeMessage");

describe("decodeMessage", () => {
  it("should convert the char to the expected output", () => {
    expect(decodeMessage("a")).toEqual("z");
  });

  it("should convert the char to the expected output", () => {
    expect(decodeMessage("z")).toEqual("a");
  });

  it("should convert the char to the expected output", () => {
    expect(decodeMessage("b")).toEqual("y");
  });

  it("should convert the char to the expected output", () => {
    expect(decodeMessage("ab")).toEqual("zy");
  });

  it("should convert the char to the expected output", () => {
    expect(decodeMessage("sr")).toEqual("hi");
  });

  it("should convert the char to the expected output", () => {
    expect(decodeMessage("svool")).toEqual("hello");
  });

  it("should convert the char to the expected output", () => {
    expect(decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv")).toEqual(
      "i hope nobody decodes this message"
    );
  });
});
