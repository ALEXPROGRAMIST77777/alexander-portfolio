// ========================================
// ALEXANDER.DEV
// Main website script
// ========================================


// Появление элементов при прокрутке

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .process-item, .why-card, .contact-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ========================================
// Плавное закрытие меню / переходы
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ========================================
// Header при прокрутке
// ========================================

const header = document.querySelector(".header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.style.background =
                "rgba(3, 7, 11, 0.94)";

        } else {

            header.style.background =
                "rgba(4, 8, 12, 0.78)";

        }

    },
    {
        passive: true
    }
);


// ========================================
// Небольшой эффект движения фонового свечения
// ========================================

const ambientOne = document.querySelector(".ambient-1");
const ambientTwo = document.querySelector(".ambient-2");

window.addEventListener(
    "mousemove",
    (event) => {

        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        ambientOne.style.transform =
            `translate(${x * 30}px, ${y * 20}px)`;

        ambientTwo.style.transform =
            `translate(${-x * 25}px, ${-y * 20}px)`;

    },
    {
        passive: true
    }
);


// ========================================
// Terminal typing effect
// ========================================

const cursor = document.querySelector(".cursor");

setInterval(() => {

    if (!cursor) {
        return;
    }

    cursor.style.opacity =
        cursor.style.opacity === "0"
            ? "1"
            : "0";

}, 500);


// ========================================
// Current year
// ========================================

const footerYear = document.querySelector(".footer");

if (footerYear) {

    const year = new Date().getFullYear();

    footerYear.innerHTML =
        footerYear.innerHTML.replace("2026", year);

}