/**
 * Created by Administrator on 2017-08-04.
 */

$(function(){

  var scrollDelta = 0;

  $(window).on('mousewheel', function(e){

    if(e.originalEvent.wheelDelta < 0){

      scrollDelta += e.originalEvent.wheelDelta;

    } else {

      scrollDelta += e.originalEvent.wheelDelta;

    }
    console.log( -1 * ( $('.menu-list').offset().left + $('.menu-list').width()));

    if( scrollDelta >=0 ){

      scrollDelta = 0;

    } else if( scrollDelta <= -1 * ($('.menu-list').offset().left + $('.menu-list').width()) ){

      scrollDelta = -1 *($('.menu-list').offset().left + $('.menu-list').width());

    }

    var tr = 'translateX(' + scrollDelta + 'px)';
    $('.menu-list').css({
      transform:tr
    });

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA0LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbERlbHRhID0gMDtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgaWYoZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgPCAwKXtcclxuXHJcbiAgICAgIHNjcm9sbERlbHRhICs9IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSArPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyggLTEgKiAoICQoJy5tZW51LWxpc3QnKS5vZmZzZXQoKS5sZWZ0ICsgJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkpKTtcclxuXHJcbiAgICBpZiggc2Nyb2xsRGVsdGEgPj0wICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IDA7XHJcblxyXG4gICAgfSBlbHNlIGlmKCBzY3JvbGxEZWx0YSA8PSAtMSAqICgkKCcubWVudS1saXN0Jykub2Zmc2V0KCkubGVmdCArICQoJy5tZW51LWxpc3QnKS53aWR0aCgpKSApe1xyXG5cclxuICAgICAgc2Nyb2xsRGVsdGEgPSAtMSAqKCQoJy5tZW51LWxpc3QnKS5vZmZzZXQoKS5sZWZ0ICsgJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgdHIgPSAndHJhbnNsYXRlWCgnICsgc2Nyb2xsRGVsdGEgKyAncHgpJztcclxuICAgICQoJy5tZW51LWxpc3QnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06dHJcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
