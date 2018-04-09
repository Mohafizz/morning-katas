/* 
The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

#Note

If num is negative, ignore its sign and treat it as a positive value.
If nth is not positive, return -1.
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.
*/

let findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1;
  }
  let numArr = num.toString();
  return numArr.length < nth ? 0 : parseInt(numArr[numArr.length - nth]);
};
module.exports = findDigit;
