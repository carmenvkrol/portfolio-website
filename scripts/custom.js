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

  var top1 = $('#portfolio-item-1').offset().top;
  var top2 = $('#about').offset().top;

  $(window).scroll(function(){

    // ** HEADER ** //

    if ($(window).width() > 767) {
      if ($(this).scrollTop() < top1 || $(this).scrollTop() > top2) {
        if($('#header').is(':visible')) {
          $('#header').fadeOut('slow');
        }
      } else if ($(this).scrollTop() > top2) {
        if($('#header').is(':hidden')) {
          $('#header').fadeIn('slow');
        }
      }
    }

    // ** PORTFOLIO ITEMS ** //

    if ($(window).width() > 1024) {

      function showPortfolio(itemNum) {
        var item = '#portfolio-item-' + itemNum;
        var desc = '#portfolio-description-' + itemNum;
        var img = '#portfolio-image-' + itemNum;
        var t1 = $(item).offset().top;
        var t2;
        if (itemNum !== 3) {
          var nextItem = '#portfolio-item-' + (itemNum + 1);
          t2 = $(nextItem).offset().top;
        } else {
          t2 = $('#about').offset().top;
        }
        if (itemNum !== 2) {
          if (($(this).scrollTop() > (t1)) && ($(this).scrollTop() < (t2-100))) {
            if ($(desc).css('opacity') == 0) {
              $(desc)
                .show()
                .animate({left: 75, opacity: 1}, 1000);
              $(img)
                .show()
                .animate({right: 50, opacity: 1}, 1000);
            }
          }
        } else {
          if (($(this).scrollTop() > (t1)) && ($(this).scrollTop() < (t2-100))) {
            if ($(desc).css('opacity') == 0) {
              $(desc)
                .show()
                .animate({right: 75, opacity: 1}, 1000);
              $(img)
                .show()
                .animate({left: 50, opacity: 1}, 1000);
            }
          }
        }
      }

      for (var i = 1; i <= 3; i++) {
        showPortfolio(i);
      }

    }

  });
});