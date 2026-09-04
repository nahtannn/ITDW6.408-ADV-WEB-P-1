//Import
import { products } from '../Data/dataset.js';
import { localStorage } from './local-storage.js';

//Store the selected products and provide cart actions
export const cart = {
    selectedData: [],

    //Restore any previously saved cart when the app starts
    init() {
        this.selectedData = localStorage.loadData();
    },

    // Save cart
    saveCart() {
        localStorage.saveData(this.selectedData);
    },

    //Add a product to the cart (or bump its quantity if it's already there)
    addToCart(id) {
        //ids coming from data-id attributes are strings, so normalize to a number
        const numericId = Number(id);
        const productToAdd = products.find(item => item.id === numericId);

        //bail out if the product doesn't exist or is out of stock
        if (!productToAdd || !productToAdd.inStock) return;

        const existingItem = this.selectedData.find(item => item.id === numericId);
        if (existingItem) {
            //only increase if there's still stock available
            if (existingItem.quantity < existingItem.stockQuantity) {
                existingItem.quantity++;
            }
        } else {
            this.selectedData.push({
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                stockQuantity: productToAdd.stockQuantity,
                quantity: 1
            });
        }

        this.saveCart();
        this.renderUI('cartContainer');
    },

    //render cart
    renderUI(cartID) {
        let selectedUI = ''
        let grandTotal = 0;
        let itemCount = 0;

        this.selectedData.forEach(item => {
            const subtotal = item.price * item.quantity;
            grandTotal += subtotal;
            itemCount += item.quantity;
            selectedUI += `
                <div class="border rounded p-2 mb-2">
                    <h6>${item.name}</h6>
                    <div>Price: $${item.price}</div>
                    <div>Subtotal: $${subtotal}</div>
                    <div class="mt-2">
                        <button class="btn btn-danger btn-sm decrease-btn" data-id="${item.id}">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-success btn-sm increase-btn" data-id="${item.id}">+</button>
                    </div>
                </div>
            `;
        });

        //find the cart container that will display the generated markup.
        let cartItems = document.getElementById(cartID);
        //clear the cart display
        cartItems.innerHTML = '';
        //Render the updated cart summary and its checkout controls
        cartItems.innerHTML = `
            <div>
                <div class="card-header bg-success text-white">
                    Cart (Items: <span>${itemCount}</span>)
                </div>
                <div class="card-body">
                    <div id="cart-items">
                        ${selectedUI || '<p class="text-muted">Your cart is empty.</p>'}
                    </div>
                    <hr>
                    <h5>Items: <span id="total-items">${itemCount}</span></h5>
                    <h4>Grand Total: $<span id="totalCost">${grandTotal.toFixed(2)}</span></h4>
                    <button class="btn btn-success w-100 mt-3" id="checkoutBtn">Checkout</button>
                </div>
            </div>
        `;
        this.addEvents();
    },

    // Handle + and - buttons
    addEvents() {
        // add click event to all "decrease-btn" button
        let decreaseButtons = document.querySelectorAll('.decrease-btn');
        //loop through the NodeList and attach event listeners to each button
        decreaseButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                let id = event.target.dataset.id;
                this.decreaseQuantity(id);
                cart.renderUI('cartContainer')
            });
        });

        // add click event to all "increase-btn" button
        let increaseButtons = document.querySelectorAll('.increase-btn');
        //loop through the NodeList and attach event listeners to each button
        increaseButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                let id = event.target.dataset.id;
                this.increaseQuantity(id);
                cart.renderUI('cartContainer')
            });
        });

        // add click event to the "checkoutBtn" button
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            //do not place an order when the cart has no items
            if (this.selectedData.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            //Calculate the order total and item count before showing the confirmation message.
            const itemCount = this.selectedData.reduce((sum, item) => sum + item.quantity, 0);
            const total = this.selectedData.reduce((sum, item) => sum + item.price * item.quantity, 0);
            alert(`Order Successfully Placed!\nItems: ${itemCount}\nTotal: $${total.toFixed(2)}\nThank you for your purchase!`);
            //Empty and save the cart after the order is placed
            this.selectedData = [];
            this.saveCart();
            cart.renderUI('cartContainer');
        });
    },

    //Increase the quantity of an item in the cart
    increaseQuantity(id) {
        const numericId = Number(id);
        // Find the cart item and check it against its own stored stock limit
        const cartItem = this.selectedData.find(item => item.id === numericId);
        if (cartItem && cartItem.quantity < cartItem.stockQuantity) {
            cartItem.quantity++;
            this.saveCart();
        }
    },

    //Decrease the quantity of an item in the cart
    decreaseQuantity(id) {
        const numericId = Number(id);
        //reduce the selected item's quantity by 1
        const cartItem = this.selectedData.find(item => item.id === numericId);
        if (!cartItem) return;
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            //remove the item from the cart if its quantity is 0 or less
            this.selectedData = this.selectedData.filter(item => item.id !== numericId);
        }
        this.saveCart();
    }
}