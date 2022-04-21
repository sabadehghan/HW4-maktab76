// QUESTION 4
// write a javascript function to remove. "null", "0", "false",
// "undefined" and "NaN" values from an array.



function removeValueFromArray(arr) {
  let array = arr.filter(function(value){
    return value;
  });
  return array;
}

console.log(removeValueFromArray([0, false, NaN, null, 1, undefined, 2, 4, "ab"]));


