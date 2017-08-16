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
/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('.square.small').on('mouseenter', function(){

    $(this).children('.hidden-text-wrap').addClass('on');
    $(this).children('.tulip-more-btn').addClass('on');
    $(this).children('.small-text.change').css({display:'none'});

  });

  $('.square.small').on('mouseleave', function(){

    $(this).children('.hidden-text-wrap').removeClass('on');
    $(this).children('.tulip-more-btn').removeClass('on');
    $(this).children('.small-text.change').css({display:'block'});

  });

  $('.square.small.more').on('click', function(){

    $(this).children('.tulip-origin-more').addClass('on');

  });

  //$('.square.small').on('mouseleave', function(){
  //
  //  $(this).children('.hidden-text-wrap').removeClass('on');
  //  $(this).children('.tulip-more-btn').removeClass('on');
  //
  //});

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tYWluLmpzIiwiX3R1bGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA0LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgc2Nyb2xsRGVsdGEgKz0gZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgaWYoIHNjcm9sbERlbHRhID49MCApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAwO1xyXG5cclxuICAgIH0gZWxzZSBpZiggc2Nyb2xsRGVsdGEgPD0gLSgkKCcubWVudS1saXN0Jykud2lkdGgoKSAtICQod2luZG93KS53aWR0aCgpKSApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAtKCQoJy5tZW51LWxpc3QnKS53aWR0aCgpIC0gJCh3aW5kb3cpLndpZHRoKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKCcubWVudS1saXN0JykuY3NzKHtcclxuICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGVYKCcgKyBzY3JvbGxEZWx0YSArICdweCknXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHZhciBlbmdOdW0gPSBbJ09ORScsICdUV08nLCAnVEhSRUUnLCAnRk9VUicsICdGSVZFJ107XHJcblxyXG4gICQoJy5tZW51LWxpc3QtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgbnVtMSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5tZW51LWxpc3QtbGluaycpO1xyXG5cclxuICAgIG51bTEgKz0gZW5nTnVtW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1saXN0LWxpbmstbnVtJykuaHRtbChudW0xKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHZhciBudW0gPSBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1J107XHJcblxyXG4gICQoJy5tZW51LWxpc3QtbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgbnVtMiA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5tZW51LWxpc3QtbGluaycpO1xyXG5cclxuICAgIG51bTIgKz0gbnVtW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1saXN0LWxpbmstbnVtJykuaHRtbChudW0yKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vJCgnLm1lbnUtbGlzdC1saW5rJykub24oKVxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLnNxdWFyZS5zbWFsbCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaGlkZGVuLXRleHQtd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnR1bGlwLW1vcmUtYnRuJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc21hbGwtdGV4dC5jaGFuZ2UnKS5jc3Moe2Rpc3BsYXk6J25vbmUnfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuc3F1YXJlLnNtYWxsJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5oaWRkZW4tdGV4dC13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcudHVsaXAtbW9yZS1idG4nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5zbWFsbC10ZXh0LmNoYW5nZScpLmNzcyh7ZGlzcGxheTonYmxvY2snfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuc3F1YXJlLnNtYWxsLm1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy50dWxpcC1vcmlnaW4tbW9yZScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8kKCcuc3F1YXJlLnNtYWxsJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gIC8vXHJcbiAgLy8gICQodGhpcykuY2hpbGRyZW4oJy5oaWRkZW4tdGV4dC13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgLy8gICQodGhpcykuY2hpbGRyZW4oJy50dWxpcC1tb3JlLWJ0bicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIC8vXHJcbiAgLy99KTtcclxuXHJcbn0pOyJdfQ==
