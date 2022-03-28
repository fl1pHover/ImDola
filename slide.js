// Animation click links
var link = document.querySelector('.link');

// Animation class
var transition = document.querySelector('.transition');

function clicker(teemaa) {
	transition.classList.add('slide');
	if (history.length < 3) {
		setTimeout(() => {
			window.location = teemaa;
		}, 900);
	}
	// document.body.classList.remove('js-loading');
}
