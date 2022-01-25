const PRODUCTS = [
  {
    id:1,
    product_name:'HP Laptop',
    price:200,
    image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.'
  },
  {
    id:2,
    product_name:'Mac Laptop',
    price:600,
    image:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.'
  },
  {
    id:3,
    product_name:'Gaming Laptop',
    price:550,
    image:'https://media.istockphoto.com/photos/gamer-laptop-with-video-game-picture-id505227671?s=612x612',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.'
  },
  {
    id:4,
    product_name:'Linux PC',
    price:200,
    image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.'
  },
  {
    id:5,
    product_name:'UI Design PC',
    price:600,
    image:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.'
  },
  {
    id:6,
    product_name:'Mining Laptop',
    price:550,
    image:'https://media.istockphoto.com/photos/gamer-laptop-with-video-game-picture-id505227671?s=612x612',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.'
  },
]


let posts_container = document.getElementById('container');
// let mainEl = document.createElement('div');
//let div = document.createElement('div');

for(product of PRODUCTS){
 const cardElement = `<div key="${product.id}" class="product_card" id="product_card">
    <img src="${product.image}" alt="">
    <div class="product_deets">
      <b>${product.product_name}</b>
      <p>${product.description}</p>
      <b>N${product.price}</b>
    </div>
    <div class="add_to_cart">
      <button>Add To Card</button>
    </div>
  </div>`;
  let div = document.createElement('div');
  div.innerHTML = cardElement;
  //mainContainer.innerHTML = cardElement;

   posts_container.appendChild(div);
};

