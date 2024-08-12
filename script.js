let lines = document.querySelector(".lines");
let menu = document.querySelector(".nav-menu");
let navbar = document.querySelector(".navbar");

lines.addEventListener("click", () => {
  menu.classList.toggle("hide-res");
  navbar.classList.toggle("h-nav-resp");
});
