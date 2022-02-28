$(".headers").hover(
    function() {
        $(this).addClass("zoom");
    },
    function() {
        $(this).removeClass("unZoom");
    }
);

document.getElementById(".swiper-header").addEventListener("mouseover", mouseOver);
document.getElementById(".swiper-header").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("zoom").style.scale = "2";
}

function mouseOut() {
    document.getElementById("zoom").style.scale = "2";
}