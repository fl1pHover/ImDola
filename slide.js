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
jQuery(document).ready(function ($) {
	if (window.history && window.history.pushState) {
		$(window).on('popstate', function () {
			cover[0].style.display = 'none';
		});
	}
});
