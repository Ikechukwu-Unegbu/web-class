// let main = document.getElementsByTagName('main');
// console.log(main);
// console.log(main['main_first'])

// let newEl = document.createElement('h3');
// newEl.innerText = "Advanced DOM Manipulation";
// // document.write("Hello World!");
// main['main_first'].appendChild(newEl);

// // An element is clicked on
// //The page has loaded
// //Input fields are changed
/**
Grabbing the heading and changing it
 */
let heading = document.getElementById('dom_topic');

heading.innerText = 'Hands on DOM Manipulation classs';


/**
creating a new dom element
 */
//  we created a div dom element
let newElement  = document.createElement('div');
// we assigned it an inner text(write up)
newElement.innerText = 'This is our first javaScript generated div.';
// we grabbed the parent element by ID
let parentElement = document.getElementById('main_first');
// we are putting the new element inside the parent element 
parentElement.appendChild(newElement);


/***************************************************** */

// this returns all element with same class name as arrays
let classBasedEl = document.getElementsByClassName('box');
console.log(classBasedEl);
// assuming we want to target the first one and style it
classBasedEl[0].innerText = "Successfully targeted the first box.";
classBasedEl[0].style.background = 'yellow';
