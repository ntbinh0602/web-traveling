$(".slider-header").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
});

$(".header").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $(".header .slick-dots li")
      .removeClass("slick-active")
      .attr("aria-hidden", "true");
    $(".header .slick-dots li button").focus(function () {
      this.blur();
    });
  }
);

$(".slider-section-hot-deals").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    }
  ]
});

$(".slider-review").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  pauseOnFocus: false,
});

$(".box_rating").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $(".box_rating .slick-dots li")
      .removeClass("slick-active")
      .attr("aria-hidden", "true");
    $(".box_rating .slick-dots li button").focus(function () {
      this.blur();
    });
  }
);
