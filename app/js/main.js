$(function () {
  $('.slider-hero__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/icon-arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/slider/icon-arrow-right.svg" alt="стрелка вправо"></button>'
  });

 
  var mixer = mixitup('.top-products__content');
  var mixer = mixitup('.actions__list');
})