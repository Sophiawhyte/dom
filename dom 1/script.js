// script.js

// Array of items with details
var items = [
    { name: "T-shirt", price: 15.99, quantity: 2, image: "./CGPS.jpg" },
    { name: "Jeans", price: 29.99, quantity: 1, image: "./CGPS.jpg" },
    { name: "Sneakers", price: 49.99, quantity: 1, image: "./CGPS.jpg" }
];

// Function to display items in the cart
function displayCart() {
    var cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear previous items

    var total = 0;

    // Loop through items array and display each item
    items.forEach(function(item) {
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // Item name and price
        var namePrice = document.createElement("span");
        namePrice.textContent = item.name + " - $" + (item.price * item.quantity).toFixed(2) + " (" + item.quantity + " pcs)";
        itemDiv.appendChild(namePrice);

        // Quantity adjustment buttons
        var plusBtn = document.createElement("button");
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", function() {
            item.quantity++;
            displayCart(); // Update the display after quantity change
        });
        itemDiv.appendChild(plusBtn);

        var minusBtn = document.createElement("button");
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", function() {
            if (item.quantity > 1) { // Quantity can't be less than 1
                item.quantity--;
                displayCart(); // Update the display after quantity change
            }
        });
        itemDiv.appendChild(minusBtn);

        cartItemsDiv.appendChild(itemDiv);

        total += item.price * item.quantity;
    });

    // Display total price
    var totalDiv = document.getElementById("total");
    totalDiv.textContent = "Total: $" + total.toFixed(2);
}

// Call displayCart function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});

// script.js

// Array of items with details
var items = [
    { name: "T-shirt", price: 15.99, quantity: 2 , image: "./CGPS.jpg"},
    { name: "Jeans", price: 29.99, quantity: 1 , image: "./CGPS.jpg"},
    { name: "Sneakers", price: 49.99, quantity: 1, image: "./CGPS.jpg" }
];

// Function to display items in the cart
function displayCart() {
    var cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear previous items

    var total = 0;

    // Loop through items array and display each item
    items.forEach(function(item, index) {
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // Item name and price
        var namePrice = document.createElement("span");
        namePrice.textContent = item.name + " - $" + (item.price * item.quantity).toFixed(2) + " (" + item.quantity + " pcs)";
        itemDiv.appendChild(namePrice);

        // Quantity adjustment buttons
        var plusBtn = document.createElement("button");
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", function() {
            item.quantity++;
            displayCart(); // Update the display after quantity change
        });
        itemDiv.appendChild(plusBtn);

        var minusBtn = document.createElement("button");
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", function() {
            if (item.quantity > 1) { // Quantity can't be less than 1
                item.quantity--;
                displayCart(); // Update the display after quantity change
            }
        });
        itemDiv.appendChild(minusBtn);

        // Delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            // Remove the item from the array
            items.splice(index, 1);
            displayCart(); // Update the display after deletion
        });
        itemDiv.appendChild(deleteBtn);

        cartItemsDiv.appendChild(itemDiv);

        total += item.price * item.quantity;
    });

    // Display total price
    var totalDiv = document.getElementById("total");
    totalDiv.textContent = "Total: $" + total.toFixed(2);
}

// Call displayCart function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});

// script.js

// Array of items with details
var items = [
    { name: "T-shirt", price: 15.99, quantity: 2, liked: false, image: "./CGPS.jpg"},
    { name: "Jeans", price: 29.99, quantity: 1, liked: false, image: "./CGPS.jpg" },
    { name: "Sneakers", price: 49.99, quantity: 1, liked: false , image: "./CGPS.jpg"}
];

// Function to display items in the cart
function displayCart() {
    var cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear previous items

    var total = 0;

    // Loop through items array and display each item
    items.forEach(function(item, index) {
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // Item name and price
        var namePrice = document.createElement("span");
        namePrice.textContent = item.name + " - $" + (item.price * item.quantity).toFixed(2) + " (" + item.quantity + " pcs) " + item.image;
        itemDiv.appendChild(namePrice);

        // Quantity adjustment buttons
        var plusBtn = document.createElement("button");
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", function() {
            item.quantity++;
            displayCart(); // Update the display after quantity change
        });
        itemDiv.appendChild(plusBtn);

        var minusBtn = document.createElement("button");
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", function() {
            if (item.quantity > 1) { // Quantity can't be less than 1
                item.quantity--;
                displayCart(); // Update the display after quantity change
            }
        });
        itemDiv.appendChild(minusBtn);

        // Like button
        var likeBtn = document.createElement("button");
        likeBtn.innerHTML = item.liked ? "&#x2665;" : "&#x2661;";
        likeBtn.classList.add(item.liked ? "liked" : "not-liked");
        likeBtn.addEventListener("click", function() {
            item.liked = !item.liked;
            likeBtn.innerHTML = item.liked ? "&#x2665;" : "&#x2661;";
            likeBtn.classList.toggle("liked");
            likeBtn.classList.toggle("not-liked");
        });
        itemDiv.appendChild(likeBtn);

        // Delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            // Remove the item from the array
            items.splice(index, 1);
            displayCart(); // Update the display after deletion
        });
        itemDiv.appendChild(deleteBtn);

        cartItemsDiv.appendChild(itemDiv);

        total += item.price * item.quantity;
    });

    // Display total price
    var totalDiv = document.getElementById("total");
    totalDiv.textContent = "Total: $" + total.toFixed(2);
}

// Call displayCart function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});

// Loop through items array and display each item
items.forEach(function(item, index) {
    // ... Code to display item details

    // Update total price
    total += item.price * item.quantity;
});

// Display total price
var totalDiv = document.getElementById("total");
totalDiv.textContent = "Total: $" + total.toFixed(2);
