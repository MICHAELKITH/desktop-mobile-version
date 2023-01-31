const menuBtn = document.querySelector(".bar-toggle");
const menu = document.querySelector(".menu");
const closeBtn = document.getElementById("close-menu");
const menuNav = document.querySelector(".navbar-links");
const navItems = document.querySelectorAll(".nav-item");

const body = document.querySelector("body");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
closeBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

navItems.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});


