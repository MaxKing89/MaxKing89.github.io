//quiz question and answers
var questions = [{
    question: "What is Max's Favorite Sport?",
    answer: "Hockey",
    wrongAnswer1:"Soccer",
    wrongAnswer2:"Football",
    wrongAnswer3:"Spelunking",
    picture: "test.jpg"
},{
    question: "What do I want for my next car?",
    answer: "Tesla",
    wrongAnswer1:"Porshe F-150",
    wrongAnswer2:"Stingray Corvette",
    wrongAnswer3:"car 4",
    picture: "test2.jpg"
}, {
    question: "What was the best money I have ever spent",
    answer: "On a pet",
    wrongAnswer1:"On a tv",
    wrongAnswer2:"On a hockey stick",
    wrongAnswer3:"On a computer",
    picture: "testpic3.jpg",
}, {
    question: "Who do I love",
    answer: "Gilly",
    wrongAnswer1:"Jen Ann",
    wrongAnswer2:"Whoopy Goldberg",
    wrongAnswer3:"HIllary Clinton",
    picture: "testpic3.jpg",
    }             
];


//first function for question 1
function showBuilder(question, answer, wrongAnswer1, wrongAnswer2, wrongAnswer3, picture){
    
    $('#question-first').html('<div><h1>' + question + '</h1><button type="button" class="btn btn-primary btn-lg btn-block answer" id="1" onclick="magicMaker(this.id)">' + answer + '</button><button type="button" class="btn btn-primary btn-lg btn-block" id="2" onclick="magicMaker(this.id)">' + wrongAnswer1 + '</button><button type="button" class="btn btn-primary btn-lg btn-block" id="3" onclick="magicMaker(this.id)">' + wrongAnswer2 + '</button><button type="button" class="btn btn-primary btn-lg btn-block" id="4" onclick="magicMaker(this.id)">' + wrongAnswer3+ '</button></div>');
}
//function to build all other questions that will default as hidden
function hideBuilder(question, answer, wrongAnswer1, wrongAnswer2, wrongAnswer3, picture){
    
    $('.questions-' + length).append('<div><h1>' + question + '</h1><button type="button" class="btn btn-primary btn-lg btn-block">' + answer + '</button><button type="button" class="btn btn-primary btn-lg btn-block">' + wrongAnswer1 + '</button><button type="button" class="btn btn-primary btn-lg btn-block">' + wrongAnswer2 + '</button><button type="button" class="btn btn-primary btn-lg btn-block">' + wrongAnswer3+ '</button></div>');
}

//create divs
function createDivs(length){
    console.log('length is  ' + length);
    for(i = 0; i < length; length--){
        $('#questions').append('<div class="questions-' + length + ' hide" id="questions-' + length +'"></div>');  
        console.log(length + " iterations");
    }
}
//return the answer for the current element
function getAnswer(){
   var currentAnswer = $('.answer').html();
    console.log(currentAnswer + " is the current answer");
    alert(currentAnswer);
    return currentAnswer;
}

//return the clicked function html
function getElem(clickedElem){
    var thisElement = $('#' + clickedElem).html();
    console.log(thisElement + " is the current element");
    alert(thisElement);
    return thisElement;
}

function showNext(){
    $('id="questions-' + length +'"').remove('.hide');
}

//compare the answer to the element html
function magicMaker(clicked_ID){
    theAnswer = getAnswer();
    theElement = getElem(clicked_ID);
    console.log("the answer is " + theAnswer);
    console.log("the element is " + theElement);
    
    if(theAnswer === theElement){
        alert("Awesome, you got it right!");
        showNext(); 
    } else {
        alert("Sorry thats not the right answer");
    }
}


//add the selected class
$('#question-first').click(function(){
    $(this).addClass('selected');
  });

var length = questions.length;

var counter = 0;

var question1 = showBuilder(questions[counter].question, questions[counter].answer, questions[counter].wrongAnswer1, questions[counter].wrongAnswer2, questions[counter].wrongAnswer3, questions[counter].picture);
length--;

var createdDivs = createDivs(length);

var objects = $.each(questions, function(index,val){
    
    $.each(val,function(key,value){

        console.log(counter);
        
        var questions2 = hideBuilder(questions[counter].question, questions[counter].answer, questions[counter].wrongAnswer1, questions[counter].wrongAnswer2, questions[counter].wrongAnswer3, questions[counter].picture);

          /* $('body').html('<div><h1>' + questions[0].question + '</h1><button type="button" class="btn btn-primary btn-lg btn-block">' + questions[0].answer +'</button><button type="button" class="btn btn-primary btn-lg btn-block">' + questions[0].wrongAnswer1 + '</button><button type="button" class="btn btn-primary btn-lg btn-block">' + questions[0].wrongAnswer2 + '</button><button type="button" class="btn btn-primary btn-lg btn-block">' + questions[0].wrongAnswer3 + '</button></div>');*/
        counter ++;
    
    });
});
