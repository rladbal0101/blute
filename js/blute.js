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

  //$('.menu-list-link').on()

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmx1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDQuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsRGVsdGEgPSAwO1xyXG5cclxuICAkKHdpbmRvdykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBzY3JvbGxEZWx0YSArPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICBpZiggc2Nyb2xsRGVsdGEgPj0wICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IDA7XHJcblxyXG4gICAgfSBlbHNlIGlmKCBzY3JvbGxEZWx0YSA8PSAtKCQoJy5tZW51LWxpc3QnKS53aWR0aCgpIC0gJCh3aW5kb3cpLndpZHRoKCkpICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IC0oJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkgLSAkKHdpbmRvdykud2lkdGgoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoJy5tZW51LWxpc3QnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoJyArIHNjcm9sbERlbHRhICsgJ3B4KSdcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIGVuZ051bSA9IFsnT05FJywgJ1RXTycsICdUSFJFRScsICdGT1VSJywgJ0ZJVkUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0xID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMSArPSBlbmdOdW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTEpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIG51bSA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0yID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMiArPSBudW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTIpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8kKCcubWVudS1saXN0LWxpbmsnKS5vbigpXHJcblxyXG59KTsiXX0=
