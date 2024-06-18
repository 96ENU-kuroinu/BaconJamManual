document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector("h1");
    const img_h1 = document.getElementById("img_h1");

    const h2 = document.querySelector("h2");
    const img_h2 = document.getElementById("img_h2");

    const h3 = document.querySelector("h3");
    const img_h3 = document.getElementById("img_h3");

    if (h1 && img_h1) {
        const fontSize_h1 = window.getComputedStyle(h1).fontSize;
        img_h1.style.height = fontSize_h1;
    }

    if (h2 && img_h2) {
        const fontSize_h2 = window.getComputedStyle(h2).fontSize;
        img_h2.style.height = fontSize_h2;
    }

    if (h3 && img_h3) {
        const fontSize_h3 = window.getComputedStyle(h3).fontSize;
        img_h3.style.height = fontSize_h3;
    }
});