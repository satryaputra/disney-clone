// navbar-hover
// shop
const shop = document.querySelector(".shop");
const navHoverShop = document.querySelector(".nav-hover-shop");

shop.addEventListener("mouseover", () => {
  navHoverShop.style.display = "block";
});

shop.addEventListener("mouseleave", () => {
  navHoverShop.style.display = "none";
});

// trending
const trending = document.querySelector(".trending");
const navHoverTrending = document.querySelector(".nav-hover-trending");

trending.addEventListener("mouseover", () => {
  navHoverTrending.style.display = "block";
});

trending.addEventListener("mouseleave", () => {
  navHoverTrending.style.display = "none";
});

// more
const more = document.querySelector(".more");
const navHoverMore = document.querySelector(".nav-hover-more");

more.addEventListener("mouseover", () => {
  navHoverMore.style.display = "block";
});

more.addEventListener("mouseleave", () => {
  navHoverMore.style.display = "none";
});

// Button
var cards = document.getElementsByClassName("card");

function showMore() {
  var button = document.querySelector("button");
  button.style.display = "none";

  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("hidden");
  }
}
