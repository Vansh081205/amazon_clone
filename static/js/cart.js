// Sample products (in real case, this will come from your product listing page)
const products = [
    { id: 1, name: "Product 1", price: 14.49, img: "/static/assets/product2-1.jpg" },
    { id: 2, name: "Product 2", price: 14.99, img: "/static/assets/product2-2.jpg" },
    { id: 3, name: "Product 3", price: 15.49, img: "/static/assets/product2-3.jpg" },
];

// Function to add an item to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(item => item.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Function to display cart items
function updateCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <img src="${item.img}" width="50px" alt="${item.name}">
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <p>Quantity: <span class="item-quantity">${item.quantity}</span></p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);

        totalPrice += item.price * item.quantity;
    });

    totalPriceContainer.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Checkout functionality (can be connected to a payment gateway)
document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // You can redirect to a checkout page or show a modal here
});

// Call updateCart on page load to populate cart
updateCart();
document.querySelector('.nav-cart').addEventListener('click', function() {
    window.location.href = '/cart';  // Redirects to the cart page
});

