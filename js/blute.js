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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWFpbi5qcyIsIl9wYWdlX2NoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmx1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTYuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCdnbmItbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNzcyh7YmFja2dyb3VuZDonI2ZmOWZiNCd9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5zcXVhcmUuc21hbGwnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5zbWFsbC10ZXh0LmNoYW5nZScpLmNzcyh7ZGlzcGxheTonbm9uZSd9KTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5oaWRkZW4tdGV4dC13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcucG9wdXAtYnRuLW1vcmUnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5zcXVhcmUuc21hbGwnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmhpZGRlbi10ZXh0LXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cC1idG4tbW9yZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNtYWxsLXRleHQuY2hhbmdlJykuY3NzKHtkaXNwbGF5OidibG9jayd9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cC1idG4tbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtaGVpZ2h0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLm5leHQoJy5wb3B1cC13aWR0aCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBvcHVwLWJ0bi1jbG9zZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5wb3B1cC13aWR0aCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcucG9wdXAtaGVpZ2h0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA0LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5oaWRlKCk7XHJcbiAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSgwKS5zaG93KCk7XHJcblxyXG4gICQod2luZG93KS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIHNjcm9sbERlbHRhICs9IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgIGlmKCBzY3JvbGxEZWx0YSA+PTAgKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgICB9IGVsc2UgaWYoIHNjcm9sbERlbHRhIDw9IC0oJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkgLSAkKHdpbmRvdykud2lkdGgoKSkgKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhID0gLSgkKCcubWVudS1saXN0Jykud2lkdGgoKSAtICQod2luZG93KS53aWR0aCgpKTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzY3JvbGxEZWx0YSk7XHJcblxyXG4gICAgaWYoIDAgPj0gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTI0MCl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMCkuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTI0MCA+IHNjcm9sbERlbHRhICYmICBzY3JvbGxEZWx0YSA+PSAtNzIwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMSkuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTcyMCA+IHNjcm9sbERlbHRhICYmIHNjcm9sbERlbHRhID49IC0xMjAwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMikuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTEyMDAgPiBzY3JvbGxEZWx0YSAmJiBzY3JvbGxEZWx0YSA+PSAtMTc4MCApe1xyXG5cclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5zdG9wKCkuZmFkZU91dCgpO1xyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLmVxKDMpLnN0b3AoKS5mYWRlSW4oKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoIC0xNzgwID4gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTIzODAgKXtcclxuXHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuc3RvcCgpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSg0KS5zdG9wKCkuZmFkZUluKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgJCgnLm1lbnUtbGlzdCcpLmNzcyh7XHJcbiAgICAgIHRyYW5zZm9ybTondHJhbnNsYXRlWCgnICsgc2Nyb2xsRGVsdGEgKyAncHgpJ1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgZW5nTnVtID0gWydPTkUnLCAnVFdPJywgJ1RIUkVFJywgJ0ZPVVInLCAnRklWRSddO1xyXG5cclxuICAkKCcubWVudS1saXN0LWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIG51bTEgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcubWVudS1saXN0LWxpbmsnKTtcclxuXHJcbiAgICBudW0xICs9IGVuZ051bVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtbGlzdC1saW5rLW51bScpLmh0bWwobnVtMSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgbnVtID0gWycwMScsICcwMicsICcwMycsICcwNCcsICcwNSddO1xyXG5cclxuICAkKCcubWVudS1saXN0LWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIG51bTIgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcubWVudS1saXN0LWxpbmsnKTtcclxuXHJcbiAgICBudW0yICs9IG51bVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtbGlzdC1saW5rLW51bScpLmh0bWwobnVtMik7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yNC5cbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgaWYocGFnZSA9PSAndHVsaXAnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3Jvc2UnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3Blb255Jyl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xuXG4gIH0gZWxzZSBpZihwYWdlID09ICdoeWRyYW5nZWEnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3JhbnVuY3VsdXMnKXtcblxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgfVxuXG59KTsiXX0=
