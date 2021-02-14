// Script.js
var myStorage = window.localStorage;
window.addEventListener('DOMContentLoaded', () => {
  if(myStorage.getItem('card') == null){
    fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => myStorage.setItem('card',JSON.stringify(data)));
  }
  var productArray = JSON.parse(myStorage.getItem('card'));
  for(var i = 0; i < productArray.length; i++) {
    var curr = productArray[i];
    var pr = document.createElement('product-item');
    const shadow = pr.shadowRoot;
    shadow.querySelector('.price').textContent = "$" + curr.price;
    shadow.querySelector('.title').textContent = curr.title;
    shadow.querySelector('img').src = curr.image;
    shadow.querySelector('img').alt = curr.title;
    shadow.querySelector('button').id = i;
    shadow.querySelector('button').onclick = function(){addCartClick(this)};
    document.getElementById('product-list').appendChild(pr);
  }
});
function addCartClick(elem){
  if(elem.getAttribute('add') == "true"){
    removeCartClick(elem);
  }else if(elem.getAttribute('add') == "false"){
    if(myStorage.getItem(elem.id) != null){
      return;
    }
    var cartCount = 0;
    if(myStorage.getItem('count') == null) {
      myStorage.setItem('count', cartCount);
    } else {
      cartCount = myStorage.getItem('count');
    }
    cartCount++;
    myStorage.setItem('count', cartCount);
    document.getElementById('cart-count').textContent = cartCount;
    //elem.textContent = "Remove from Cart";
    elem.textContent = "Remove from Cart";
    elem.setAttribute('add', true);
    myStorage.setItem(elem.id,"exist");
  }
}
function removeCartClick(elem){
  if(myStorage.getItem(elem.id) == null){
    return;
  }
  var cartCount = myStorage.getItem('count');
  cartCount--;
  myStorage.setItem('count', cartCount);
  document.getElementById('cart-count').textContent = cartCount;
  elem.textContent = "Add to Cart";
  elem.setAttribute('add', false);
  myStorage.removeItem(elem.id);
}
