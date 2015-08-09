$(document).ready(function(){

  // *** NAV LINKS *** //

  $('#about-link').click(function(){
    $('html body').animate({
      scrollTop: $('#about').offset().top
    }, 2000);
  });

  if ($(window).width() > 1024) {
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

  // *** SCROLL EFFECTS *** //

  var t1 = $('#portfolio-item-1').offset().top;
  var t2 = $('#portfolio-item-2').offset().top;
  var t3 = $('#portfolio-item-3').offset().top;
  var t4 = $('#about').offset().top;

  $(window).scroll(function(){

    // ** HEADER ** //

    if ($(window).width() > 767) {
      if ($(this).scrollTop() < t1 || $(this).scrollTop() > t4) {
        if($('#header').is(':visible')) {
          $('#header').fadeOut('slow');
        }
      } else if ($(this).scrollTop() > t1) {
        if($('#header').is(':hidden')) {
          $('#header').fadeIn('slow');
        }
      }
    }

    // ** PORTFOLIO ITEMS ** //

    if ($(window).width() > 1024) {
      
      if (($(this).scrollTop() > (t2-100)) || ($(this).scrollTop() < (t1+25))) {
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
      } else if (($(this).scrollTop() > (t1+25)) || ($(this).scrollTop() < (t2-100))) {
        if ($('#portfolio-description-1').css('opacity') == 0) {
          $('#portfolio-description-1')
            .show()
            .animate({left: 75, opacity: 1}, 1000);
          $('#portfolio-image-1')
            .show()
            .animate({right: 50, opacity: 1}, 1000);
        }
      }

      if (($(this).scrollTop() > (t3-100)) || ($(this).scrollTop() < (t2+25))) {
        if ($('#portfolio-description-2').css('opacity') == 1) {
          $('#portfolio-description-2')
            .animate({right: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
          $('#portfolio-image-2')
            .animate({left: 0, opacity: 0}, 1000, function(){
              $(this).hide();
            });
        }
      } else if (($(this).scrollTop() > (t2+25)) || ($(this).scrollTop() < (t3-100))) {
        if ($('#portfolio-description-2').css('opacity') == 0) {
          $('#portfolio-description-2')
            .show()
            .animate({right: 75, opacity: 1}, 1000);
          $('#portfolio-image-2')
            .show()
            .animate({left: 50, opacity: 1}, 1000);
        }
      }

      if (($(this).scrollTop() < (t3+25)) || ($(this).scrollTop() > (t4-100))) {
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
      } else if (($(this).scrollTop() > (t3+25)) || ($(this).scrollTop() < (t4-100))) {
        if ($('#portfolio-description-3').css('opacity') == 0) {
          $('#portfolio-description-3')
            .show()
            .animate({left: 75, opacity: 1}, 1000);
          $('#portfolio-image-3')
            .show()
            .animate({right: 50, opacity: 1}, 1000);
        }
      }

    }

  });
});