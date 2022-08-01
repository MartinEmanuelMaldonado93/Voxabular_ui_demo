"use strict";

const navbar__menu = document.querySelector(".navbar__menu");
const navbar__social = document.querySelector(".navbar__social");

let toggle = false;

navbar__menu.addEventListener("click", () => {
    toggle = !toggle;
    toggle
        ? (navbar__social.style.display = "flex")
        : (navbar__social.style.display = "none");
});
