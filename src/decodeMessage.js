/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/

const decodeMessage = string => {
  let arr = [...string];
  let newArr = [];
  let codes = arr.map(element => {
    if (element < 97 || element > 122) {
      return element;
    } else newArr.push(122 - (element.charCodeAt() - 97));
  });

  let finalOutput = newArr.map(element => String.fromCharCode(element));
  return finalOutput;
  // return String.fromCharCode(newArr[0]);
};

module.exports = decodeMessage;
