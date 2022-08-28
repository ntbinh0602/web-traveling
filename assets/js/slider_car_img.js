$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  verticalSwiping: true,
  arrows: false,
  autoplay: true,
  pauseOnFocus: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
});
