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
	$(window).on('popstate', function () {
		console.log(document.querySelectorAll('.cover1')[0]);
		document.querySelectorAll('.cover1')[0].style.display = 'none';

});
