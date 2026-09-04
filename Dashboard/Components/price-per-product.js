//IMPORT
import { products } from "../Data/dataset.js";

//COMPONENT CODES
export const pricePerProductChart = {
  //------------------------------------
  //Data properties
  data: [],

  //------------------------------------
  //Component User Interface (UI)
  renderUI(chartID) {
    //Load the product data used by this chart.
    this.data = products; 

    //Create Data for a Pricing Chart
    const priceLabels = this.data.map(product => product.name);
    const priceValues = this.data.map(product => product.price);

    //Use Chart.js Bar Chart for Ratings
    //This will display a dashboard chart showing each product's average customer rating 
    // on a scale from 1 to 5 stars.
    new Chart(document.getElementById(chartID), {
      type: "bar",
      data: {
        labels: priceLabels,
        datasets: [{
            label: "Price per Product",
            data: priceValues,
            backgroundColor: [
              "#0d6efd",
              "#198754",
              "#ffc107",
              "#dc3545",
              "#6f42c1",
              "#20c997",
              "#fd7e14",
              "#6610f2",
              "#198754",
              "#0dcaf0" ],
            borderWidth: 1
        }]
        },
      options: {
        scales: {
            y: {min: 0, max: 4000 }
          }
       }
      }
    );
  }
}
