// Menu burger
const burger = document.querySelector(".menu-burger");
const menu = document.querySelector(".menu-liens");

if (burger && menu) {
    burger.addEventListener("click", function() {
        menu.classList.toggle("actif");
    });
}

// Fermer le menu en cliquant sur un lien
const liens = document.querySelectorAll(".menu-liens a");

liens.forEach(function(lien) {
    lien.addEventListener("click", function() {
        menu.classList.remove("actif");
    });
});

// Fermer le menu en cliquant en dehors
document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove("actif");
    }
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