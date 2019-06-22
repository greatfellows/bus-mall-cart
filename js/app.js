'use strict';


// Cart constructor.
var Cart = function (items) {
  this.items = items;
};
var cart = new Cart([]);

// create a new CartItem and add it to this.items
Cart.prototype.addItem = function (itemName, quantity) {
  var isInCart = false;
  // if cart is not empty check if item already in cart
  if (cart.items.length) {
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].productName === itemName) {
        isInCart = true;
        var updatedQuantity = parseInt(cart.items[i].quantity) + parseInt(quantity);
        cart.items[i].quantity = updatedQuantity;
        console.log('item already in cart');
        break;
      }
    }
  }

  // if item not in cart create it
  if (!isInCart) {
    // find the right product by itemName
    for (let i = 0; i < Product.allProducts.length; i++) {
      if (Product.allProducts[i].name === itemName) {
        var tempItem = new CartItem(Product.allProducts[i], quantity);
        this.items.push(tempItem);
      }
    }
  }
  this.saveToLocalStorage();

};

Cart.prototype.removeItem = function (productName) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].productName === productName) {
      this.items.splice(i, 1);
    }
  }
  this.saveToLocalStorage();
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var cartItemList = JSON.stringify(this.items);
  localStorage.setItem('cartData', cartItemList);
};

Cart.prototype.loadFromLocalStorage = function () {
  var cartItemList = JSON.parse(localStorage.getItem('cartData'));
  if (cartItemList) {
    cart.items = cartItemList;
  }
  //TODO : create number of items in cart counter
  var itemCount = parseInt(cartItemList.length);
  document.getElementById('itemCount').innerHTML = '(' + itemCount + ')';
  document.write(itemCount);

};

var CartItem = function (product, quantity) {
  this.productName = product.name;
  this.quantity = quantity;
  this.filePath = product.filePath;
};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
cart.loadFromLocalStorage();
generateCatalog();


