const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 357;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("chosen");
    let totalSeats = schemeSvg.querySelectorAll(".chosen").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});
const menuButton = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu-list");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("is-open");
});
