const domButton = document.getElementById('dom_btn');
// const domBtn = document.getElementsByClassName('.dom_btn');
const domSentence = document.getElementById(
  'dom_sentence');
const smallDom = document.getElementById('small_dom');
 
function disappearAndDisplay(){
  domSentence.style.display = 'none';
  smallDom.innerText = "The main thing don disappear.";

  
}

// domButton.addEventListener("click", disappear(domSentence));



// function AddTwoNumbers(a, b){
//   return a + b;
// }

// const answer = AddTwoNumbers(4, 4)
// console.log(answer)