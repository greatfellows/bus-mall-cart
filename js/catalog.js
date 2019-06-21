/* global Product, Cart */

'use strict';


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var optionElement = document.createElement('option');
    optionElement.value = Product.allProducts[i].name;
    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Get the item name from the form
  var itemName = event.target.items.selectedOptions[0].label;
  // TODO: get the quantity
  var quantity = event.target.quantity.value;

  console.log(itemName, quantity);
  // Do all the things ...
  addSelectedItemToCart(itemName, quantity);
  updateCounter();
  updateCartPreview();

}

// Add the selected item and quantity to the cart
function addSelectedItemToCart(itemName, quantity) {
  cart.addItem(itemName, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { }

// As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  // get cartContent div
  var divElement = document.getElementById('cartContents');
  // clear cartContent div
  divElement.innerHTML = '';
  // create a UL
  var ulElement = document.createElement('ul');

  // for each item in cart render a list item
  for (var i = 0; i < cart.items.length; i++) {
    // create li
    var liElement = document.createElement('li');
    // set textContent of Li to string of quantity and itemName
    liElement.textContent = `${cart.items[i].quantity} - ${cart.items[i].productName}`;
    // appendchild to UL
    ulElement.appendChild(liElement);

  }

  // append UL to cartContent Div
  divElement.appendChild(ulElement);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();
updateCartPreview();
