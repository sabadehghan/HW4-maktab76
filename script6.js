// QUESTION 6
// create a function compute the sum of the rounded numbers in an array.

const arrays = [1.3, 3.6, 7.8, 2.2];

const sumWithReduce = arrays.reduce(function(sum, array){
        return sum + Math.round(array) ;
},0);

console.log(sumWithReduce);