let berger = document.querySelector(".lines");
let menu = document.querySelector(".nav-menu");
let navbar = document.querySelector(".navbar");

berger.addEventListener("click", () => {
  menu.classList.toggle("hide-res");
  navbar.classList.toggle("h-nav-resp");
});
