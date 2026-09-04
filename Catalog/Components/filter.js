//IMPORT
import { products } from "../Data/dataset.js";
import { productsGrid } from "./products-grid.js";

//COMPONENT CODES
export const filter = {
  //------------------------------------
  //Functions
  renderUI() {
    //
    let UI = ` 
      <!-- Filter products by category -->
      <div class="col-md-4">
        <select id="categoryFilter" class="form-select">
          <option value="All">All Categories</option>
        </select>
      </div>
    `;
    //Return the markup UI
    return UI;    
  },

  //Add event to filter input
  populateCategoryAndAddEvent() {    
    // Read the current values from the search, category, and sort controls.
    const categoryFilter = document.getElementById("categoryFilter");
    // Populate categories
    
    //Clear the option
    categoryFilter.innerHTML = ""

    //adding the "All" option back
    const option= document.createElement("option");
        option.value = "All";
        option.textContent = "All";
        categoryFilter.appendChild(option);
    const categories = [...new Set(products.map(p => p.category))];  

    // Add each unique product category to the filter menu.
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    document.getElementById("categoryFilter").addEventListener("change", () => {
      //Get selected category
      const selectedCategory = categoryFilter.value;
      // Keep products matching selected category.
      let filteredProducts = products.filter(product => {
         return selectedCategory === "All" || product.category === selectedCategory;
      });
      //Update data of productsGrid
      productsGrid.data = filteredProducts;
      //Render filtered outcome
      document.getElementById("productGrid").innerHTML = productsGrid.renderUI();
    });
  },
}
