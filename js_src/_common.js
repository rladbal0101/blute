/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('.animate').scrolla();

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

  if(page == 'tulip'){

    $('.gnb-list-link').eq(0).addClass('on');

  } else if(page == 'rose'){

    $('.gnb-list-link').eq(1).addClass('on');

  } else if(page == 'peony'){

    $('.gnb-list-link').eq(2).addClass('on');

  } else if(page == 'hydrangea'){

    $('.gnb-list-link').eq(3).addClass('on');

  } else if(page == 'ranunculus'){

    $('.gnb-list-link').eq(4).addClass('on');

  }

});