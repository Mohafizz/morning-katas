let isPalindrome = require("../src/isPalindrome.js");
// Test cases: actual --> expected
// isPalindrome('') --> true
// isPalindrome('a') --> true
// isPalindrome('ab') --> false
// isPalindrome('abc') --> false
// isPalindrome('abba') --> true
// isPalindrome('tacocat') --> true
// isPalindrome('racecar') --> true
// isPalindrome('umbrella') --> false

describe.skip("Palindrom Test", () => {
  it("should be true when reverse", () => {
    let input = "a";
    expect(isPalindrome(input)).toEqual(true);
  });

  it("should return true when input is more than one char", () => {
    let input = "eve";
    expect(isPalindrome(input)).toEqual(true);
  });

  it("should return false when input is not a palindrome", () => {
    let input = "abc";
    expect(isPalindrome(input)).toEqual(false);
  });
});
