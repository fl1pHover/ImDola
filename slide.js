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
window.onpopstate = function (event) {
	alert(
		'location: ' +
			document.location +
			', state: ' +
			JSON.stringify(event.state)
	);
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('myParam');
	//update model accordingly
};
