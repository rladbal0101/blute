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