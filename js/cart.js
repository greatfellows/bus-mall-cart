'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  clearCart();
  showCart();
}


// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tBodyElement = document.getElementsByTagName('tbody')[0];
  tBodyElement.innerHTML = '';
}

// Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // Find the table body
  var tBodyElement = document.getElementsByTagName('tbody')[0];

  // Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    // create table row
    var trElement = document.createElement('tr');
    // create table data
    var tdDelete = document.createElement('td');
    var tdQuantity = document.createElement('td');
    var tdProductName = document.createElement('td');
    var tdImage = document.createElement('td');
    var imageElement = document.createElement('img');
    // create delete button
    var deleteButton = document.createElement('input');

    // fill all elements with infor
    deleteButton.type = 'button';
    deleteButton.value = 'X';
    deleteButton.onclick = 'removeItemFromCart()';
    tdQuantity.textContent = cart.items[i].quantity;
    tdProductName.textContent = cart.items[i].productName;
    imageElement.src = cart.items[i].filePath;
    imageElement.alt = cart.items[i].name;
    imageElement.height = '30';
    imageElement.width = '30';

    console.log(tdImage);
    // attach all elements
    tdImage.appendChild(imageElement);
    tdDelete.appendChild(deleteButton);
    trElement.appendChild(tdDelete);
    trElement.appendChild(tdQuantity);
    trElement.appendChild(tdProductName);
    trElement.appendChild(tdImage);
    tBodyElement.appendChild(trElement);
  }
}


function removeItemFromCart(event) {
  if (event.target.localName !== 'img') {
    var productName = event.target.parentNode.parentNode.childNodes[2].innerText;
    cart.removeItem(productName);
    renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
