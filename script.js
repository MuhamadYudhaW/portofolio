// TYPING EFFECT
const texts = [
    "Digital Office Administration Student",
    "Data Management Enthusiast",
    "Graphic Design Volunteer",
    "Future Professional Worker"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing-text");

function typeEffect(){

    if(charIndex < texts[textIndex].length){

        typingText.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, speed);

    }else{

        setTimeout(eraseEffect, 1500);

    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);

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

document.addEventListener("DOMContentLoaded", function(){
    if(texts.length){
        setTimeout(typeEffect, 500);
    }
});

// NAVBAR SCROLL
window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});

// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", ()=>{

        navLinks.classList.remove("active");

    });

});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".skill-card, .about-card, .contact-card"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .6s ease";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();