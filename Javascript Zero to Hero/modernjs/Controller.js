import IncomeController from "./IncomeController.js";
import Render from "./Render.js";


// htmls
let inputFields = document.getElementById('amount');
let textarea = document.getElementById('textarea');
let income_btn = document.getElementById('income_btn');


class Controller{
  
  constructor (info, render){
    this.render = render;
    console.log('App have started')
  }

  validateInput(input, textarea){
    let render = new Render();
    if(input.value == '' || textarea.value == ''){
      render.display('message', 'block');
      return false;
    }
  }

}

let controller = new Controller('I am am Intermediate laravel developer.');

income_btn.addEventListener('click', function(event){
  event.preventDefault();
  // validate inputs
  let validation = controller.validateInput(inputFields, textarea);
  //save inputs
  if(validation != false){
    let incomeInstance = new IncomeController();
    incomeInstance.postIncome(inputFields.value, textarea.value, 'income');
  }
  
});