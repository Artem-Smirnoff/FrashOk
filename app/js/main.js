$(function () {

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