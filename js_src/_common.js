/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('gnb-list-link').on('click', function(){

    $(this).css({background:'#ff9fb4'});

  });

  //$('.gnb-list-link').on('click', function(e){
  //
  //  e.preventDefault();
  //
  //  var href = $(this).attr('href');
  //
  //  var scrollPosition = $(href).offset().left;
  //
  //  // 주르륵 내려가는 효과
  //  $('body').stop().animate({
  //    scrollLeft : scrollPosition
  //  });
  //
  //});


  // 마우스 오버시 중복 방지하기 위한 변수 선언
  var tID1, tID2;

  $('.square.small').on('mouseenter', function(){


    $(this).children('.small-text.change').css({display:'none'});
    $(this).children('.hidden-text-wrap').addClass('on');

    tID1 = setTimeout(function(){
      // 왼쪽,오른쪽줄(시작) 모션적용 클래스
      $('.hidden-text-wrap').addClass('frame1');
      $('.hidden-text').addClass('frame3');

    }, 0);

    tID2 = setTimeout(function(){
      // 아래,윗줄(끝) 모션적용 클래스
      $('.hidden-text-wrap').addClass('frame2');
      $('.hidden-text').addClass('frame4');

    }, 300);

  });

  $('.square.small').on('mouseleave', function(){
    clearTimeout(tID1);
    clearTimeout(tID2);

    $(this).children('.hidden-text-wrap').removeClass('on');
    $(this).children('.popup-btn-more').removeClass('on');
    $(this).children('.small-text.change').css({display:'block'});
    $('.hidden-text-wrap').removeClass('frame1');
    $('.hidden-text-wrap').removeClass('frame2');
    $('.hidden-text').removeClass('frame3');
    $('.hidden-text').removeClass('frame4');

  });

  $('.hidden-text-wrap.more').on('click', function(){

    $('.popup-height').removeClass('on');
    $('.popup-width').removeClass('on');
    $(this).next('.popup-height').addClass('on');
    $(this).next('.popup-width').addClass('on');

  });

  $('.popup-btn-close').on('click',function(){

    $(this).parents('.popup-width').removeClass('on');
    $(this).parents('.popup-height').removeClass('on');

  });

});