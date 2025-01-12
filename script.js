/**************************************
 * script.js
 **************************************/

/* 1. Mobile Nav Toggle */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* 2. Fade-In on Scroll */
const sections = document.querySelectorAll("section");

function handleScrollAnimation() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
