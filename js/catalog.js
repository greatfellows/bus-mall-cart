/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var ourCart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++ ) {
    var productOption = document.createElement( 'option' );
    productOption.value = Product.allProducts[i].filePath;
    productOption.textContent = Product.allProducts[i].name;
    productOption.name = Product.allProducts[i].name;
    selectElement.appendChild(productOption);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event);
  // ourCart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(event);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  var item = event.target.items.value;
  // TODO: get the quantity
  var quantity = event.target.quantity.value;
  // TODO: using those, add one item to the Cart
  ourCart.addItem(item, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  var itemName = event.target.items.selectedOptions[0].label;
  // TODO: get the quantity
  var quantity = event.target.quantity.value;
  // get cartContent div
  var divElement = document.getElementById('cartContents');
  // create a UL
  var ulElement = document.createElement('ul');
  // create an LI
  var liElement = document.createElement('li');

  console.log('upCartPReview');
  // set textContent of Li to string of quantity and itemName
  liElement.textContent = `${quantity} - ${itemName}`;
  // appendchild to UL
  ulElement.appendChild(liElement);
  // append UL to cartContent Div
  divElement.appendChild(ulElement);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
