// QUESTION 5
// write a javascript function to merge two arrays and remove all duplicate elements.


const array1 = [1, 2, 3];
const array2 = [2, 30, 1];

function getUniqueAfterMerge(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let uniqueArr = [];

  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

getUniqueAfterMerge(array1, array2);
