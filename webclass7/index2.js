const postContainer = document.getElementById('post_container');
//console.log(postContainer);
const formdata = document.getElementById('textarea');
const btn = document.getElementById('btn');


const DUMMY_DATA = [
  {
    id:'1',
    name:'Ikenna Vincent',
    profession:'Software Developer',
    base:'Nsukka'
  },
  {
    id:'2',
    name:'Jessie Chidi',
    profession:'Designer',
    base:'Cannada'
  },
  {
    id:'3',
    name:'Kc Kene',
    profession:'Banker',
    base:'Abuja'
  },
  {
    id:'4',
    name:'Ikenna Vincent',
    profession:'Software Developer',
    base:'Nsukka'
  }
]

function formHandler(e){
  e.preventDefault();
  console.log('works')
}

btn.addEventListener('subm', formHandler(e));



// function myFunction() {
//  for(const [key, val] of Object.entries(DUMMY_DATA)){
//    console.log(val);
//    markupHtml = `<div>
//     <p>${val.name}</p>
//     <p>${val.profession}</p>
//     <p>${val.base}</p>
//    </div>`;
//    postContainer.insertAdjacentHTML('afterbegin', markupHtml); 
//  }
//   // console.log(element);
// }
// myFunction()

