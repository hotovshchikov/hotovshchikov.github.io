$(document).ready(function () {

  'use strict';

  $('.regField').hover(function() {
    $(this).next().stop().animate({opacity: "show", left: "260"}, "slow");
  }, function() {
    $(this).next().stop().animate({opacity: "hide", left: "250"}, "fast");
  }). focus(function () {
    $(this).next().animate({opacity: "show", left: "260"}, "slow");
  }).blur(function () {
    $(this).next().animate({opacity: "hide", left: "250"}, "fast");
  });

  $('#tabs').hide();

  $('.panel').click(function () {
    $('#tabs').toggle('slow');
  });

    var tabContainers = $('.tabs-box');
    tabContainers.hide().filter(':first').show();

    $('.link').click(function(){
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.link').parent('li').removeClass('selected');
      $(this).parent('li').addClass('selected');
      return false;
    }).filter(':first').click();


});
