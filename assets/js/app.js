



$("#btn-menu-top").click(function(){
    $(".menu-small-display").toggleClass("hide_layer");
    $(".menu-small-display-container").toggleClass("hide_menu");
    $(".header__top-menu-icon > i").toggleClass("fa-bars");
    $(".header__top-menu-icon > i").toggleClass("fa-times");
  });


$(document).ready(function (){
  $('.icon-menu').click(function () {
      $(this).parent('.menu-small-display-list-item').children('.submenu-mobile-list').slideToggle();
      $(this).toggleClass('fa-chevron-right fa-chevron-down');
  });
});

