const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const list = document.getElementById("list");


mobileMenuIcon.addEventListener("click", function() {

    list.classList.toggle("active-menu")
})
