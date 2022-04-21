// QUESTION 7
// write a javascript function to get the current date
// pass a separator as an argument

let currentDate = function (seprator) {
  today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  let yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return mm + seprator + dd + seprator + yyyy;
};
console.log(currentDate("/"));
console.log(currentDate("-"));
