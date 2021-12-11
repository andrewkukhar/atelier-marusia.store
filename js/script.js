"use strict"
/*
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    easing: 'linear',
    infinite: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    rows: 1,
    slidesPerRows: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  });
});
*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuList.classList.toggle('_active');
  });
}