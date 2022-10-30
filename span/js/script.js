'use strict';

$(document).ready(function () {
  $('.films__slider').slick({
    slidesToShow: 3,
  });
  $('.events__slider').slick({
    slidesToShow: 3,
  });
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
  });
});
