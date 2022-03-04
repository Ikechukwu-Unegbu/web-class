//exporting module
console.log('exported')

const shippingCart = 10;

// const cart = [];

// export const addToCart = function(product, quantity){
//   cart.push({product, quantity})
//   console.log(`${quantity} ${product} added to cart` );
// }

// //multiple export 

// const totalPrice = 238;
// const totalQuantity = 23;

// export {totalPrice, totalQuantity};

const shoppingCart2 =(function(){
  const cart = [];
  const shoppingCart = 233;
  const totalPrice = 334;
  const totalQuantity = 44;

  const addToCart = function(product, quantity){
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart` );
  }

  const orderStock = function (product, quantity){
    console.log(`${quantity} ${product} ordered from supplier`)
  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };
})();

shoppingCart2.addToCart('apple', 2);
