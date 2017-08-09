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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNC5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzY3JvbGxEZWx0YSA9IDA7XHJcblxyXG4gICQod2luZG93KS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIHNjcm9sbERlbHRhICs9IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgIGlmKCBzY3JvbGxEZWx0YSA+PTAgKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgICB9IGVsc2UgaWYoIHNjcm9sbERlbHRhIDw9IC0oJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkgLSAkKHdpbmRvdykud2lkdGgoKSkgKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhID0gLSgkKCcubWVudS1saXN0Jykud2lkdGgoKSAtICQod2luZG93KS53aWR0aCgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJCgnLm1lbnUtbGlzdCcpLmNzcyh7XHJcbiAgICAgIHRyYW5zZm9ybTondHJhbnNsYXRlWCgnICsgc2Nyb2xsRGVsdGEgKyAncHgpJ1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgZW5nTnVtID0gWydPTkUnLCAnVFdPJywgJ1RIUkVFJywgJ0ZPVVInLCAnRklWRSddO1xyXG5cclxuICAkKCcubWVudS1saXN0LWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIG51bTEgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcubWVudS1saXN0LWxpbmsnKTtcclxuXHJcbiAgICBudW0xICs9IGVuZ051bVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtbGlzdC1saW5rLW51bScpLmh0bWwobnVtMSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgbnVtID0gWycwMScsICcwMicsICcwMycsICcwNCcsICcwNSddO1xyXG5cclxuICAkKCcubWVudS1saXN0LWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIG51bTIgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcubWVudS1saXN0LWxpbmsnKTtcclxuXHJcbiAgICBudW0yICs9IG51bVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtbGlzdC1saW5rLW51bScpLmh0bWwobnVtMik7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLyQoJy5tZW51LWxpc3QtbGluaycpLm9uKClcclxuXHJcbn0pOyJdfQ==
