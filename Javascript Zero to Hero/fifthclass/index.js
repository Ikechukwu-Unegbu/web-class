let store = window.localStorage;

let firstStudent = 'Muna';
let secondSt = 'Val';

let personObj = {
  name:'Person name',
  age:'Person age',
  career:'Person Career'
}

store.setItem(3, JSON.stringify(personObj))

store.setItem(1, firstStudent);
store.setItem(2, secondSt);
let ObjFromStorage = JSON.parse(store.getItem(3));

console.log(ObjFromStorage);

// store.removeItem(1);
// store.getItem(1) = 'Vincent';
console.log(store);

// store.clear();
// console.log(store);
// console.log(store);
function addTwoNumbers(a, b){
  c = a + b;
  return c;
}

function multiply(a, b){
  return a*b;
}


console.log(multiply(2,3));
let addition = addTwoNumbers('kdkdl', 'dkkdk');
console.log(addition);

// a function to manipulate dom
function rewriteDOM(yourMothersName, message){
  yourMothersName.innerText = message
}

let domElement = document.getElementById('bold');
rewriteDOM(domElement, "We successfully manipulated dom with function.");

let studentObj ={
  name:'Shalom Flames',
  yearOfBirth:2000,
  yearOfAdmission:2022,
  course:'Mathmatics', 
  courseDuration:4,
  calculateYearOfGraduation:function calculateYearOfGraduation(){
   return this.yearOfAdmission + this.courseDuration; 
  }
}

console.log(studentObj.calculateYearOfGraduation());
