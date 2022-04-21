// QUESTION 2
// write a javascript program to compute the sum of an array of integers

let arrays = [1, 2, 3, 4, 5, 6];

const sumOfArray = arrays.reduce(function (sum = 0, array) {
  return sum + array;
});

console.log(sumOfArray);
