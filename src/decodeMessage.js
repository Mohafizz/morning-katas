/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/

const decodeMessage = string => {
  let newArr = [];
  let codes = [...string.toLowerCase()].map(element => {
    if (element.charCodeAt() < 97 || element.charCodeAt() > 122) {
      return newArr.push(32);
    }
    newArr.push(122 - (element.charCodeAt() - 97));
  });

  let finalOutput = newArr
    .map(element => String.fromCharCode(element))
    .join("");
  return finalOutput;
};

module.exports = decodeMessage;
