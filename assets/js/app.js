



$("#btn-menu-top").click(function(){
    $(".menu-small-display").toggleClass("hide_layer");
    $(".menu-small-display-container").toggleClass("hide_menu");
    $(".header__top-menu-icon > i").toggleClass("fa-bars");
    $(".header__top-menu-icon > i").toggleClass("fa-times");
  });

  $("#layer_btn").click(function(e){
    if (e.target !== this)
      return;
      $(".menu-small-display").toggleClass("hide_layer");
      $(".menu-small-display-container").toggleClass("hide_menu");
      $(".header__top-menu-icon > i").toggleClass("fa-bars");
      $(".header__top-menu-icon > i").toggleClass("fa-times");
    
  })

$(document).ready(function (){
  $('.icon-menu').click(function () {
      $(this).parent('.menu-small-display-list-item').children('.submenu-mobile-list').slideToggle();
      $(this).toggleClass('fa-chevron-right fa-chevron-down');
  });
});

$(".heading-clicked").click(function(e){
  $(this).parent('.description-infor-detail-heading').parent(".content-description-infor-detail").children(".description-infor-detail-txt").toggleClass("hide-content-p"); 
})




