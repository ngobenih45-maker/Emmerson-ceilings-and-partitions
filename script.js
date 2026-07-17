// ==============================
// Emmerson Ceilings & Partitions
// script.js
// ==============================

// Create Mobile Menu Button
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

const menuBtn = document.createElement("div");
menuBtn.className = "menu-btn";
menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

navbar.insertBefore(menuBtn, navLinks);

// Toggle Mobile Menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close Menu When Clicking a Link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
});

// Smooth Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .gallery-grid img, .about-content").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";
    observer.observe(el);
});

// Highlight Active Navigation Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// Console Message
console.log("Website Developed by Hlaks Web Wonders");