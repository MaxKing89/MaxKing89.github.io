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

// end answer array

var counter = 1;



function getAnswer(){
    var answer = "answer";
    var current = counter;
    var currentAnswer = answer+counter;
    var thisAnswer = answers[currentAnswer];
    /*console.log(counter);
    console.log(thisAnswer);
    alert(thisAnswer);*/
    return thisAnswer;
    
}

function getResponse(el){
   var userAnswer = el.innerHTML;
    /*alert(userAnswer);
    console.log(userAnswer);*/
    return userAnswer;
}




function checkResponse(el){
    var thisAnswer = getAnswer();
    var param = el;
    var thisResponse = getResponse(param);
    
    //if statement to compare to see if thisAnswer = this response
    
    if (thisAnswer === thisResponse){
        var combinedRight = '#myModal-'+counter+'-correct';
        //alert(combined);
        $(combinedRight).modal('show');
    	//alert("Awesome, you got the correct answer!");
    }else {
    	var combinedWrong = '#myModal-'+counter+'-wrong';
        //alert(combined);
        $(combinedWrong).modal('show');
    	//alert("Awesome, you got the correct answer!");
    }
}


//hide question after successfully answering it 
    function hideQuestion(){
         var questionToHide = '#question-'+counter;
        $(questionToHide).hide();
        counter++;
    }

function showNextQuestion(){
            var questionToShow = '#question-'+counter;
            $(questionToShow).removeClass('hide');
        }

function hideShow(){
    hideQuestion();
    showNextQuestion();
}






