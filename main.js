function navToggle() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction(x) {
    x.classList.toggle("fa-minus-circle");
}