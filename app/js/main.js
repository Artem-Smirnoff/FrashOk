$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  })

  $('.button-list').on('click', function () {
    $('.top-products__item').addClass('top-products__item--list');
    $('.shop-content__inner').addClass('shop-content__inner--list');
    $('.card').addClass('card--list');
  });

  $('.button-grid').on('click', function () {
    $('.top-products__item').removeClass('top-products__item--list');
    $('.shop-content__inner').removeClass('shop-content__inner--list');
    $('.card').removeClass('card--list');
  });

  $('.user-nav__btn--search').on('click', function () {
    $('.search__hide').toggleClass('search__hide--active')
  })

  $('.menu__btn').on('click', function () {
    $('.menu-hide').toggleClass('menu-hide--active')
  })

  $('.filter__title').on('click', function () {
    $(this).toggleClass('filter__title--active');
  })

  $('.open-btn').on('click', function () {
    $('.filter').css('left', '0');
    $('.close-btn').css('display', 'block');
  })

  $('.close-btn').on('click', function () {
    $('.filter').css('left', '-100%');
    $(this).css('display', 'none');
  })

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.slider-hero__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-right"></use></svg></button>',
    dots: true
  });

  $('.brends__inner').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },

    ]
  });

  $('.product-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-right"></use></svg></button>'
  });

  $('.tabs-slider__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-next__icon"><use xlink href="sprite.svg#icon-arrow-right"></use></svg></button>'
  });

  $(".rating-star").rateYo({
    rating: 4.4,
    starWidth: '24px',
    normalFill: '#c1c1c1',
    ratedFill: '#ffb800',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0.285039 6.16429C0.340001 5.99457 0.486223 5.87088 0.662263 5.84526L5.60768 5.12448L7.81939 0.629902C7.8981 0.469903 8.06058 0.368622 8.23846 0.368622C8.41637 0.368622 8.57883 0.469903 8.65756 0.629902L10.8694 5.12448L15.8147 5.84526C15.9907 5.87088 16.137 5.99457 16.1919 6.16426C16.2469 6.33397 16.2011 6.52025 16.0737 6.64478L12.4953 10.1433L13.3399 15.0834C13.37 15.2593 13.2979 15.437 13.154 15.5419C13.0726 15.6012 12.9761 15.6314 12.8792 15.6314C12.8048 15.6314 12.7302 15.6136 12.6618 15.5775L8.23849 13.2451L3.81534 15.5775C3.65784 15.6605 3.46706 15.6467 3.32315 15.5418C3.17923 15.437 3.1071 15.2592 3.13717 15.0833L3.98207 10.1433L0.403282 6.64475C0.27591 6.52025 0.230015 6.33397 0.285039 6.16429Z"/></svg>'
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