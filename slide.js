// Animation click links
var link = document.querySelector('.link');

// Animation class
var transition = document.querySelector('.transition');
var cover = document.getElementsByClassName('cover');
function clicker(teemaa) {
	transition.classList.add('slide');
	setTimeout(() => {
		window.location = teemaa;
	}, 900);
	// document.body.classList.remove('js-loading');
}
if (history.length > 2) {
	cover[0].style.display = 'none';
}
