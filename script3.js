// QUESTION 3
// write a javascript function that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case.

function upperCase(string) {
  let array = string.split(" ");
  let newArray = [];

  for (let x = 0; x < array.length; x++) {
    newArray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
  }

  return array.join(" ");
}
console.log(upperCase("the quick brown fox"));
