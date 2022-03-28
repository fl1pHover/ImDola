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

while (true) {
	setTimeout(() => {
		if (history.length > 2) {
			cover[0].style.display = 'none';
			break
		}
	}, 1000);
}
