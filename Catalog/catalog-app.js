//IMPORT
import { products } from "./Data/dataset.js"; 
import { productsGrid } from "./Components/products-grid.js";
import { search } from "./Components/search.js"
import { filter } from "./Components/filter.js";
import { sort } from "./Components/sort.js";
import { cart } from "./Components/cart.js";
 
//COMPONENT CODES
//Render all products when the page first opens
productsGrid.data = products; //Initially, load dataset
document.getElementById("productGrid").innerHTML = productsGrid.renderUI();
 
//Controls panel
document.getElementById("controls-panel").innerHTML += search.renderUI();
document.getElementById("controls-panel").innerHTML += filter.renderUI();
document.getElementById("controls-panel").innerHTML += sort.renderUI();
 
//Filter, Sort, Search
search.addEvent();
filter.populateCategoryAndAddEvent();
sort.addEvent();
 
//CART
//Restore any items saved from a previous visit, then render the cart panel
cart.init();
cart.renderUI('cartContainer');

document.getElementById("productGrid").addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const id = event.target.dataset.id;
    cart.addToCart(id);
  }
});

