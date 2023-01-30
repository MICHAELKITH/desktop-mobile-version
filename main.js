const menuBtn = document.querySelector(".bar-toggle");
	const menu =
		document.querySelector(".menu");

	const menuNav =
		document.querySelector(".navbar-links");      
const navItems = document.querySelectorAll(".nav-item");
const navbarLinks = document.querySelector(".navbar-links");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Reset the menu state
    showMenu = true;
  } else{
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Reset the menu state
    showMenu = false;
  }
}
