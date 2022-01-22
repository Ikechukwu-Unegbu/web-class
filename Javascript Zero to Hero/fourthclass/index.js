// let arr = ['Ik', 'TG', 'Muna'];
// let newObj = {
//   dkakad:'First sentence.',
//   kddkkfk:'Second sentence.'
// };
// // localStorage.setItem('name', arr);
// localStorage.removeItem('name');
// localStorage.setItem('newObj', JSON.stringify(newObj));
// let storage = window.localStorage;
// JSON.parse(localStorage.getItem('user'))
// console.log(JSON.parse(localStorage.getItem('newObj')));

// for (const [key, value] of Object.entries(JSON.parse(localStorage.getItem('newObj')))) {
//   console.log(`${key}: ${value}`);
// }

let var1 = 2;
let var2 = 110;

if(200<var2){
console.log('First number is lesser than the second one.');
}
else{
  console.log('Original condition is not true')
}

let day = 'Monday';
let anotherDay = 'Friday';

if('Friday' !== day && 'Friday'!==anotherDay){
  console.log("Sorry today is neither Monday nor Friday so our boss is not on seat.");
 }








let arrayOfNumbers = [1, 3, 5, 7,9];

for (z of arrayOfNumbers) {
  console.log(z*2);
}

let Obj4 ={
  name:'Vincent',
  profession:'Programmer',
  nextProfession:'Business'
}

for (const [monkey, banana] of Object.entries(Obj4)) {
  console.log(`${monkey}: ${banana}`);
}

