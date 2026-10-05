// =============================
// TYPING EFFECT
// =============================

const typingElement = document.querySelector(".typing");

const typingTexts = [
    "Digital Administration",
    "Data Management",
    "Data Analysis",
    "HR Support",
    "Technology & Design"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= typingTexts.length) {
                textIndex = 0;
            }

        }

    }

    const speed = isDeleting ? 45 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


// =============================
// NAVBAR SCROLL EFFECT
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =============================
// MOBILE MENU
// =============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");

    });


    // Tutup menu setelah memilih navigasi
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

}


// =============================
// REVEAL ON SCROLL
// =============================
// PENTING:
// CSS menggunakan .reveal.active
// Jadi JavaScript harus menambahkan
// class "active", bukan "visible".

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Ambil semua elemen yang memiliki class .reveal
document.querySelectorAll(".reveal").forEach((element, index) => {

    // Delay ringan agar animasi tidak muncul bersamaan
    element.style.transitionDelay =
        `${Math.min(index % 5, 4) * 70}ms`;

    revealObserver.observe(element);

});


// =============================
// SCROLL PROGRESS
// =============================

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (documentHeight <= 0) return;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;

});


// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section[id]");
const navigationLinks =
    document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navbarHeight =
            navbar ? navbar.offsetHeight : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


// =============================
// PARTICLE BACKGROUND
// =============================

const particleContainer =
    document.querySelector(".particles");

let particles = [];

function createParticles() {

    if (!particleContainer) return;

    particleContainer.innerHTML = "";

    particles = [];

    const isMobile = window.innerWidth <= 600;

    const particleCount =
        isMobile ? 15 : 30;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        const size =
            Math.random() * 4 + 2;

        const left =
            Math.random() * 100;

        const top =
            Math.random() * 100;

        const duration =
            Math.random() * 8 + 6;

        const delay =
            Math.random() * 5;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${left}%`;

        particle.style.top =
            `${top}%`;

        particle.style.animationDuration =
            `${duration}s`;

        particle.style.animationDelay =
            `${delay}s`;


        particleContainer.appendChild(
            particle
        );

        particles.push(particle);

    }

}

createParticles();


// =============================
// PARTICLE RESIZE
// =============================

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        createParticles();

    }, 250);

});


// =============================
// CARD GLOW EFFECT
// =============================

const glowCards = document.querySelectorAll(
    ".skill-card, .timeline-content, .contact-card"
);

glowCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.removeProperty(
            "--mouse-x"
        );

        card.style.removeProperty(
            "--mouse-y"
        );

    });

});


// =============================
// BUTTON RIPPLE EFFECT
// =============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple =
            document.createElement("span");

        const rect =
            this.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        const x =
            event.clientX -
            rect.left -
            size / 2;

        const y =
            event.clientY -
            rect.top -
            size / 2;


        ripple.style.width =
            `${size}px`;

        ripple.style.height =
            `${size}px`;

        ripple.style.left =
            `${x}px`;

        ripple.style.top =
            `${y}px`;

        ripple.classList.add("ripple");


        this.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// =============================
// MAGNETIC BUTTON
// =============================

document.querySelectorAll(
    ".btn-primary"
).forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform = "";

        }
    );

});


// =============================
// PROFILE CARD PARALLAX
// =============================

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 25;

            const rotateY =
                (centerX - x) / 25;


            profileCard.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "";

        }
    );

}


// =============================
// ESCAPE KEY
// =============================

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            if (navLinks) {
                navLinks.classList.remove(
                    "active"
                );
            }

            if (hamburger) {
                hamburger.classList.remove(
                    "active"
                );
            }

        }

    }
);


// =============================
// REDUCED MOTION
// =============================

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

if (prefersReducedMotion.matches) {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            element.classList.add("active");

        });

}


// =============================
// CONSOLE BRANDING
// =============================

console.log(
    "%cMuhamad Yudha Waningpati",
    "color:#38bdf8;font-size:20px;font-weight:bold;"
);

console.log(
    "%cDigital Administration • Data Management • Data Analysis • HR Support",
    "color:#94a3b8;font-size:12px;"
);
