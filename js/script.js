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
  }
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
    $cont.addClass('open-sidebar');
    $menu.css('right', '0')
    $owerlay.fadeIn(500);
  };
  function closed() {
    $cont.removeClass('open-sidebar');
    $menu.css('right', '-240px')
    $owerlay.fadeOut(500);
  };

  $trigger.on('click', function() {
    if ($cont.hasClass('open-sidebar')) {
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


  var startPoint={};
  var nowPoint;
  var ldelay;
  var element = document.getElementById('menu');
  element.addEventListener('touchstart', function(event) {


    startPoint.x=event.changedTouches[0].pageX;
    startPoint.y=event.changedTouches[0].pageY;
    ldelay=new Date();
  }, false);

  element.addEventListener('touchmove', function(event) {
    var otk={};
    nowPoint=event.changedTouches[0];
    otk.x=nowPoint.pageX-startPoint.x;
    if(Math.abs(otk.x)>10){
      if(otk.x<0){

        open();
      }
      if(otk.x>0){
        closed();
      }
      startPoint={x:nowPoint.pageX,y:nowPoint.pageY};
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
