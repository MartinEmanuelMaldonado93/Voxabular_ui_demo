"use strict";

const navbar__menu = document.querySelector(".navbar__menu");
const navbar__social = document.querySelector(".navbar__social");

let toggle = true;

navbar__menu.addEventListener("click", () => {
    toggle
    ? (navbar__social.style.display = "flex")
    : (navbar__social.style.display = "none");
    toggle = !toggle;
});
