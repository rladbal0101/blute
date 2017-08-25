/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('gnb-list-link').on('click', function(){

    $(this).css({background:'#ff9fb4'});

  });

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

  $('.popup-btn-more').on('click', function(){

    $(this).next('.popup-height').addClass('on');
    $(this).next('.popup-width').addClass('on');

  });

  $('.popup-btn-close').on('click',function(){

    $(this).parents('.popup-width').removeClass('on');
    $(this).parents('.popup-height').removeClass('on');

  });

});