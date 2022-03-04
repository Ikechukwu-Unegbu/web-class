let amout = document.getElementById('amount');
let textarea = document.getElementById('textarea');

let income_btn = document.getElementById('income_btn');
let exp_btn = document.getElementById('exp_btn');

function init(){
  getbal();
}

init();

function getbal(){
  document.getElementById('bal').innerText = localStorage.getItem('bal');
}

function addToBal(amount){

}

function minusFromBal(amount){

}


income_btn.addEventListener('click', function(e){
  e.preventDefault();


  

  console.log('income button clicked')
});

exp_btn.addEventListener('click', function(e){
  e.preventDefault();

});

// define id generator function


function dateGenerator(){

}

function addToStore(amount, explanation, status){
  let daysDate = dateGenerator();
  let data = {
    amount:amount,
    status:status,
    dateOfPost:daysDate, 
    purpose:explanation
  }
  //call your id generator

  let uniqueID = '';
  localStorage.setItem(uniqueID, JSON.stringify(data))
}

console.log(localStorage);