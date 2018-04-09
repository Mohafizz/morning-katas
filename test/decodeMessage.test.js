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

describe.skip("decodeMessage", () => {
  it("should find the char code of a single character", () => {
    expect(decodeMessage("gsrh nvhhztv")).toEqual(1);
  });
});
