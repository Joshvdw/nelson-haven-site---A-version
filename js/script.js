$(document).ready(function(){
  $("#history, #photos, #donations, #memberships").hide();
  $('.nav-home').css('font-weight', '600')

// NAVIGATION
  $(".nav-home").click(function(){
    $('#history, #photos, #donations, #memberships').hide();
    $('#home').show();
    $('.nav-home').css('font-weight', '600')
    $('.nav-history, .nav-photos').css('font-weight', 'normal')
  });
  $(".logo__container").click(function(){
    $('#history, #photos, #donations, #memberships').hide();
    $('#home').show();
    $('.nav-home').css('font-weight', '600')
    $('.nav-history, .nav-photos').css('font-weight', 'normal')
  });
  $(".nav-history").click(function(){
    $('#home, #photos, #donations, #memberships').hide();
    $('#history').show();
    $('.nav-history').css('font-weight', '600')
    $('.nav-home, .nav-photos').css('font-weight', 'normal')
  });
  $(".nav-photos").click(function(){
    $('#history, #home, #donations, #memberships').hide();
    $('#photos').show();
    $('.nav-photos').css('font-weight', '600')
    $('.nav-home, .nav-history').css('font-weight', 'normal')
  });
  $(".nav-donations").click(function(){
    $('#history, #home, #photos, #memberships').hide();
    $('#donations').show();
    $('.nav-home, .nav-history, .nav-photos').css('font-weight', 'normal')
  });
  $(".nav-memberships").click(function(){
    $('#history, #home, #photos, #donations').hide();
    $('#memberships').show();
    $('.nav-home, .nav-history, .nav-photos').css('font-weight', 'normal')
  });
});
