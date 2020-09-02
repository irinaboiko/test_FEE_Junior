/*MOBILE MENU*/

const menuBtn = document.getElementsByClassName('menu-mob')[0];
const menuLines = document.getElementsByClassName('menu-mob-lines')[0];
const menuMobBox = document.getElementsByClassName('menu-header')[0];

menuBtn.addEventListener('click', function () {
	menuLines.classList.toggle('active');
	menuMobBox.classList.toggle('show-menu');
});

/*SLIDER PROMO*/

$('#slider-promo').slick({
	infinite: true,
	autoplay: true,
  	autoplaySpeed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
});
