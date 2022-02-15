// let post =  fetch('https://ubahthebuilder.tech/posts/1');

// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
// .then(data => {
//   console.log(data.body.contstructor);
// //return data.json();
// });

const Http = new XMLHttpRequest();
const url='https://api.coindesk.com/v1/bpi/currentprice.json';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}


fetch(url)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})

let coinUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/category';

fetch(coinUrl)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})