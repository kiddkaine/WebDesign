window.onscroll = function () {

	let scrolled    = window.pageYOffset || document.documentElement.scrollTop
	  , headerWrapp = document.querySelector('.header__wrapp');

	if (scrolled > 0) {
		headerWrapp.classList.add('active');
	} else {
		headerWrapp.classList.remove('active');
	};

};