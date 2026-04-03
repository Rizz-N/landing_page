const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const pastryButton = document.getElementById("pastry");
const coffeeButton = document.getElementById("coffee");
const menuSllider = document.getElementById("slider");

openButton.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !openButton.contains(e.target)) {
    sidebar.classList.add("translate-x-full");
  }
});

pastryButton.addEventListener("click", () => {
  menuSllider.style.transform = "translateX(0%)";
});

coffeeButton.addEventListener("click", () => {
  menuSllider.style.transform = "translateX(-100%)";
});
