// console.log("explainer")
// function add(s,f){
//   console.log(s+f);
// }

// add(2,3);

// function consoleSomething(){
//   console.log('something');
// }

// consoleSomething();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

let todaysFormatedDate = mm + '/' + dd + '/' + yyyy;
// console.log(today);
console.log(today);
console.log(todaysFormatedDate);


