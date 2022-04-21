// QUESTION 10
// write a javascriot function to remove the first occurrence of a given
// 'search string' from a string.

function removeFirstOccurrence(string, searchString) {
  let index = string.indexOf(searchString);
  if (index === -1) {
    return string;
  }
  return string.slice(0, index) + string.slice(index + searchString.length);
}

console.log(
  removeFirstOccurrence("The quick brown fox jumps over the lazy dog", "the")
);
