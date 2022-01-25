//grabbing the form by id value
let form = document.getElementById('form');
//grabbing the textarea in the form by id value
let textarea = document.getElementById('textarea');
//we are now grabbing the div where we will insert the new post
let posts_container = document.getElementById('posts_container');
//we are now grabbing the form button by id value
let btn = document.getElementById('form_btn');
//getting the empty post message
let emptyMsg  = document.getElementById('post');
//create empty array to hold users posts
let postsArray = [];


form.addEventListener('submit', function(e){
  e.preventDefault();
  
  postsArray.push(textarea.value);

  if(postsArray.length !==0){
    emptyMsg.style.display = 'none';

    //clear all existing html nodes from previous posts
    posts_container.innerHTML = '';
    //reprint the entire array afresh on the dom
    postsArray.forEach(function(post){
      console.log(postsArray)
  
      let div = document.createElement('div');
      div.innerText = post;
      posts_container.appendChild(div);
    })
  }


  //making the textarea empty after posting
  textarea.value = '';
})

