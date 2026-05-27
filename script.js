// =========================
// TYPING EFFECT
// =========================

const texts = [

    "Digital Office Administration Student",

    "Data Management Enthusiast",

    "Technology & Design Enthusiast",

    "Future Professional Worker"

];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typingText =
document.querySelector(".typing-text");

function typeEffect(){

    if(charIndex < texts[textIndex].length){

        typingText.textContent +=
        texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, speed);

    }else{

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }else{

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;

        }

        setTimeout(typeEffect, 500);

    }

}

document.addEventListener(
"DOMContentLoaded",

function(){

    if(texts.length){

        setTimeout(typeEffect, 500);

    }

});

// =========================
// NAVBAR EFFECT
// =========================

window.addEventListener("scroll",

function(){

    const navbar =
    document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

// =========================
// HAMBURGER MENU
// =========================

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click",

()=>{

    navLinks.classList.toggle("active");

});

// =========================
// CLOSE MENU MOBILE
// =========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click",

    ()=>{

        navLinks.classList.remove("active");

    });

});

// =========================
// REVEAL ANIMATION
// =========================

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(item => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.style.opacity = "1";

            item.style.transform =
            "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
    "translateY(70px)";

    item.style.transition =
    "all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// =========================
// BUTTON MAGNET EFFECT
// =========================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove",

    function(e){

        const position =
        button.getBoundingClientRect();

        const x =
        e.clientX - position.left -
        position.width / 2;

        const y =
        e.clientY - position.top -
        position.height / 2;

        button.style.transform =
        `translate(${x * 0.15}px,
        ${y * 0.25}px)`;

    });

    button.addEventListener("mouseleave",

    function(){

        button.style.transform =
        "translate(0px,0px)";

        button.style.transition =
        ".4s ease";

    });

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

buttons.forEach(button => {

    button.addEventListener("click",

    function(e){

        let ripple =
        document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        const x =
        e.clientX -
        e.target.getBoundingClientRect().left;

        const y =
        e.clientY -
        e.target.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;

        ripple.style.top = `${y}px`;

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// =========================
// FLOATING PARTICLES
// =========================

const hero =
document.querySelector(".hero");

for(let i = 0; i < 25; i++){

    let particle =
    document.createElement("span");

    particle.classList.add("particle");

    hero.appendChild(particle);

    let size =
    Math.random() * 6 + 2;

    particle.style.width =
    `${size}px`;

    particle.style.height =
    `${size}px`;

    particle.style.left =
    `${Math.random() * 100}%`;

    particle.style.animationDuration =
    `${Math.random() * 10 + 5}s`;

    particle.style.animationDelay =
    `${Math.random() * 5}s`;

}

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("mousemove",

function(e){

    const heroBg =
    document.querySelector(".hero-bg");

    let x =
    (window.innerWidth / 2 - e.pageX) / 40;

    let y =
    (window.innerHeight / 2 - e.pageY) / 40;

    heroBg.style.transform =
    `translate(${x}px, ${y}px)`;

});

// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar =
document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll",

()=>{

    const scroll =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scroll / height) * 100;

    progressBar.style.width =
    `${progress}%`;

});

// =========================
// GLOW EFFECT CARD
// =========================

const cards =
document.querySelectorAll(
".skill-card, .timeline-content, .contact-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove",

    function(e){

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(56,189,248,0.25),
            #1e293b 40%
        )`;

    });

    card.addEventListener("mouseleave",

    function(){

        card.style.background =
        "#1e293b";

    });

});

// =========================
// SMOOTH ACTIVE NAVBAR
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",

()=>{

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(a => {

        a.classList.remove("active");

        if(
            a.getAttribute("href")
            === `#${current}`
        ){

            a.classList.add("active");

        }

    });

});