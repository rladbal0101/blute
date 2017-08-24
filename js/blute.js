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
/**
 * Created by Administrator on 2017-08-04.
 */

$(function(){

  var scrollDelta = 0;

  $(window).on('mousewheel', function(e){

    scrollDelta += e.originalEvent.wheelDelta;

    if( scrollDelta >=0 ){

      scrollDelta = 0;

    } else if( scrollDelta <= -($('.menu-list').width() - $(window).width()) ){

      scrollDelta = -($('.menu-list').width() - $(window).width());

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

  if( page == 'tulip'){

  } else if( page == 'rose' ){

    $('.gnb-list-link')

  } else if( page == 'peony' ){

  } else if( page == 'hydrangea' ){

  } else if( page == 'ranunculus' ){

  }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWFpbi5qcyIsIl9wYWdlX2NoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJibHV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xNi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5hbmltYXRlJykuc2Nyb2xsYSgpO1xyXG5cclxuICAkKCdnbmItbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNzcyh7YmFja2dyb3VuZDonI2ZmOWZiNCd9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5zcXVhcmUuc21hbGwnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5zbWFsbC10ZXh0LmNoYW5nZScpLmNzcyh7ZGlzcGxheTonbm9uZSd9KTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5oaWRkZW4tdGV4dC13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcucG9wdXAtYnRuLW1vcmUnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5zcXVhcmUuc21hbGwnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmhpZGRlbi10ZXh0LXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cC1idG4tbW9yZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNtYWxsLXRleHQuY2hhbmdlJykuY3NzKHtkaXNwbGF5OidibG9jayd9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cC1idG4tbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtaGVpZ2h0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLm5leHQoJy5wb3B1cC13aWR0aCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBvcHVwLWJ0bi1jbG9zZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5wb3B1cC13aWR0aCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcucG9wdXAtaGVpZ2h0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICBpZihwYWdlID09ICd0dWxpcCcpe1xyXG5cclxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0gZWxzZSBpZihwYWdlID09ICdyb3NlJyl7XHJcblxyXG4gICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSgxKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3Blb255Jyl7XHJcblxyXG4gICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSBlbHNlIGlmKHBhZ2UgPT0gJ2h5ZHJhbmdlYScpe1xyXG5cclxuICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0gZWxzZSBpZihwYWdlID09ICdyYW51bmN1bHVzJyl7XHJcblxyXG4gICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSg0KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfVxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA0LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgc2Nyb2xsRGVsdGEgKz0gZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgaWYoIHNjcm9sbERlbHRhID49MCApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAwO1xyXG5cclxuICAgIH0gZWxzZSBpZiggc2Nyb2xsRGVsdGEgPD0gLSgkKCcubWVudS1saXN0Jykud2lkdGgoKSAtICQod2luZG93KS53aWR0aCgpKSApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAtKCQoJy5tZW51LWxpc3QnKS53aWR0aCgpIC0gJCh3aW5kb3cpLndpZHRoKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKCcubWVudS1saXN0JykuY3NzKHtcclxuICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGVYKCcgKyBzY3JvbGxEZWx0YSArICdweCknXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHZhciBlbmdOdW0gPSBbJ09ORScsICdUV08nLCAnVEhSRUUnLCAnRk9VUicsICdGSVZFJ107XHJcblxyXG4gICQoJy5tZW51LWxpc3QtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgbnVtMSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5tZW51LWxpc3QtbGluaycpO1xyXG5cclxuICAgIG51bTEgKz0gZW5nTnVtW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1saXN0LWxpbmstbnVtJykuaHRtbChudW0xKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHZhciBudW0gPSBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1J107XHJcblxyXG4gICQoJy5tZW51LWxpc3QtbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgbnVtMiA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5tZW51LWxpc3QtbGluaycpO1xyXG5cclxuICAgIG51bTIgKz0gbnVtW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1saXN0LWxpbmstbnVtJykuaHRtbChudW0yKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI0LlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICBpZiggcGFnZSA9PSAndHVsaXAnKXtcblxuICB9IGVsc2UgaWYoIHBhZ2UgPT0gJ3Jvc2UnICl7XG5cbiAgICAkKCcuZ25iLWxpc3QtbGluaycpXG5cbiAgfSBlbHNlIGlmKCBwYWdlID09ICdwZW9ueScgKXtcblxuICB9IGVsc2UgaWYoIHBhZ2UgPT0gJ2h5ZHJhbmdlYScgKXtcblxuICB9IGVsc2UgaWYoIHBhZ2UgPT0gJ3JhbnVuY3VsdXMnICl7XG5cbiAgfVxuXG59KTsiXX0=
