$(document).ready(function () {
	function windowSize() {
		if ($(window).width() <= '768') {
			$('#toggle-menu').show();
			$('ul.nav-list').css("display", "none");
		} else {
			$('#toggle-menu').hide();
			$('ul.nav-list').css("display", "flex");
		}
	}

	$(window).on('load resize', windowSize);

	var i = 0;

	$(".lang__link").click(function () {

		$(".lang__list").toggleClass('active');
	});

	$(".basket__icon").click(function (e) {
		$('.order__block').toggleClass('active');
		$('.order__background').css("display", "block");
	});

	$("#view__order").click(function (e) {
		$('.order__block').toggleClass('active');
		$('.order__background').css("display", "block");
	});

	$(".order__background").click(function (e) {
		$('.order__block').toggleClass('active');
		$('.order__background').css("display", "none");
	});

	$("#close__order").click(function (e) {
		$('.order__block').toggleClass('active');
		$('.order__background').css("display", "none");
	});

	function handleScroll() {
		const header = document.querySelector('.header__navigation');
		const screenHeight = window.innerHeight;

		if (window.scrollY > screenHeight) {

			$('.header__navigation').css('position', 'fixed');
			$('.header__navigation').css('top', '0');
			$('.header__navigation').css('left', '0');
			$('.header__navigation').css('right', '0');
			$('.header__navigation').css('background-color', 'rgba(0,0,0)');
			$('.header__body').css('height', '0px');
			$('.categories').css('margin', '500px 0 62px 0');
		} else {
			$('.header__navigation').css('position', '');
			$('.header__body').css('height', '');
			$('.categories').css('margin', '230px 0 62px 0');
			$('.header__navigation').css('background-color', 'transparent');
		}
	}

	// Додаємо обробники подій для скролла сторінки
	window.addEventListener('scroll', handleScroll);
	window.addEventListener('resize', handleScroll);

});