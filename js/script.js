// Top Navigation Scroll Effect
const homeLogo = document.querySelector('.home_logo');
const headerLogo = document.querySelector('.header_logo');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const trigger = 100;

    if (homeLogo) {
        if (scrollY > trigger) {
            homeLogo.style.opacity = 0;
            headerLogo.style.opacity = 1;
            header.classList.add('scroll');
        } else {
            homeLogo.style.opacity = 1;
            headerLogo.style.opacity = 0;
            header.classList.remove('scroll');
        }
    } else {
        if (scrollY > trigger) {
            headerLogo.style.opacity = 1;
            header.classList.add('scroll');
        } else {
            headerLogo.style.opacity = 0;
            header.classList.remove('scroll');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    header.classList.add('visible');

    const scrollY = window.scrollY;
    if (homeLogo) {
        homeLogo.style.opacity = scrollY > 100 ? 0 : 1;
        headerLogo.style.opacity = scrollY > 100 ? 1 : 0;
    } else {
        headerLogo.style.opacity = scrollY > 100 ? 1 : 0;
    }
});

// Top Navigation Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav-wrapper');
const closeBtn = document.querySelector('.menu-close');

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        navWrapper.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

toggle.addEventListener('click', () => {
    navWrapper.classList.add('active');
    document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
    navWrapper.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        if (isInView(section)) {
            section.classList.add("section--visible");
        }
    });
}

document.addEventListener("DOMContentLoaded", revealSections);
document.addEventListener("scroll", revealSections);

function isInView(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom > 0 && rect.top < windowHeight - 150;
}

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
        }
    });
    },
    {
        threshold: 0.2
    }
);

timelineItems.forEach(item => {
    observer.observe(item);
});