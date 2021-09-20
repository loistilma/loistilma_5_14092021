const cart = {};
cart.products = [];
localStorage.setItem('cart', JSON.stringify(cart));

function addProductToObj(product){
  var cart = JSON.parse(localStorage.getItem('cart'));
  cart.products.push(product);
  console.log(cart)
}

function addToCart(product){
  var id = document.getElementById("addItem")
  id.addEventListener("click", addProductToObj(product))
}