const menuBtn = document.querySelector('.bar-toggle');
const menu = document.querySelector('.menu');
const closeBtn = document.getElementById('close-menu');
// const menuNav = document.querySelector('.navbar-links');
const navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});
