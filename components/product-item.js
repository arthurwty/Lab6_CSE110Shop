// product-item.js

class ProductItem extends HTMLElement {
  constructor(){
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
    var card = document.createElement('li');
    //card.classList = "product";
    card.setAttribute('class','product');
    var image= document.createElement('img');
    image.setAttribute('src','./assets/shop-icon.png');
    image.setAttribute('alt',"shopping cart");
    var title = document.createElement('p');
    title.setAttribute('class','title');
    //title.textContent = 'This is an item';
    var price = document.createElement('p');
    price.setAttribute('class','price');
    //price.textContent = '$69.99';
    var addToCart = document.createElement('button');
    addToCart.setAttribute("add",false);
    addToCart.textContent = "Add to Cart";
    shadow.appendChild(style);
    shadow.appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCart);

  }
}

customElements.define('product-item', ProductItem);
