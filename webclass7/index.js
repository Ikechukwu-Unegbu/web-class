

function firstFunction(){
  console.log('I am the first function');
}

function secondFunction(a){
  console.log('Who are you?');
  a();
}

secondFunction(firstFunction);

function add(a, b){
  return a+b;
}

function substract(funcParam,a,b, c){
  e= funcParam(a, b) - c;
  // return e;
  console.log(e);
}
// let dddd = 2;
substract(add, 40, 60, 25);

const functionVar = function printOut(name){
  console.log('My name is '+name);
}

functionVar('Ikechukwu');





