/* ------------------ PRODUCT DATA ------------------ */

const products = [
  // BITES
  { id: 1, category: "bites", name: "Maska Bun", price: 20, img: "https://images.unsplash.com/photo-1587248720328-ca41d2b3e01e" },
  { id: 2, category: "bites", name: "French Fries", price: 80, img: "https://images.unsplash.com/photo-1604908554161-77f3d7d4d6f4" },
  { id: 3, category: "bites", name: "Peri Peri Fries", price: 100, img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },

  // SANDWICHES  
  { id: 10, category: "sandwich", name: "Veg Cheese Sandwich", price: 80, img: "https://images.unsplash.com/photo-1603042111749-89e57dad1c95" },
  { id: 11, category: "sandwich", name: "Corn Cheese Sandwich", price: 90, img: "https://images.unsplash.com/photo-1528736235302-52922df5c122" },
  { id: 12, category: "sandwich", name: "Paneer Grilled Sandwich", price: 120, img: "https://images.unsplash.com/photo-1639024131671-dc3056a8322c" },

  // MAGGI  
  { id: 20, category: "maggi", name: "Plain Maggi", price: 40, img: "https://images.unsplash.com/photo-1627369983197-e7b4e27dd648" },
  { id: 21, category: "maggi", name: "Cheese Maggi", price: 70, img: "https://images.unsplash.com/photo-1601050690597-7f3ab0a21978" },

  // SHAKES  
  { id: 30, category: "shake", name: "Chocolate Shake", price: 100, img: "https://images.unsplash.com/photo-1601924582971-dc6f5b2b5c38" },
  { id: 31, category: "shake", name: "Oreo Shake", price: 120, img: "https://images.unsplash.com/photo-1526401485004-2fa806b5faff" },

  // COLD DRINKS  
  { id: 40, category: "cold", name: "Cold Coffee", price: 80, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 41, category: "cold", name: "Cold Coffee Ice Cream", price: 100, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a" },

  // MOJITO  
  { id: 50, category: "mojito", name: "Classic Mojito", price: 80, img: "https://images.unsplash.com/photo-1551022372-0bd22a88908b" },
  { id: 51, category: "mojito", name: "Blue Lagoon Mojito", price: 90, img: "https://images.unsplash.com/photo-1560472356-4eb46d32d1d9" },

  // DESSERT  
  { id: 60, category: "dessert", name: "Brownie", price: 80, img: "https://images.unsplash.com/photo-1599785209792-36c8c43213da" }
];

/* ------------------ CART SYSTEM ------------------ */

let cart = JSON.parse(localStorage.getItem("cart")) || {};

function updateCartStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").textContent = count;
}

/* ------------------ PRODUCT CARD RENDER ------------------ */

function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const qty = cart[p.id]?.qty || 0;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>

      <div class="qty-box">
        <button class="qty-btn" onclick="decreaseQty(${p.id})">−</button>
        <span id="qty-${p.id}" class="qty">${qty}</span>
        <button class="qty-btn" onclick="increaseQty(${p.id})">+</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ------------------ QTY BUTTONS ------------------ */

function increaseQty(id) {
  if (!cart[id]) {
    cart[id] = { ...products.find(p => p.id === id), qty: 1 };
  } else {
    cart[id].qty++;
  }

  document.getElementById(`qty-${id}`).textContent = cart[id].qty;
  updateCartStorage();
}

function decreaseQty(id) {
  if (!cart[id]) return;

  if (cart[id].qty === 1) {
    delete cart[id];
  } else {
    cart[id].qty--;
  }

  document.getElementById(`qty-${id}`).textContent = cart[id]?.qty || 0;
  updateCartStorage();
}

/* ------------------ FILTER BUTTONS ------------------ */

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
});

document.getElementById("place-order").addEventListener("click", function () {
  const address = document.getElementById("address").value.trim();

  if (!address) {
    alert("Please enter delivery address.");
    return;
  }

  // Save order or clear cart (optional)
  localStorage.removeItem("cart");

  // Redirect to success page
  window.location.href = "success.html";
});


/* ------------------ INIT ------------------ */

updateCartCount();
renderProducts();
