// answers arrary

var answers = {
    answer1 : "Hockey",
    answer2 : "Tesla Model 3",
    answer3 : "My dog, Arnold",
    answer4 : "Snowboarding",
    answer5 : "Pizza",
    answer6 : "Golfing",
    answer7 : "NHL 17",
    answer8 : "Mexico",
    answer9 : "Elon Musk",
    answer10 : "Red Hot Chili Peppers",
    
}
// end answer array

//Set counter and initial amount of correct answers

var counter = 1;
var correctAnswers = 0;

//get answer from the answer array

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

//get the response the user clicked on

function getResponse(el){
   var userAnswer = el.innerHTML;
    /*alert(userAnswer);
    console.log(userAnswer);*/
    return userAnswer;
}

// set initial number of attempts to 1
var numberOfAttempts =1;


//see if the ansewr matches the response
function checkResponse(el){
    var thisAnswer = getAnswer();
    var param = el;
    var thisResponse = getResponse(param);
   
    
    //if statement to compare to see if thisAnswer = this response
    
    if (thisAnswer === thisResponse){
        var combinedRight = '#my-modal-'+counter+'-correct';
        //alert(combined);
        //show modal for correct answer
        $(combinedRight).modal('show');
    	//alert("Awesome, you got the correct answer!");
        //alert(numberOfAttempts);
        //if number of attempts is greater than one do not add to the correct score variable if not add to correct score
        if(numberOfAttempts >1){
             numberOfAttempts = 1;
        }else{
            correctAnswers++;
           $( "#number-correct" ).remove(  );
            $( ".number" ).append( '<div class="number-current" id="number-correct"><h4>' + correctAnswers + '</h4></div>');
            
        
            if('#question-11'){
                //append the final total score at end of quiz
                $('.final-score-number').append('.number');
            }
        }
    }else {
        numberOfAttempts++;
        //alert(numberOfAttempts);
    	var combinedWrong = '#my-modal-'+counter+'-wrong';
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
//show next question
function showNextQuestion(){
            var questionToShow = '#question-'+counter;
            $(questionToShow).removeClass('hide');
        }
//run both functions
function hideShow(){
    hideQuestion();
    showNextQuestion();
}



//If user clicks the onion skin on the correct modal, run hideshow function
/*$("#myModal").on("hide.bs.modal", function () {
    hideShow();
});*/
//when the correct modal is closed run the hideshow function
$('.modal-correct').on('hide.bs.modal', hideShow);