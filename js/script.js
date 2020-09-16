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

// DONATE PAYMENT TABS
  $( function() {
    $( "#tabs" ).tabs();
  });

// MOBILR NAV
  $(".fas").click(function(){
    $(".nav__container-mobile").toggle();
    // $(".logo__sub-container").css("margin", "0 5px")
  });

  $(".nav-home, .nav-history, .nav-photos, .nav-donations, .nav-membersips").click(function(){
    $(".nav__container-mobile").hide();
  });
});

// LIGHTBOX
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
