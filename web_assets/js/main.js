//Nav Shrinks on scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

//upate active class
var activeNav;
    $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    activeNav = $(this).parent();
    console.log(activeNav);
});

$(document).ready($(activeNav).addClass("active"));









