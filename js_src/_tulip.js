/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('.square.small').on('mouseenter', function(){

    $(this).children('.hidden-text-wrap').addClass('on');
    $(this).children('.tulip-more-btn').addClass('on');
    $(this).children('.small-text.change').css({display:'none'});

  });

  $('.square.small').on('mouseleave', function(){

    $(this).children('.hidden-text-wrap').removeClass('on');
    $(this).children('.tulip-more-btn').removeClass('on');
    $(this).children('.small-text.change').css({display:'block'});

  });

  $('.square.small.popup').on('click', function(){

    $(this).children('.tulip-origin-popup').addClass('on');

  });

  $('.tulip-close-btn').on('click',function(){

    $(this).parents('.tulip-origin-popup').removeClass('on');

  });

  //$('.square.small').on('mouseleave', function(){
  //
  //  $(this).children('.hidden-text-wrap').removeClass('on');
  //  $(this).children('.tulip-more-btn').removeClass('on');
  //
  //});

});