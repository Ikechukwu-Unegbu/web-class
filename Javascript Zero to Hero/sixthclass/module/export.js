//exporting module
console.log('exporting now');

let accountName = "Ikechukwu Vincent";

function changeInnerText(idName){
  let target = document.getElementById(idName);
  target.innerText = 'We just changed our topic from module. awesme!';
}

export {accountName, changeInnerText};

