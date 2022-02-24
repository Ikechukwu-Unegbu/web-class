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

let chars = 'ABCDEFGHIJKLMNOPQRS&$#*@!TUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let editingTargetId = '';

function initialize(){
  checkStorage();

  passStorageResultToHTML();
}
initialize();

function deleteTimer(){
document.getElementById('')
}

function generalActionMessageTime(idOfMessageToDisplay){
  el = document.getElementById(idOfMessageToDisplay);
}

generalActionMessageTime('idname')

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

function checkStorage(){
  if(localStorage.length==0){
    displayElement('empty_message');
  }else{
    hideElement('empty_message');
  }
  // let storageState;
  // localStorage.length==0?storageState= true:storageState=false;
  // return storageState;
}

function displayElement(targetElementID){
  let target = document.getElementById(targetElementID);
  target.style.display = 'flex';
}

function hideElement(targetElementID){
  let target = document.getElementById(targetElementID);
  target.style.display = 'none';
}


function addToStorage(uniqueKey, userPost){
  window.localStorage.setItem(uniqueKey, userPost);
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  if(form_btn.innerText == 'Post'){
    let key = uniqueIDGenerator(10);
    addToStorage(key, textarea.value);
    textarea.value = '';
  }else{
    // console.log('You are editing and you need to write edditng script');
    localStorage[editingTargetId] = textarea.value;
   
    // console.log(targetNote);
  }
})

function passStorageResultToHTML(){
  const storageResult = window.localStorage;
  const storeArr = Object.values(storageResult)

  for(const [key, value] of Object.entries(storageResult)){
    let postarr = value.split(' ');
    // console.log(postarr);
    let postTitle = postarr.slice(0, 4);
    postTitle = postTitle.toString().replace(/\,/g, " ") +'....';;
    // console.log(postTitle);

    htmlMarkup = `
    <div id="notes" class="notes">
      <div class="notes-header">
        <small>02-03-2020</small>
        <small id="${key}" onclick="editNote(this.id)">Edit</small>
        <small id="${key}" onclick="deleteNote(this.id)">Delete</small>
      </div>  
      <div class="notes-body">
        <div class="">
          <h3><p onclick="fullNote(this.id)" id="${key}" class="title">${postTitle}</p></h3>
        </div>
      </div>
    </div>`;
    
    let referenceNode = document.querySelector('#post');
    referenceNode.insertAdjacentHTML('afterend', htmlMarkup);
  }

  //console.log(storeArr);
}

function fullNote(clicked_id){
  let storedItems = window.localStorage;
  // let storedKeys = Object.keys(storedItems);
  let targetPost = storedItems[clicked_id];
  let classNotes = document.getElementsByClassName('notes');
  // console.log(classNotes);
  for(i of classNotes){
    i.style.display = 'none';
  }
  
  textarea.style.display = 'none';

  form_btn.style.display = 'none';
  htmlMarkup = `
  <div id="notes" class="notes"> 
    <div class="notes-header">
      <small>02-03-2020</small>
      <small id="${clicked_id}" onclick="editNote(this.id)">Edit</small>
      <small  onclick="deleteNote(this.id)" id="${clicked_id}">Delete</small>
    </div>  
    <div class="notes-body">
      <div class="">
        <h3><p onclick="fullNote(this.id)" id="${clicked_id}" class="title">${targetPost}</p></h3>
      </div>
    </div>
  </div>`;  
  //console.log(targetPost);
  let referenceNode = document.querySelector('#post');
  referenceNode.insertAdjacentHTML('afterend', htmlMarkup);
}

function deleteNote(targetId){
  let storedItems = window.localStorage;
  // let storedKeys = Object.keys(storedItems);
  let targetPost = storedItems[targetId];
  storedItems.removeItem(targetId); 
  
  deleteTimer();
}

function editNote(targetId){
  console.log('edited');

  let storedItems = window.localStorage;
  // let storedKeys = Object.keys(storedItems);
  let targetPost = storedItems[targetId];
  let classNotes = document.getElementsByClassName('notes');
  // console.log(classNotes);
  for(i of classNotes){
    i.style.display = 'none';
  }
  form_btn.innerText = 'Update';
  textarea.innerText = targetPost;

  editingTargetId = targetId;
}