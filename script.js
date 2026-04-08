const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const pastryButton = document.getElementById("pastry");
const coffeeButton = document.getElementById("coffee");
const menuSllider = document.getElementById("slider");
const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");
const cartContainer = document.getElementById("cart-container");
const cartList = document.getElementById("cart-list");
const addToCartItems = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");

openButton.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
});

openCart.addEventListener("click", () => {
  cartContainer.classList.remove("translate-x-full");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
});

closeCart.addEventListener("click", () => {
  cartContainer.classList.add("translate-x-full");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !openButton.contains(e.target)) {
    sidebar.classList.add("translate-x-full");
  }
  if (!cartContainer.contains(e.target) && !openCart.contains(e.target)) {
    cartContainer.classList.add("translate-x-full");
  }
});

pastryButton.addEventListener("click", () => {
  menuSllider.style.transform = "translateX(0%)";
});

coffeeButton.addEventListener("click", () => {
  menuSllider.style.transform = "translateX(-100%)";
});

const products = [
  {
    id: 1,
    name: "Croisant",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1681072368184-a5a906887cf2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "pastry",
  },
  {
    id: 2,
    name: "Puff Pastry",
    price: 45000,
    image:
      "https://www.tulipchocolate.com/hs-fs/hubfs/puff%20pastry.jpg?width=521&height=347&name=puff%20pastry.jpg",
    category: "pastry",
  },
  {
    id: 3,
    name: "Short Pastry",
    price: 5000,
    image:
      "https://images.pexels.com/photos/29143157/pexels-photo-29143157.jpeg?_gl=1*byrk3z*_ga*MTM4NjI5NTI2Ny4xNzc0NTgzMDA4*_ga_8JE65Q40S6*czE3NzUwMzI5ODgkbzckZzEkdDE3NzUwMzMxNjckajQxJGwwJGgw",
    category: "pastry",
  },
  {
    id: 4,
    name: "coffee latte",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1763208387697-fe0a913bfed9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "drink",
  },
  {
    id: 5,
    name: "americano",
    price: 10000,
    image:
      "https://images.unsplash.com/photo-1763208387697-fe0a913bfed9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "drink",
  },
  {
    id: 6,
    name: "macchiato",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1763208387697-fe0a913bfed9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "drink",
  },
];
const containers = {
  pastry: document.getElementById("food-container"),
  drink: document.getElementById("drink-container"),
};

function rederProduct() {
  Object.values(containers).forEach((container) => {
    container.innerHTML = "";
  });

  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex flex-col items-center bg-orange-300 shadow-xl">
                <div class="overflow-hidden h-50 md:h-80 w-full">
                  <img
                    src="${product.image}"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>

                <h1 class="text-xl font-medium mt-5">${product.name}</h1>
                <p class="text-center px-5 mt-10 mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing <br />
                  Praesentium amet
                </p>
                <button
                  data-id="${product.id}"
                  class="add-to-cart bg-orange-700 text-white font-medium px-5 py-2 rounded-full hover:bg-orange-900 cursor-pointer mb-5"
                >
                  Add to cart
                </button>
              </div>
    `;
    containers[product.category].appendChild(div);
  });
}

rederProduct();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.dataset.id);
    addtoCart(id);
  }
});

let cart = [];

function addtoCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = products.find((p) => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="flex flex-col items-end gap-5 py-6 px-5">
            <div class="flex justify-between w-full">
              <h1 class="text-xl">${item.name}</h1>
              <p class="font-bold">Rp.${(item.price * item.qty).toLocaleString()}</p>
            </div>
            <div class="flex justify-end gap-4">
              <div
                class="flex items-center gap-3 ring-1 ring-gray-300 rounded-full px-4 py-2 bg-white shadow-sm"
              >
                <button
                  class="quantity-btn text-gray-600 hover:text-red-500 font-bold text-xl w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-50 transition"
                  data-action="decrease"
                  data-price="${item.price}"
                  data-id="${item.id}"
                >
                  -
                </button>
                <span
                  class="quantity w-8 text-center font-semibold text-gray-800"
                  >${item.qty}</span
                >
                <button
                  class="quantity-btn text-gray-600 hover:text-green-500 font-bold text-xl w-6 h-6 flex items-center justify-center rounded-full hover:bg-green-50 transition"
                  data-action="increase"
                  data-price="${item.price}"
                  data-id="${item.id}"
                >
                  +
                </button>
              </div>
            </div>
          </div>`;
    cartList.appendChild(li);
  });

  renderTotal();
  renderCartCount();
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("quantity-btn")) {
    const action = e.target.dataset.action;
    const id = parseInt(e.target.dataset.id);
    const item = cart.find((i) => i.id === id);

    if (!item) return;

    if (action === "increase") {
      item.qty++;
    } else if (action === "decrease") {
      item.qty--;
      if (item.qty === 0) {
        cart = cart.filter((i) => i.id !== id);
      }
    }
    renderCart();
  }
});

const totalPrice = document.getElementById("cart-total");

function renderTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalPrice.textContent = "Rp " + total.toLocaleString();
}

function getTotal() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function renderCartCount() {
  const totalItems = getTotal();
  cartCount.style.display = totalItems === 0 ? "none" : "flex";
  cartCount.textContent = totalItems;
}
