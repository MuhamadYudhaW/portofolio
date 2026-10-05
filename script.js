/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typingText");

const typingWords = [
    "Digital Administration",
    "Data Management",
    "Data Analysis",
    "HR Support",
    "Technology & Design"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 50;
const pauseAfterTyping = 1800;
const pauseAfterDeleting = 500;


function typeEffect() {

    if (!typingText) return;

    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                pauseAfterTyping
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {
                wordIndex = 0;
            }

            setTimeout(
                typeEffect,
                pauseAfterDeleting
            );

            return;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );
}


/* Jalankan typing effect */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        typeEffect();
    }
);


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }
);


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("active");

        }
    );

}


/* Tutup menu setelah memilih menu */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                if (navMenu) {
                    navMenu.classList.remove("active");
                }

            }
        );

    }
);


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener(
    "scroll",
    () => {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const scrollPercentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        scrollProgress.style.width =
            `${scrollPercentage}%`;

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    let currentSection = "";

    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        (link) => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* Jalankan sekali saat halaman dibuka */

updateActiveNavigation();


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    const target =
                        document.querySelector(targetId);

                    if (!target) return;

                    event.preventDefault();

                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;

                    const targetPosition =
                        target.offsetTop -
                        navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        }
    );


/* =========================================================
   PARTICLE BACKGROUND
========================================================= */

const particlesContainer =
    document.querySelector(".particles");


function createParticles() {

    if (!particlesContainer) return;

    const particleCount =
        window.innerWidth < 600
            ? 20
            : 40;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");


        /* Posisi horizontal random */

        particle.style.left =
            `${Math.random() * 100}%`;


        /* Durasi animasi random */

        particle.style.animationDuration =
            `${8 + Math.random() * 12}s`;


        /* Delay random */

        particle.style.animationDelay =
            `${Math.random() * 10}s`;


        /* Ukuran random */

        const size =
            2 + Math.random() * 3;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        particlesContainer.appendChild(
            particle
        );

    }

}


createParticles();


/* =========================================================
   CARD MOUSE GLOW
========================================================= */

const glowCards =
    document.querySelectorAll(
        ".project-card, .skill-card, .certification-card, .contact-card"
    );


glowCards.forEach(
    (card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                card.style.background =
                    `
                    radial-gradient(
                        300px circle at ${x}px ${y}px,
                        rgba(56, 189, 248, 0.08),
                        rgba(30, 41, 59, 0.35)
                    )
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.background =
                    "rgba(30, 41, 59, 0.35)";

            }
        );

    }
);


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                const rect =
                    button.getBoundingClientRect();


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


                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${x}px`;

                ripple.style.top =
                    `${y}px`;

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255, 255, 255, 0.2)";

                ripple.style.transform =
                    "scale(0)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.animation =
                    "buttonRipple 0.6s linear";


                button.style.position =
                    "relative";

                button.style.overflow =
                    "hidden";


                button.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    }
);


/* =========================================================
   BUTTON RIPPLE ANIMATION
========================================================= */

const rippleStyle =
    document.createElement("style");

rippleStyle.textContent = `

    @keyframes buttonRipple {

        to {
            transform: scale(2);
            opacity: 0;
        }

    }

`;

document.head.appendChild(
    rippleStyle
);


/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".btn-primary"
    );


magneticButtons.forEach(
    (button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

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
                    `
                    translate(
                        ${x * 0.08}px,
                        ${y * 0.08}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    }
);


/* =========================================================
   PROFILE CARD PARALLAX
========================================================= */

const profileCard =
    document.querySelector(".profile-card");


if (profileCard) {

    document.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth < 900
            ) {
                return;
            }


            const x =
                (window.innerWidth / 2 -
                event.clientX) / 60;

            const y =
                (window.innerHeight / 2 -
                event.clientY) / 60;


            profileCard.style.transform =
                `
                perspective(1000px)
                rotateY(${x}deg)
                rotateX(${y}deg)
                `;

        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "perspective(1000px) rotateY(0) rotateX(0)";

        }
    );

}


/* =========================================================
   ESC KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navMenu
        ) {

            navMenu.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   RESIZE HANDLER
========================================================= */

window.addEventListener(
    "resize",
    () => {

        /*
         * Reload particles agar jumlahnya
         * menyesuaikan ukuran layar.
         */

        if (
            window.innerWidth < 600 &&
            particlesContainer
        ) {

            particlesContainer.innerHTML = "";

            createParticles();

        }

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cMuhamad Yudha Waningpati Portfolio",
    "color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
    "Digital Administration | Data Management | Data Analysis | HR Support"
);
