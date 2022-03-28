// Animation click links
var link = document.querySelector('.link');

// Animation class
var transition = document.querySelector('.transition');

function clicker(teemaa) {
	transition.classList.add('slide');
	setTimeout(() => {
		window.location = teemaa;
	}, 900);
	console.log('asdfasdf');
	// document.body.classList.remove('js-loading');
}

window.onpopstate = function (event) {
	console.log(event);
};
