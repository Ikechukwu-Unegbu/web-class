let amount = document.getElementById('amount');
let textarea = document.getElementById('textarea');
let message = document.getElementById('message');
let income_btn = document.getElementById('income_btn');
let exp_btn = document.getElementById('exp_btn');
let warning = document.getElementById('warning');
let chars = 'ABCDEFGHIJKLMNOPQRS&$#*@!TUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let incomeHistory_button = document.getElementById('income_history_button');


// let domState = {

// }

function init(){
  getbal();
  //localStorage.clear();

  //console.log(localStorage)
  mapToHTML();
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


incomeHistory_button.addEventListener('click', function(){
  incomeHistory();
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


function mapToHTML(){
  const storageResult = window.localStorage;
  // const storeArr = Object.values(storageResult)
  for(const[key, value] of Object.entries(storageResult)){
    let parsedValue = JSON.parse(value);
    console.log(parsedValue);
    let html;
    if(parsedValue.status == 'income'){
       html =`
       <div  id="${key}"class="trnx">
        <b>+</b>
        <p>${parsedValue.purpose} <b>...for price of N${parsedValue.amount}</b></p>
        <small>${parsedValue.dateOfPost}</small>
      </div>`;
     
    }else{
       html = `
       <div class="trnx">
        <b>-</b>
        <p>${parsedValue.purpose} <b>...for price of N${parsedValue.amount}</b></p>
        <small>${parsedValue.dateOfPost}</small>
      </div>`;
      // document.getElementById('feed').innerHTML = html;
    }
    let feedtitle = document.getElementById('all-feed');
    feedtitle.insertAdjacentHTML('afterend', html);
  }
  
}

function incomeHistory(){
  const storageResult = window.localStorage;
  const storeArr = Object.values(storageResult)
  for(const[key, value] of Object.entries(storageResult)){
    let parsedValue = JSON.parse(value);
    console.log(parsedValue);
    // let html;
    if(parsedValue.status == 'income'){
       let html =`
       <div  id="${key}"class="trnx">
        <b>+</b>
        <p>${parsedValue.purpose} <b>...for price of N${parsedValue.amount}</b></p>
        <small>${parsedValue.dateOfPost}</small>
      </div>`;
      document.getElementById('feed').style.display = 'none';
      
      let income_title  = document.querySelector('#income_header'); 
      let income_div = document.getElementById('income_history');
      income_div.style.display = 'block';
      //appending local storage content after the title
      
      income_title.insertAdjacentHTML('afterend', html);
    }
  }
  document.getElementById('income_history_button').disabled = true;
}

// console.log(localStorage);