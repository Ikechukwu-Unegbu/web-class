let amount = document.getElementById('amount');
let textarea = document.getElementById('textarea');
let message = document.getElementById('message');
let income_btn = document.getElementById('income_btn');
let exp_btn = document.getElementById('exp_btn');
let warning = document.getElementById('warning');
let chars = 'ABCDEFGHIJKLMNOPQRS&$#*@!TUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';



function init(){
  getbal();
  //localStorage.clear();

  console.log(localStorage)
  
}

init();

// UTILITY FUNCTIONS

function uniqueIDGenerator(len){
  let result = '';
  const charlength = chars.length;
  for(let i = 0; i<len; i++){
    //this random characters being generated are now being stored in the empty variable 
    //"result"
    result += chars.charAt(Math.floor(Math.random() * charlength));
  }
  return result;
}

function emptyInputsWarning(warningMessage){
  warning.innerText = warningMessage;
  message.style.display = 'flex';
}



// END OF UTILITY FUNCTIONS

console.log(localStorage.getItem('bal'))

function getbal(){
  document.getElementById('bal').innerText = localStorage.getItem('bal');
}

function addToBal(amount){

}

function minusFromBal(amount){

}


income_btn.addEventListener('click', function(e){
  e.preventDefault();
  //checking if fields are empty
  if(amount.value == '' || textarea.value == ''){
    emptyInputsWarning('All fields are required.');
    return false;
  }
  if(isNaN(amount.value)){
    emptyInputsWarning('The first field must be a number.');
    amount.style.borderColor = 'red';
    return false;
  }
  // console.log(amount.value);
  let balance = localStorage.getItem('bal');
  
  let inputAmount = amount.value;
  let newbal;

  if(balance == null){
    newbal = +inputAmount;
  }else{
    newbal = (+balance) + (+inputAmount);
  }
  // console.log(parseInt(newbal));
  localStorage.removeItem('bal');
  localStorage.setItem('bal', newbal);
  

  addToStore(amount.value, textarea.value, 'income')

  // console.log('income button clicked')
});

exp_btn.addEventListener('click', function(e){
  e.preventDefault();

});

// define id generator function


function dateGenerator(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
}

// addToStore('','','income');
function addToStore(amount, explanation, status){
  let daysDate = dateGenerator();
  let data = {
    amount:amount,
    status:status,
    dateOfPost:daysDate, 
    purpose:explanation
  }
  //call your id generator
  let uniqueID = uniqueIDGenerator(5);
  localStorage.setItem(uniqueID, JSON.stringify(data))
}

// console.log(localStorage);