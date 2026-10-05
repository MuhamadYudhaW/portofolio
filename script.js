/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typing-text");

const roles = [
    "Digital Administration",
    "Data Management",
    "Data Analysis",
    "HR Support"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentRole.substring(0, characterIndex);

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;
        }

    } else {

        characterIndex--;

        typingText.textContent =
            currentRole.substring(0, characterIndex);

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typingEffect, speed);
}

typingEffect();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        const link =
            document.querySelector(
                `.nav-link[href="#${id}"]`
            );

        if (!link) return;

        if (
            scrollPosition >= top &&
            scrollPosition < top + height
        ) {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateNavigation
);

updateNavigation();


/* =========================================
   ESCAPE TO CLOSE MENU
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

    }

});
// ===============================
// TYPING TEXT ANIMATION
// ===============================

const typingText = document.getElementById("typing-text");

const words = [
    "Digital Administration",
    "Data Management",
    "Data Analysis",
    "HR Support",
    "Technology & Design"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

        setTimeout(typeEffect, 80);

    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

            setTimeout(typeEffect, 400);
            return;
        }

        setTimeout(typeEffect, 45);
    }
}

if (typingText) {
    typeEffect();
}
