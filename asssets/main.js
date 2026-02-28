

/* ---- MOBILE MENU ---- */
function myMenuFunction() {
    const navMenu = document.getElementById("myNavMenu");
    navMenu.classList.toggle("responsive");
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("myNavMenu").classList.remove("responsive");
    });
});

/* ---- HEADER SCROLL EFFECT ---- */
const navHeader = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navHeader.classList.add("scrolled");
    } else {
        navHeader.classList.remove("scrolled");
    }
});

/* ---- TYPED.JS ---- */
const typingEffect = new Typed(".typedText", {
    strings: ["Frontend Dev", "Backend Dev", "Web Developer", "CS Graduate"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2200,
    showCursor: false,   // using our own CSS cursor
});

/* ---- CAROUSEL ---- */

// Initialize dots for each carousel
function initDots() {
    const carousels = document.querySelectorAll(".project-carousel");
    carousels.forEach((carousel, carouselIndex) => {
        const slides = carousel.querySelectorAll(".carousel-slide");
        const dotsContainer = carousel.querySelector(".slide-dots");
        if (!dotsContainer) return;

        slides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.classList.add("dot");
            dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
            if (i === 0) dot.classList.add("active-dot");
            dot.addEventListener("click", (e) => {
                e.preventDefault();
                goToSlide(carouselIndex, i);
            });
            dotsContainer.appendChild(dot);
        });
    });
}

function updateDots(carouselIndex, activeIndex) {
    const dots = document.querySelectorAll(`#dots-${carouselIndex} .dot`);
    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === activeIndex);
    });
}

function getActiveIndex(slides) {
    let current = 0;
    slides.forEach((slide, i) => {
        if (slide.classList.contains("active")) current = i;
    });
    return current;
}

function goToSlide(carouselIndex, newIndex) {
    const carousels = document.querySelectorAll(".project-carousel");
    if (!carousels[carouselIndex]) return;
    const slides = carousels[carouselIndex].querySelectorAll(".carousel-slide");

    slides.forEach(s => s.classList.remove("active"));
    slides[newIndex].classList.add("active");
    updateDots(carouselIndex, newIndex);
}

function moveSlide(n, carouselIndex) {
    const carousels = document.querySelectorAll(".project-carousel");
    if (!carousels[carouselIndex]) return;
    const slides = carousels[carouselIndex].querySelectorAll(".carousel-slide");

    const current = getActiveIndex(slides);
    let next = current + n;

    if (next >= slides.length) next = 0;
    else if (next < 0) next = slides.length - 1;

    goToSlide(carouselIndex, next);
}

// Auto-advance each carousel independently
function startAutoPlay() {
    const carousels = document.querySelectorAll(".project-carousel");
    carousels.forEach((carousel, index) => {
        // Pause on hover
        carousel.addEventListener("mouseenter", () => clearInterval(carousel._timer));
        carousel.addEventListener("mouseleave", () => {
            carousel._timer = setInterval(() => moveSlide(1, index), 3500);
        });
        // Start
        carousel._timer = setInterval(() => moveSlide(1, index), 3500);
    });
}

/* ---- SCROLL REVEAL ---- */
const srConfig = { distance: "50px", duration: 800, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", reset: false };

const sr     = ScrollReveal({ ...srConfig, origin: "top" });
const srLeft = ScrollReveal({ ...srConfig, origin: "left" });
const srRight= ScrollReveal({ ...srConfig, origin: "right" });
const srBot  = ScrollReveal({ ...srConfig, origin: "bottom" });

// Hero
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name",      { delay: 80 });
sr.reveal(".featured-text-info", { delay: 160 });
sr.reveal(".featured-text-btn",  { delay: 200 });
sr.reveal(".social-icons",       { delay: 240 });
srRight.reveal(".featured-image",{ delay: 100 });

// About
sr.reveal(".top-header",         {});
srLeft.reveal(".about-info",     { delay: 100 });
srRight.reveal(".about-image",   { delay: 150 });

// Skills
srLeft.reveal(".skill.frontend", { delay: 100 });
sr.reveal(".skill.backend",      { delay: 150 });
srRight.reveal(".skill.database",{ delay: 200 });

// Projects
sr.reveal(".project-box",        { interval: 120 });
srBot.reveal(".project-card",    { interval: 150 });

// Contact
srLeft.reveal(".contact-info",   { delay: 100 });
srRight.reveal(".form-control",  { delay: 150 });

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop    = section.offsetTop - 100;
        const sectionId     = section.getAttribute("id");
        const navLink       = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        if (!navLink) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLink.classList.add("active-link");
        } else {
            navLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/* ---- DARK / LIGHT THEME ---- */
function themeFunction() {
    const body = document.body;
    const themeBtn = document.getElementById("theme-button");
    const icon = themeBtn.querySelector("i");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        icon.classList.replace("uil-moon", "uil-sun");
        themeBtn.style.color = "#fbbf24";
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("uil-sun", "uil-moon");
        themeBtn.style.color = "";
        localStorage.setItem("theme", "light");
    }
}

// Restore saved theme on page load
(function restoreTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-theme");
        const themeBtn = document.getElementById("theme-button");
        if (themeBtn) {
            const icon = themeBtn.querySelector("i");
            if (icon) icon.classList.replace("uil-moon", "uil-sun");
            themeBtn.style.color = "#fbbf24";
        }
    }
})();

/* ---- CONTACT FORM FEEDBACK ---- */
(function setupForm() {
    const formBtn = document.querySelector(".form-button .btn");
    if (!formBtn) return;

    formBtn.addEventListener("click", () => {
        const name    = document.querySelector(".input-field[placeholder='Your Name']");
        const email   = document.querySelector(".input-field[placeholder='Your Email']");
        const message = document.querySelector("textarea");

        if (!name?.value || !email?.value || !message?.value) {
            formBtn.textContent = "Please fill all fields";
            formBtn.style.background = "#e85d04";
            setTimeout(() => {
                formBtn.innerHTML = 'Send Message <i class="uil uil-message"></i>';
                formBtn.style.background = "";
            }, 2500);
            return;
        }

        formBtn.innerHTML = 'Sent! <i class="uil uil-check"></i>';
        formBtn.style.background = "#16a34a";
        setTimeout(() => {
            formBtn.innerHTML = 'Send Message <i class="uil uil-message"></i>';
            formBtn.style.background = "";
            name.value = email.value = message.value = "";
        }, 3000);
    });
})();

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
    initDots();
    startAutoPlay();
});
