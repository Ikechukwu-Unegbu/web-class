//grabbing the form by id value
let form = document.getElementById('form');
//grabbing the textarea in the form by id value
let textarea = document.getElementById('textarea');
//we are now grabbing the div where we will insert the new post
let posts_container = document.getElementById('posts_container');
//we are now grabbing the form button by id value
let btn = document.getElementById('form_btn');


form.addEventListener('submit', function(e){
  e.preventDefault();
  
  let div = document.createElement('div');
  div.innerText = textarea.value;
  
  posts_container.appendChild(div);
})

