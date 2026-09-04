//IMPORT
import { products } from "../Data/dataset.js";
 
//COMPONENT CODES
export const stockAvailabilityChart = {
  //------------------------------------
  //Data properties
  data: [],
 
  //------------------------------------
  //Component User Interface (UI)
  renderUI(chartID) {
    //Load the product data used by this chart.
    this.data = products;
 
    //Count how many products are in stock vs out of stock.
    const inStockCount = this.data.filter(product => product.inStock).length;
    const outOfStockCount = this.data.length - inStockCount;
 
    //Create a doughnut chart showing overall stock availability.
    new Chart(document.getElementById(chartID), {
      type: "doughnut",
      data: {
        labels: ["In Stock", "Out of Stock"],
        datasets: [{
          data: [inStockCount, outOfStockCount],
          backgroundColor: ["#198754", "#dc3545"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: "Stock Availability" },
          legend: { position: "bottom" }
        }
      }
    });
  }
}

