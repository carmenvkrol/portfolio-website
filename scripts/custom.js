$(document).ready(function(){
  $(window).scroll(function(){
    console.log($(window).scrollTop());
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('scrollDown');
    } else {
      $('#header').removeClass('scrollDown');
    }
  });
});