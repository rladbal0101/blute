/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('gnb-list-link').on('click', function(){

    $(this).css({background:'#ff9fb4'});

  });

  // 마우스 오버시 중복 방지하기 위한 변수 선언
  var tID1, tID2;

  $('.square.small').on('mouseenter', function(){


    $(this).children('.small-text.change').css({display:'none'});
    $(this).children('.hidden-text-wrap').addClass('on');
    $(this).children('.popup-btn-more').addClass('on');

    tID1 = setTimeout(function(){
      // 왼쪽,오른쪽줄(시작) 모션적용 클래스
      $('.hidden-text-wrap').addClass('frame1');
      $('.hidden-text').addClass('frame3');

    }, 0);

    tID2 = setTimeout(function(){
      // 아래,윗줄(끝) 모션적용 클래스
      $('.hidden-text-wrap').addClass('frame2');
      $('.hidden-text').addClass('frame4');

    }, 500);

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

  $('.popup-btn-more').on('click', function(){

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWFpbi5qcyIsIl9wYWdlX2NoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnZ25iLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jc3Moe2JhY2tncm91bmQ6JyNmZjlmYjQnfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLyDrp4jsmrDsiqQg7Jik67KE7IucIOykkeuztSDrsKnsp4DtlZjquLAg7JyE7ZWcIOuzgOyImCDshKDslrhcclxuICB2YXIgdElEMSwgdElEMjtcclxuXHJcbiAgJCgnLnNxdWFyZS5zbWFsbCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNtYWxsLXRleHQuY2hhbmdlJykuY3NzKHtkaXNwbGF5Oidub25lJ30pO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmhpZGRlbi10ZXh0LXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cC1idG4tbW9yZScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHRJRDEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyZvOyqvSzsmKTrpbjsqr3spIQo7Iuc7J6RKSDrqqjshZjsoIHsmqkg7YG0656Y7IqkXHJcbiAgICAgICQoJy5oaWRkZW4tdGV4dC13cmFwJykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG4gICAgICAkKCcuaGlkZGVuLXRleHQnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgdElEMiA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgLy8g7JWE656YLOycl+ykhCjrgZ0pIOuqqOyFmOyggeyaqSDtgbTrnpjsiqRcclxuICAgICAgJCgnLmhpZGRlbi10ZXh0LXdyYXAnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgICQoJy5oaWRkZW4tdGV4dCcpLmFkZENsYXNzKCdmcmFtZTQnKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnNxdWFyZS5zbWFsbCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFyVGltZW91dCh0SUQxKTtcclxuICAgIGNsZWFyVGltZW91dCh0SUQyKTtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaGlkZGVuLXRleHQtd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnBvcHVwLWJ0bi1tb3JlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc21hbGwtdGV4dC5jaGFuZ2UnKS5jc3Moe2Rpc3BsYXk6J2Jsb2NrJ30pO1xyXG4gICAgJCgnLmhpZGRlbi10ZXh0LXdyYXAnKS5yZW1vdmVDbGFzcygnZnJhbWUxJyk7XHJcbiAgICAkKCcuaGlkZGVuLXRleHQtd3JhcCcpLnJlbW92ZUNsYXNzKCdmcmFtZTInKTtcclxuICAgICQoJy5oaWRkZW4tdGV4dCcpLnJlbW92ZUNsYXNzKCdmcmFtZTMnKTtcclxuICAgICQoJy5oaWRkZW4tdGV4dCcpLnJlbW92ZUNsYXNzKCdmcmFtZTQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cC1idG4tbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnBvcHVwLWhlaWdodCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnBvcHVwLXdpZHRoJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLm5leHQoJy5wb3B1cC1oZWlnaHQnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQodGhpcykubmV4dCgnLnBvcHVwLXdpZHRoJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucG9wdXAtYnRuLWNsb3NlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykucGFyZW50cygnLnBvcHVwLXdpZHRoJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5wb3B1cC1oZWlnaHQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDQuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsRGVsdGEgPSAwO1xyXG5cclxuICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLmhpZGUoKTtcclxuICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLmVxKDApLnNob3coKTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgc2Nyb2xsRGVsdGEgKz0gZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgaWYoIHNjcm9sbERlbHRhID49MCApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAwO1xyXG5cclxuICAgIH0gZWxzZSBpZiggc2Nyb2xsRGVsdGEgPD0gLSgkKCcubWVudS1saXN0Jykud2lkdGgoKSAtICQod2luZG93KS53aWR0aCgpKSApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAtKCQoJy5tZW51LWxpc3QnKS53aWR0aCgpIC0gJCh3aW5kb3cpLndpZHRoKCkpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHNjcm9sbERlbHRhKTtcclxuXHJcbiAgICBpZiggMCA+PSBzY3JvbGxEZWx0YSAmJiBzY3JvbGxEZWx0YSA+PSAtMjQwKXtcclxuXHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuc3RvcCgpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSgwKS5zdG9wKCkuZmFkZUluKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmKCAtMjQwID4gc2Nyb2xsRGVsdGEgJiYgIHNjcm9sbERlbHRhID49IC03MjAgKXtcclxuXHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuc3RvcCgpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSgxKS5zdG9wKCkuZmFkZUluKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmKCAtNzIwID4gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTEyMDAgKXtcclxuXHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuc3RvcCgpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSgyKS5zdG9wKCkuZmFkZUluKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmKCAtMTIwMCA+IHNjcm9sbERlbHRhICYmIHNjcm9sbERlbHRhID49IC0xNzgwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMykuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTE3ODAgPiBzY3JvbGxEZWx0YSAmJiBzY3JvbGxEZWx0YSA+PSAtMjM4MCApe1xyXG5cclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5zdG9wKCkuZmFkZU91dCgpO1xyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLmVxKDQpLnN0b3AoKS5mYWRlSW4oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJCgnLm1lbnUtbGlzdCcpLmNzcyh7XHJcbiAgICAgIHRyYW5zZm9ybTondHJhbnNsYXRlWCgnICsgc2Nyb2xsRGVsdGEgKyAncHgpJ1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgZW5nTnVtID0gWydPTkUnLCAnVFdPJywgJ1RIUkVFJywgJ0ZPVVInLCAnRklWRSddO1xyXG5cclxuICAkKCcubWVudS1saXN0LWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIG51bTEgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcubWVudS1saXN0LWxpbmsnKTtcclxuXHJcbiAgICBudW0xICs9IGVuZ051bVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtbGlzdC1saW5rLW51bScpLmh0bWwobnVtMSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgbnVtID0gWycwMScsICcwMicsICcwMycsICcwNCcsICcwNSddO1xyXG5cclxuICAkKCcubWVudS1saXN0LWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIG51bTIgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcubWVudS1saXN0LWxpbmsnKTtcclxuXHJcbiAgICBudW0yICs9IG51bVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtbGlzdC1saW5rLW51bScpLmh0bWwobnVtMik7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yNC5cbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgaWYocGFnZSA9PSAndHVsaXAnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3Jvc2UnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3Blb255Jyl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xuXG4gIH0gZWxzZSBpZihwYWdlID09ICdoeWRyYW5nZWEnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3JhbnVuY3VsdXMnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfVxuXG59KTsiXX0=
