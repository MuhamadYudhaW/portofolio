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

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    // Pastikan elemen typing memang ditemukan
    if (!typingText) {
        console.warn("Elemen #typing-text tidak ditemukan.");
        return;
    }

    const words = [
        "Digital Administration",
        "Data Management",
        "Data Analysis",
        "HR Support",
        "Technology & Design"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            // Menambahkan huruf satu per satu
            typingText.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            // Kalau sudah selesai mengetik
            if (charIndex >= currentWord.length) {

                deleting = true;

                // Diam sebentar sebelum menghapus
                setTimeout(typeEffect, 1800);

                return;
            }

            // Kecepatan mengetik
            setTimeout(typeEffect, 80);

        } else {

            // Menghapus huruf satu per satu
            typingText.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            // Kalau sudah habis
            if (charIndex <= 0) {

                deleting = false;

                wordIndex++;

                // Kembali ke kata pertama
                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

                setTimeout(typeEffect, 400);

                return;
            }

            // Kecepatan menghapus
            setTimeout(typeEffect, 45);
        }
    }

    // Mulai animasi
    typeEffect();

});

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
