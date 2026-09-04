//IMPORT
import { products } from "../Data/dataset.js";
import { productsGrid } from "./products-grid.js";

//COMPONENT CODES
export const search = {

  //------------------------------------
  //Functions
  renderUI() {
    //
    let UI = ` 
      <!-- Search products by name -->
      <div class="col-md-4">
        <input type="text" id="searchInput" class="form-control" placeholder="Search products...">
      </div>
    `;
    //Return the markup UI
    return UI;    
  },

  //Add event to search input
  addEvent() {    
    document.getElementById("searchInput").addEventListener("input", () => {
      //Read the current values from the search, category, and sort controls.
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();
      // Keep products matching the search.
      let filteredProducts = products.filter(product => {
          return product.name.toLowerCase().includes(searchTerm);
      });
      //Update data of productsGrid
      productsGrid.data = filteredProducts;
      //Render filtered outcome
      document.getElementById("productGrid").innerHTML = productsGrid.renderUI();
    });
  },
}
