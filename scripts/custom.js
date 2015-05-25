$(document).ready(function(){

  var t1 = $('#portfolio-item-1').offset().top - 96;
  var t2 = $('#portfolio-item-2').offset().top - 96;
  var t3 = $('#portfolio-item-3').offset().top - 96;
  var footerHeight = $('#footer').offset().top;
  console.log(footerHeight);
  console.log(t3);
  
  $(window).scroll(function(){

    if ($(this).scrollTop() < t1) {
      $('#header').fadeOut('slow');
    } else if ($(this).scrollTop() > t1) {
      $('#header').fadeIn('slow');
    }

    if ($(window).width() > 1000) {
      
      if (($(this).scrollTop() > t2) || ($(this).scrollTop() < t1)) {
        if ($('#portfolio-description-1').css('opacity') == 1) {
          $('#portfolio-description-1')
            .animate({left: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
          $('#portfolio-image-1')
            .animate({right: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
        }
      } else if (($(this).scrollTop() > t1) || ($(this).scrollTop() < t2)) {
        if ($('#portfolio-description-1').css('opacity') == 0) {
          $('#portfolio-description-1')
            .show()
            .animate({left: 50, opacity: 1}, 1000);
          $('#portfolio-image-1')
            .show()
            .animate({right: 50, opacity: 1}, 1000);
        }
      }


      if (($(this).scrollTop() > t3) || ($(this).scrollTop() < t2)) {
        if ($('#portfolio-description-2').css('opacity') == 1) {
          $('#portfolio-description-2')
            .animate({left: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
          $('#portfolio-image-2')
            .animate({right: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
        }
      } else if (($(this).scrollTop() > t2) || ($(this).scrollTop() < t3)) {
        if ($('#portfolio-description-2').css('opacity') == 0) {
          $('#portfolio-description-2')
            .show()
            .animate({left: 50, opacity: 1}, 1000);
          $('#portfolio-image-2')
            .show()
            .animate({right: 50, opacity: 1}, 1000);
        }
      }

      if ($(this).scrollTop() < t3) {
        if ($('#portfolio-description-3').css('opacity') == 1) {
          $('#portfolio-description-3')
            .animate({left: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
          $('#portfolio-image-3')
            .animate({right: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
        }
      } else if ($(this).scrollTop() > t3) {
        if ($('#portfolio-description-2').css('opacity') == 0) {
          $('#portfolio-description-3')
            .show()
            .animate({left: 50, opacity: 1}, 1000);
          $('#portfolio-image-3')
            .show()
            .animate({right: 50, opacity: 1}, 1000);
        }
      }

    }

  });
});