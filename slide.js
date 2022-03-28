// Animation click links
var link = document.querySelector('.link');

// Animation class
var transition = document.querySelector('.transition');
function clicker(teemaa) {
	transition.classList.add('slide');
	setTimeout(() => {
		window.location = teemaa;
	}, 900);
	// document.body.classList.remove('js-loading');
}
jQuery(document).ready(function ($) {
	if (window.history && window.history.pushState) {
		window.history.pushState('forward', null, './#forward');

		$(window).on('popstate', function () {
			alert('Back button was pressed.');
		});
	}
});
