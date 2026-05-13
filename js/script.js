// Menu burger
const burger = document.querySelector(".menu-burger");
const menu = document.querySelector(".menu-liens");

burger.addEventListener("click", function() {
    menu.classList.toggle("actif");
});

// Animation d'apparition au défilement
const elements = document.querySelectorAll(".apparition");

const observateur = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observateur.unobserve(entry.target);
        }
    });
});

elements.forEach(function(element) {
    observateur.observe(element);
});