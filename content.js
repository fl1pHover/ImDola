const link = document.querySelector(".c1");
const transition = document.querySelector(".transition");
link.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = link.href;
    }, 900);
}); <
const link = document.querySelector(".c2");
const transition = document.querySelector(".transition");
link.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = link.href;
    }, 900);
}); <
const link = document.querySelector(".c3");
const transition = document.querySelector(".transition");
link.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = link.href;
    }, 900);
}); <