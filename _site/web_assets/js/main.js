//Nav Shrinks on scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

// answers arrary

var answers = {
    answer1 : "Hockey",
    answer2 : "Tesla Model 3",
    answer3 : "My dog, Arnold",
    answer4 : "Snowboarding",
    
}


function getElem(clickedElem){
    var thisElement = $('#' + clickedElem).html();
    console.log(thisElement + " is the current element");
    alert(thisElement);
    return thisElement;
}







