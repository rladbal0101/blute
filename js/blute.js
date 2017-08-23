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

  $('.menu-list-link').on('mouseenter', function(){



  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJibHV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xNi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJ2duYi1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY3NzKHtiYWNrZ3JvdW5kOicjZmY5ZmI0J30pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnNxdWFyZS5zbWFsbCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNtYWxsLXRleHQuY2hhbmdlJykuY3NzKHtkaXNwbGF5Oidub25lJ30pO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmhpZGRlbi10ZXh0LXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cC1idG4tbW9yZScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnNxdWFyZS5zbWFsbCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaGlkZGVuLXRleHQtd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnBvcHVwLWJ0bi1tb3JlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc21hbGwtdGV4dC5jaGFuZ2UnKS5jc3Moe2Rpc3BsYXk6J2Jsb2NrJ30pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBvcHVwLWJ0bi1tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5wb3B1cC1oZWlnaHQnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQodGhpcykubmV4dCgnLnBvcHVwLXdpZHRoJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucG9wdXAtYnRuLWNsb3NlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykucGFyZW50cygnLnBvcHVwLXdpZHRoJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5wb3B1cC1oZWlnaHQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDQuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsRGVsdGEgPSAwO1xyXG5cclxuICAkKHdpbmRvdykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBzY3JvbGxEZWx0YSArPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICBpZiggc2Nyb2xsRGVsdGEgPj0wICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IDA7XHJcblxyXG4gICAgfSBlbHNlIGlmKCBzY3JvbGxEZWx0YSA8PSAtKCQoJy5tZW51LWxpc3QnKS53aWR0aCgpIC0gJCh3aW5kb3cpLndpZHRoKCkpICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IC0oJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkgLSAkKHdpbmRvdykud2lkdGgoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoJy5tZW51LWxpc3QnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoJyArIHNjcm9sbERlbHRhICsgJ3B4KSdcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIGVuZ051bSA9IFsnT05FJywgJ1RXTycsICdUSFJFRScsICdGT1VSJywgJ0ZJVkUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0xID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMSArPSBlbmdOdW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTEpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIG51bSA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0yID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMiArPSBudW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTIpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
