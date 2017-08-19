/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('.square.small').on('mouseenter', function(){

    $(this).children('.small-text.change').css({display:'none'});
    $(this).children('.hidden-text-wrap').addClass('on');
    $(this).children('.popup-btn-more').addClass('on');

  });

  $('.square.small').on('mouseleave', function(){

    $(this).children('.hidden-text-wrap').removeClass('on');
    $(this).children('.popup-btn-more').removeClass('on');
    $(this).children('.small-text.change').css({display:'block'});

  });

  $('.square.small.popup').on('click', function(){

    $(this).children('.popup-height').addClass('on');
    $(this).children('.popup-width').addClass('on');

  });

  $('.popup-btn-close').on('click',function(){

    $(this).parents('.popup-height').removeClass('on');

  });

});