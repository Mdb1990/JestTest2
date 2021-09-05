/** @format */

const getWordLengths = function (someWords) {
  const newArr = someWords.map(function (word) {
    return word.length;
  });
  return newArr;
};

module.exports = getWordLengths;
