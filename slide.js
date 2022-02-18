const nav__pro = document.querySelector(".nav__pro");
const link = document.querySelector(".link");
const overview = document.querySelector(".overview");
// Animation class
const transition = document.querySelector(".transition");

// About animation
link.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = link.href;
    }, 900);
});
nav__pro.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = nav__pro.href;
    }, 900);
});
overview.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = overview.href;
    }, 900);
});