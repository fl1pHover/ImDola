window.addEventListener("scroll", function() {
    var header = document.querySelector(".full__name");
    header.classList.toggle("hide", window.scrollY > 50)
})