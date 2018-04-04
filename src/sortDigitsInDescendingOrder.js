/* Your task is to make a function that can take any non-negative integer 
as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number. */

const sortDigitsInDescendingOrder = digits => {
  if (!digits) {
    return false;
  }
  let sortedDigits = digits
    .toString()
    .split("")
    .sort(function(a, b) {
      return b - a;
    })
    .join("");

  return parseInt(sortedDigits);
};

console.log(sortDigitsInDescendingOrder(123));

module.exports = sortDigitsInDescendingOrder;
