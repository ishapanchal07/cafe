// ===== PRODUCT DATA WITH IMAGES =====
const products = [
  {
    id: 1,
    name: "Masala Chai",
    price: 20,
    category: "hot",
    img: "https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-9-1024x1536.jpg"
  },
  {
    id: 2,
    name: "Cold Coffee",
    price: 120,
    category: "cold",
    img: "https://deliciousmadeeasy.com/wp-content/uploads/2018/04/chocoholic-cold-brew-coffee-1-of-1-7-scaled.jpg"
  },
  {
    id: 3,
    name: "Veg Sandwich",
    price: 80,
    category: "sandwich",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mxPW-2W_xvjQBjAAn4Go4OGQVlTpCAU4nA&s"
  },
  {
    id: 4,
    name: "Cheese Maggie",
    price: 90,
    category: "maggi",
    img: "https://static.india.com/wp-content/uploads/2024/08/FEATURE-IMAGE-6-1.jpg?impolicy=Medium_Widthonly&w=350&h=263"
  },
  {
    id: 5,
    name: "French Fries",
    price: 70,
    category: "bites",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBt5RdbNGN2PopQ1ox14cVQI7tiXglqrAIA&s"
  },
  {
    id: 6,
    name: "Chocolate Shake",
    price: 140,
    category: "shake",
    img: "https://noblepig.com/site/wp-content/uploads/2025/07/chocolate-freakshakes-mugs.jpg"
  },
  {
    id: 7,
    name: "Veg Pizza",
    price: 150,
    category: "pizza",
    img: "https://images.raasakarts.com/insecure/fit/1000/1000/ce/0/plain/https://rasakart-assets.s3.ap-south-1.amazonaws.com/3fa229/prods/zNu1s26lFpCncbdkgBxyLDMMXahKpDFySpnYR6je.jpg@webp"
  },
  {
    id: 8,
    name: "Mint Mojito",
    price: 110,
    category: "mojito",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxG0AJc_2JLUS5PF4f_T2UNCFsoKF3RjmAwA&s"
  }
];

// ===== RENDER PRODUCTS =====
const productGrid = document.getElementById("product-grid");

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  filtered.forEach(item => {
    productGrid.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.name}" class="card-img">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    `;
  });
}

renderProducts();

// ===== FILTER BUTTONS =====
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
});

// ===== CART FUNCTION =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent = cart.length;
}
