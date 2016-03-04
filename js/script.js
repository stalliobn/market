(function($) {
  'use strict';
  var $window = $(window),
  $mainBg = $('#main-bg'),
  $owerlay = $('#owerlay'),
  $title = $('.block-title'),
  $cont = $('.cont'),
  $menu = $('.menu'),
  $trigger = $('.trigger'),
  $target = $(".target");


  function setHeiHeight() {
    $mainBg.css({
      height: $window.height() + 'px'
    });
  };
  setHeiHeight();
  $window.resize(function() {

    setHeiHeight();
    var wid = $window.width();
    if (wid > 768 && $owerlay.is(':visible')) {
      closed();
    }
  });

  var height = $title.outerHeight() / -2 + 'px';
  $title.css('margin-top', height)


  function open() {
    $cont.animate({'left': '-240'}, 300);
    $menu.animate({'right': '0'}, 300);
    $owerlay.fadeIn(300);
  };
  function closed() {
    $cont.animate({'left': '0'}, 300);
    $menu.animate({'right': '-240'}, 300);
    $owerlay.fadeOut(300);
  };

  $trigger.on('click', function() {
    if ($owerlay.is(':visible')) {
      closed();
    } else {
      open();
    }
  });
  $owerlay.on('click', function() {
    closed();
  });


  $target.on('click', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });


  var start = {};
  var point;
  var element = document.getElementById('menu');
  element.addEventListener('touchstart', function(event) {
    start.x = event.changedTouches[0].pageX;
  }, false);

  element.addEventListener('touchmove', function(event) {
    var difference = {};
    point = event.changedTouches[0];
    difference.x = point.pageX - start.x;
    if(Math.abs(difference.x) > 10){
      if(difference.x < 0){
        open();
      }
      if(difference.x > 0){
        closed();
      }
    }
  }, false);

})(jQuery);

$(function(){
  var $elems = $('.icon');
  var winheight = $(window).height();
  $(window).scroll(function(){
    animate_elems();
  });
  function animate_elems() {
    wintop = $(window).scrollTop();
    $elems.each(function(){
      $elm = $(this);

      topcoords = $elm.offset().top;
      if(wintop > (topcoords - (winheight))) {
        $elm.addClass('animated bounceIn');
      }
    });
  }
});
