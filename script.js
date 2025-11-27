// ================= PRODUCT DATA WITH IMAGES =================
const products = [
    // HOT DRINKS
    { id: 1, name: "Masala Chai", price: 20, category: "hot", img: "image/Masala-Chai.jpg" },
    { id: 2, name: "Ginger Tea", price: 25, category: "hot", img: "image/ginger-tea.jpg" },
    { id: 3, name: "Hot Coffee", price: 40, category: "hot", img: "image/hot-coffee.jpg" },
    { id: 4, name: "Black Coffee", price: 35, category: "hot", img: "image/black-coffee.jpg" },
    { id: 5, name: "Hot Chocolate", price: 60, category: "hot", img: "image/hot-chocolate.jpg" },

    // COLD DRINKS
    { id: 6, name: "Cold Coffee", price: 120, category: "cold", img: "image/cold-coffee.jpg" },
    { id: 7, name: "Ice Tea", price: 90, category: "cold", img: "image/ice-tea.jpg" },
    { id: 8, name: "Lemon Soda", price: 50, category: "cold", img: "image/lemon-soda.jpg" },
    { id: 9, name: "Orange Juice", price: 70, category: "cold", img: "image/orange-juice.jpg" },
    { id: 10, name: "Cold Coca-Cola", price: 40, category: "cold", img: "image/coca-cola.jpg" },
    { id: 11, name: "Cold Sprite", price: 40, category: "cold", img: "image/Cold-Sprite.jpg" },
    { id: 12, name: "Cold Fanta", price: 40, category: "cold", img: "image/Cold-Fanta.jpg" },

    // SANDWICHES
    { id: 13, name: "Veg Sandwich", price: 80, category: "sandwich", img: "image/veg-sandwich.jpg" },
    { id: 14, name: "Cheese Sandwich", price: 110, category: "sandwich", img: "image/cheese-sandwich.jpg" },
    { id: 15, name: "Club Sandwich", price: 130, category: "sandwich", img: "image/club-sandwich.jpg" },
    { id: 16, name: "Paneer Grilled Sandwich", price: 150, category: "sandwich", img: "image/paneer-sandwich.jpg" },
    { id: 17, name: "Veg Grilled Sandwich", price: 120, category: "sandwich", img: "image/veg-grilled-sandwich.jpg" },

    // MAGGI
    { id: 18, name: "Veg Maggi", price: 60, category: "maggi", img: "image/veg-maggi.jpg" },
    { id: 19, name: "Cheese Maggi", price: 90, category: "maggi", img: "image/cheese-maggi.jpg" },

    // NOODLES
    { id: 20, name: "Veg Noodles", price: 90, category: "noodles", img: "image/veg-noodles.jpg" },
    { id: 21, name: "Hakka Noodles", price: 110, category: "noodles", img: "image/hakka-noodles.jpg" },
    { id: 22, name: "Schezwan Noodles", price: 120, category: "noodles", img: "image/schezwan-noodles.jpeg" },

    // BITES
    { id: 23, name: "French Fries", price: 70, category: "bites", img: "image/fries.jpg" },
    { id: 24, name: "Peri Peri Fries", price: 90, category: "bites", img: "image/peri-fries.jpg" },

    // BURGERS
    { id: 25, name: "Veg Burger", price: 60, category: "burger", img: "image/veg-burger.jpg" },
    { id: 26, name: "Cheese Burger", price: 90, category: "burger", img: "image/cheese-burger.jpg" },

    // ROLLS
    { id: 27, name: "Veg Roll", price: 70, category: "roll", img: "image/veg-roll.jpg" },
    { id: 28, name: "Paneer Roll", price: 110, category: "roll", img: "image/paneer-roll.jpg" },

    // SHAKES
    { id: 29, name: "Chocolate Shake", price: 140, category: "shake", img: "image/chocolate-shake.jpg" },
    { id: 30, name: "Oreo Shake", price: 150, category: "shake", img: "image/oreo-shake.jpg" },
    { id: 31, name: "Strawberry Shake", price: 130, category: "shake", img: "image/strawberry-shake.jpg" },
    { id: 32, name: "Vanilla Shake", price: 120, category: "shake", img: "image/vanilla-shake.jpg" },
    { id: 33, name: "Mango Shake", price: 140, category: "shake", img: "image/mango-shake.jpg" },
    { id: 34, name: "KitKat Shake", price: 160, category: "shake", img: "image/kitkat-shake.jpg" },

    // MOJITO
    { id: 35, name: "Mint Mojito", price: 110, category: "mojito", img: "image/mint-mojito.jpg" },
    { id: 36, name: "Blue Lagoon", price: 130, category: "mojito", img: "image/blue-lagoon.jpg" },

    // DESSERTS
    { id: 37, name: "Brownie", price: 80, category: "dessert", img: "image/brownie.jpg" },
    { id: 38, name: "Chocolate Cake", price: 120, category: "dessert", img: "image/Chocolate-Cake.jpeg" },

    // PIZZA
    { id: 39, name: "Margherita Pizza", price: 180, category: "pizza", img: "image/pizza-margherita.jpg" },
    { id: 40, name: "Cheese Pizza", price: 200, category: "pizza", img: "image/pizza-cheese.jpg" },
    { id: 41, name: "Veg Pizza", price: 240, category: "pizza", img: "image/pizza-farmhouse.jpg" },
    { id: 42, name: "Paneer Tikka Pizza", price: 260, category: "pizza", img: "image/paneer-Tikka-pizza.jpg" },
    { id: 43, name: "Farmhouse Pizza", price: 280, category: "pizza", img: "image/pizza-farmhouse.jpg" },
    { id: 44, name: "Mexican Pizza", price: 300, category: "pizza", img: "image/pizza-mexican.jpg" },
];


// ================= SHOW PRODUCTS =================
const productGrid = document.getElementById("product-grid");

function renderProducts(filter = "all") {
    if (!productGrid) return;

    productGrid.innerHTML = "";

    const filteredProducts =
        filter === "all"
            ? products
            : products.filter((p) => p.category === filter.toLowerCase());

    filteredProducts.forEach((item) => {
        productGrid.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="${item.name}" class="card-img">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button 
                onclick="addToCart(${item.id})" 
                class="add-btn">
                Add to Cart
            </button>
        </div>`;
    });
}


// ================= FILTER BUTTONS =================
document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter.active").classList.remove("active");
        btn.classList.add("active");
        renderProducts(btn.dataset.filter);
    });
});


// ================= CART SYSTEM =================
function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const el = document.getElementById("cart-count");
    if (el) el.textContent = count;
}


// ================= ADD TO CART =================
function addToCart(id) {
    let cart = getCart();
    const product = products.find((p) => p.id === id);

    let existing = cart.find((item) => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.img,
            quantity: 1,
        });
    }

    saveCart(cart);
}


// ================= RENDER CART PAGE =================
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    if (!cartContainer) return;

    let cart = getCart();

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
        updateTotals();
        return;
    }

    cartContainer.innerHTML = cart
        .map(
            (item) => `
        <div class="cart-item">
            <img src="${item.image}" class="cart-img">
            
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

                <div class="qty-box">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>

                <button onclick="removeItem(${item.id})" class="remove-btn">Remove</button>
            </div>
        </div>
    `
        )
        .join("");

    updateTotals();
}


// ================= UPDATE QUANTITY =================
function changeQty(id, change) {
    let cart = getCart();
    let item = cart.find((i) => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter((i) => i.id !== id);
    }

    saveCart(cart);
    renderCart();
}


// ================= REMOVE ITEM =================
function removeItem(id) {
    let cart = getCart().filter((item) => item.id !== id);
    saveCart(cart);
    renderCart();
}


// ================= TOTALS =================
function updateTotals() {
    let cart = getCart();
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const sub = document.getElementById("subtotal");
    const total = document.getElementById("total");

    if (sub) sub.textContent = "₹" + subtotal;

    let delivery = cart.length > 0 ? 20 : 0;
    if (total) total.textContent = "₹" + (subtotal + delivery);
}


// ================= PAGE LOAD =================
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCart();

    const placeBtn = document.getElementById("place-order");
    if (placeBtn) {
        placeBtn.addEventListener("click", () => {
            const address = document.getElementById("address").value.trim();

            if (address === "") {
                alert("Please enter delivery address!");
                return;
            }

            alert("Order placed successfully!");
            localStorage.removeItem("cart");
            window.location.href = "index.html";
        });
    }
});


// ================= MOBILE NAV =================
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("mobile-toggle")) {
        document.querySelector(".nav").classList.toggle("open");
    }
});
