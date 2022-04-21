// QUESTION 1
// write a javascript program to compute the exponent of a number 
// use recursion

let computeExponent = function (base, pow) {
  if (pow === 0) {
    return 1;
  } else {
    return base * computeExponent(base, pow - 1);
  }
};

console.log(computeExponent(5, 2));
