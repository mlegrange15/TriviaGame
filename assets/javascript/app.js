// On load run the startGame function
$(document).ready(function() {

    // Function that appends the start button to the screen 
startGame = function(){
    $("#start-section").append('<button type="button" class="btn btn-secondary btn-lg btn-block start-button">START</button>');
}
    startGame();
    // launchQuestions();

// Clicking the start button will launch the questions and begin the timer
$(".start-button").on("click", function() { 

    $(".start-button").hide();

    launchQuestions();
 
 });

// Function that will load the questions and begin the timer
launchQuestions = function (){

    time = setInterval(decrement, 300);

    for (i=0; i < questions.length; i++){
        
        $("#question-section").append(questions[i]);

    }  
   
}
//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#question-section").prepend("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

});

var time = 0;

var number = 100;

var questions = [
    "Which instrument did Ted steal for Robin in the first episode and appears in Robin’s apartment for the rest of the series?",
    "What is tattooed on Ted's lower back?",
    "Barney, Ted, and Marshall all worked for GNB at some point. What does GNB stand for?",
    "What did Barney have to wear for a year after losing a bet?",
    "Which of these is one of Barney’s theories?",
    "Which character was one of Ted’s serious girlfriends?",
    "Who is Robin’s arch-enemy at work?",
    "What is the name of Lily’s high school boyfriend, to whom she ~technically~ lost her virginity?",
    "What is Marshall and Lily’s theory on how to be a happy couple?",

]

var correct = [
    "French Horn",
    "Butterfly",
    "Goliath Nation Bank",
    "Ducky Tie",
    "The Mermaid Theory",
    "Stella",
    "Patrice",
    "Scooter",
    "Olive Theory",
]
