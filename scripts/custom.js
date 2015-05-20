$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('scrollDown');
    } else {
      $('#header').removeClass('scrollDown');
    }
  });
});