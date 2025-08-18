
document.addEventListener('DOMContentLoaded', function() {
	const burger = document.getElementById('burger-menu');
	const nav = document.getElementById('nav-menu');
	const cross = document.getElementById('cross-menu');
	const overlay = document.getElementById('menu-overlay');

	function openMenu() {
		nav.classList.add('open');
		burger.classList.add('active');
		overlay.classList.add('open');
	}
	function closeMenu() {
		nav.classList.remove('open');
		burger.classList.remove('active');
		overlay.classList.remove('open');
	}

	burger.addEventListener('click', function(e) {
		e.stopPropagation();
		if (nav.classList.contains('open')) {
			closeMenu();
		} else {
			openMenu();
		}
	});
	cross.addEventListener('click', function(e) {
		e.stopPropagation();
		closeMenu();
	});
	overlay.addEventListener('click', function() {
		closeMenu();
	});
	// При клике вне меню — закрыть
	document.addEventListener('click', function(e) {
		if (!nav.contains(e.target) && !burger.contains(e.target)) {
			closeMenu();
		}
	});
});
