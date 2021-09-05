/** @format */

const addOne = function (numbers) {
  const newArr = [];
  for (i = 0; i < numbers.length; i++) {
    newArr[i] = numbers[i] + 1;
  }
  return newArr;
};

module.exports = addOne;
