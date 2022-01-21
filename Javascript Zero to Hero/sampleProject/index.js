let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let posts_container = document.getElementById('posts_container');
let btn = document.getElementById('form_btn');

form.addEventListener('submit', function(e){
  e.preventDefault();
  let div = document.createElement('div');
  div.innerText = textarea.value;
  
  posts_container.appendChild(div);
})

// btn.addEventListener('click', function(e){
 
// console.log(e);
// })