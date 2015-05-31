$(document).ready(function(){

  $('#about-link').click(function(){
    $('html body').animate({
      scrollTop: $('#about').offset().top
    }, 2000);
  });

  $(window).scroll(function() {
    if ($(window).width() > 1000) {
      $('#portfolio-link').click(function(){
        $('html body').animate({
          scrollTop: $("#portfolio-item-1").offset().top
        }, 2000);
      });
    } else {
      $('#portfolio-link').click(function(){
        $('html body').animate({
          scrollTop: $("#portfolio-header").offset().top
        }, 2000);
      });
    }
  });

});