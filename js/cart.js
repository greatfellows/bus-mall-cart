/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('shoppingList'));
  cart = new Cart(cartItems);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var elTbody = document.getElementsByTagName('tbody')[0];
  console.log(elTbody);
  elTbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  var elTbody = document.getElementsByTagName('tbody')[0];

  // TODO: Iterate over the items in the cart
  for(var i = 0; i<cart.items.length; i++){
    var elTr = document.createElement('tr');
    var elDelete = document.createElement('td');
    var elQ = document.createElement('td');
    var elItem = document.createElement('td');
    elDelete.textContent = 'delete';
    elQ.textContent = cart.items[i].quantity;
    elItem.textContent = cart.items[i].product;
    console.log(elDelete, elQ, elItem);


    elTr.appendChild(elDelete);
    elTr.appendChild(elQ);
    elTr.appendChild(elItem);
    elTbody.appendChild(elTr);
  }
}


// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
