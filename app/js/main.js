$(function () {
  $('.slider-hero__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/icon-arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/slider/icon-arrow-right.svg" alt="стрелка вправо"></button>'
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})