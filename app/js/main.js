$(function () {
  $('.slider-hero__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-right"></use></svg></button>',
    dots: true   
  });

  $('.brends__inner').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3
  })

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