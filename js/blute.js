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
/**
 * Created by Administrator on 2017-08-04.
 */

$(function(){

  var scrollDelta = 0;

  $('.main-bg .bg-each').hide();
  $('.main-bg .bg-each').eq(0).show();

  $(window).on('mousewheel', function(e){

    scrollDelta += e.originalEvent.wheelDelta;

    if( scrollDelta >=0 ){

      scrollDelta = 0;

    } else if( scrollDelta <= -($('.menu-list').width() - $(window).width()) ){

      scrollDelta = -($('.menu-list').width() - $(window).width());

    }
    console.log(scrollDelta);

    if( 0 >= scrollDelta && scrollDelta >= -240){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(0).stop().fadeIn();

    } else if( -240 > scrollDelta &&  scrollDelta >= -720 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(1).stop().fadeIn();

    } else if( -720 > scrollDelta && scrollDelta >= -1200 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(2).stop().fadeIn();

    } else if( -1200 > scrollDelta && scrollDelta >= -1780 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(3).stop().fadeIn();

    } else if( -1780 > scrollDelta && scrollDelta >= -2380 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(4).stop().fadeIn();

    }

    $('.menu-list').css({
      transform:'translateX(' + scrollDelta + 'px)'
    });

  });

  var engNum = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];

  $('.menu-list-link').on('mouseenter', function(){

    var num1 = '';

    var indexNumber = $(this).index('.menu-list-link');

    num1 += engNum[indexNumber];

    $(this).children('.menu-list-link-num').html(num1);

  });

  var num = ['01', '02', '03', '04', '05'];

  $('.menu-list-link').on('mouseleave', function(){

    var num2 = '';

    var indexNumber = $(this).index('.menu-list-link');

    num2 += num[indexNumber];

    $(this).children('.menu-list-link-num').html(num2);

  });

});
/**
 * Created by Administrator on 2017-08-24.
 */

$(function(){

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWFpbi5qcyIsIl9wYWdlX2NoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnZ25iLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jc3Moe2JhY2tncm91bmQ6JyNmZjlmYjQnfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLyQoJy5nbmItbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgLy9cclxuICAvLyAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vXHJcbiAgLy8gIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgLy9cclxuICAvLyAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJChocmVmKS5vZmZzZXQoKS5sZWZ0O1xyXG4gIC8vXHJcbiAgLy8gIC8vIOyjvOultOultSDrgrTroKTqsIDripQg7Zqo6rO8XHJcbiAgLy8gICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgLy8gICAgc2Nyb2xsTGVmdCA6IHNjcm9sbFBvc2l0aW9uXHJcbiAgLy8gIH0pO1xyXG4gIC8vXHJcbiAgLy99KTtcclxuXHJcblxyXG4gIC8vIOuniOyasOyKpCDsmKTrsoTsi5wg7KSR67O1IOuwqeyngO2VmOq4sCDsnITtlZwg67OA7IiYIOyEoOyWuFxyXG4gIHZhciB0SUQxLCB0SUQyO1xyXG5cclxuICAkKCcuc3F1YXJlLnNtYWxsJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc21hbGwtdGV4dC5jaGFuZ2UnKS5jc3Moe2Rpc3BsYXk6J25vbmUnfSk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaGlkZGVuLXRleHQtd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHRJRDEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyZvOyqvSzsmKTrpbjsqr3spIQo7Iuc7J6RKSDrqqjshZjsoIHsmqkg7YG0656Y7IqkXHJcbiAgICAgICQoJy5oaWRkZW4tdGV4dC13cmFwJykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG4gICAgICAkKCcuaGlkZGVuLXRleHQnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgdElEMiA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgLy8g7JWE656YLOycl+ykhCjrgZ0pIOuqqOyFmOyggeyaqSDtgbTrnpjsiqRcclxuICAgICAgJCgnLmhpZGRlbi10ZXh0LXdyYXAnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgICQoJy5oaWRkZW4tdGV4dCcpLmFkZENsYXNzKCdmcmFtZTQnKTtcclxuXHJcbiAgICB9LCAzMDApO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnNxdWFyZS5zbWFsbCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFyVGltZW91dCh0SUQxKTtcclxuICAgIGNsZWFyVGltZW91dCh0SUQyKTtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaGlkZGVuLXRleHQtd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnBvcHVwLWJ0bi1tb3JlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc21hbGwtdGV4dC5jaGFuZ2UnKS5jc3Moe2Rpc3BsYXk6J2Jsb2NrJ30pO1xyXG4gICAgJCgnLmhpZGRlbi10ZXh0LXdyYXAnKS5yZW1vdmVDbGFzcygnZnJhbWUxJyk7XHJcbiAgICAkKCcuaGlkZGVuLXRleHQtd3JhcCcpLnJlbW92ZUNsYXNzKCdmcmFtZTInKTtcclxuICAgICQoJy5oaWRkZW4tdGV4dCcpLnJlbW92ZUNsYXNzKCdmcmFtZTMnKTtcclxuICAgICQoJy5oaWRkZW4tdGV4dCcpLnJlbW92ZUNsYXNzKCdmcmFtZTQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5oaWRkZW4tdGV4dC13cmFwLm1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5wb3B1cC1oZWlnaHQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5wb3B1cC13aWR0aCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtaGVpZ2h0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLm5leHQoJy5wb3B1cC13aWR0aCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBvcHVwLWJ0bi1jbG9zZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5wb3B1cC13aWR0aCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcucG9wdXAtaGVpZ2h0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA0LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5oaWRlKCk7XHJcbiAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSgwKS5zaG93KCk7XHJcblxyXG4gICQod2luZG93KS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIHNjcm9sbERlbHRhICs9IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgIGlmKCBzY3JvbGxEZWx0YSA+PTAgKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgICB9IGVsc2UgaWYoIHNjcm9sbERlbHRhIDw9IC0oJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkgLSAkKHdpbmRvdykud2lkdGgoKSkgKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhID0gLSgkKCcubWVudS1saXN0Jykud2lkdGgoKSAtICQod2luZG93KS53aWR0aCgpKTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzY3JvbGxEZWx0YSk7XHJcblxyXG4gICAgaWYoIDAgPj0gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTI0MCl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMCkuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTI0MCA+IHNjcm9sbERlbHRhICYmICBzY3JvbGxEZWx0YSA+PSAtNzIwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMSkuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTcyMCA+IHNjcm9sbERlbHRhICYmIHNjcm9sbERlbHRhID49IC0xMjAwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMikuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTEyMDAgPiBzY3JvbGxEZWx0YSAmJiBzY3JvbGxEZWx0YSA+PSAtMTc4MCApe1xyXG5cclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5zdG9wKCkuZmFkZU91dCgpO1xyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLmVxKDMpLnN0b3AoKS5mYWRlSW4oKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoIC0xNzgwID4gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTIzODAgKXtcclxuXHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuc3RvcCgpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSg0KS5zdG9wKCkuZmFkZUluKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoJy5tZW51LWxpc3QnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoJyArIHNjcm9sbERlbHRhICsgJ3B4KSdcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIGVuZ051bSA9IFsnT05FJywgJ1RXTycsICdUSFJFRScsICdGT1VSJywgJ0ZJVkUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0xID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMSArPSBlbmdOdW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTEpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIG51bSA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0yID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMiArPSBudW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTIpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjQuXG4gKi9cblxuJChmdW5jdGlvbigpe1xuXG4gIGlmKHBhZ2UgPT0gJ3R1bGlwJyl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xuXG4gIH0gZWxzZSBpZihwYWdlID09ICdyb3NlJyl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xuXG4gIH0gZWxzZSBpZihwYWdlID09ICdwZW9ueScpe1xuXG4gICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcblxuICB9IGVsc2UgaWYocGFnZSA9PSAnaHlkcmFuZ2VhJyl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDMpLmFkZENsYXNzKCdvbicpO1xuXG4gIH0gZWxzZSBpZihwYWdlID09ICdyYW51bmN1bHVzJyl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDQpLmFkZENsYXNzKCdvbicpO1xuXG4gIH1cblxufSk7Il19
