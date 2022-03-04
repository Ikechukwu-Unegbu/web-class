
class Transaction{

  constructor(){
    console.log('this is the parent  class')
  }

  defaultAccountNumber = 2083704444;

  addTwoNumbers(a,b) {
    let c = a+b;
    console.log(c);
  }

  printString(stringArg){
    console.log(stringArg);
  }

  disappear(idname, message){
    let target = document.getElementById(idname);
    target.innerText = `We just changed our topic
     using javascript class`;
  }
  

}



let trxInstance = new Transaction;

// trxInstance.addTwoNumbers(2, 3);
// trxInstance.printString(`We are using classes in 
// javascript now`);
// trxInstance.disappear('topic');


class HyperTransaction extends Transaction{

 

  multiplyTwoNumbers(a ,b){
    let c=a*b;
    console.log(c);
  }
}

let hyperInstance = new HyperTransaction;

hyperInstance.addTwoNumbers(20,2);
hyperInstance.multiplyTwoNumbers(3,20)
console.log(hyperInstance.defaultAccountNumber);