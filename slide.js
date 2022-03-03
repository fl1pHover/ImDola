// Animation click links
const link = document.querySelector(".link");

// Animation class
const transition = document.querySelector(".transition");

function clicker(teemaa) {
    transition.classList.add("slide");
    setTimeout(() => {
        window.location = teemaa;
    }, 900);
}