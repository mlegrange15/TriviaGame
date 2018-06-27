// On load run the startGame function
$(document).ready(function() {

// Function that appends the start button to the screen 
startGame = function(){
    $("#start-section").append('<button type="button" class="btn btn-secondary btn-lg btn-block start-button">START</button>');
}
    
// Function that will load the questions and begin the timer
launchGame= function (){

    $(".start-button").hide();

    time = setInterval(decrement, 1000);

    for (i=0; i < questionsOptions.length; i++){

          var gameDiv = $("<div>");

          var a = $('<p>' + questionsOptions[i].question + '</p>');

          var b = $('<div class="form-check">' + '<input class="form-check-input" type="radio" name="answer' + i + '" id="exampleRadios1" value="0">' + '<label class="form-check-label" for="exampleRadios1"></label>' + questionsOptions[i].answers[0] + '</div> <div class="form-check">' + '<input class="form-check-input" type="radio" name="answer' + i + '" id="exampleRadios1" value="1">' + '<label class="form-check-label" for="exampleRadios1"></label>' + questionsOptions[i].answers[1] + '</div> <div class="form-check">' + '<input class="form-check-input" type="radio" name="answer' + i + '" id="exampleRadios1" value="2">' + '<label class="form-check-label" for="exampleRadios1"></label>' + questionsOptions[i].answers[2] + '</div> <div class="form-check">' + '<input class="form-check-input" type="radio" name="answer' + i + '" id="exampleRadios1" value="3">' + '<label class="form-check-label" for="exampleRadios1"></label>' + questionsOptions[i].answers[3] + '</div>' );

          gameDiv.append(a,b);

          $("#questions-section").append(gameDiv);

          userGuess = b.val();

          console.log(userGuess);
    
    }

    var submitButton = $("<button>");

    submitButton.text("Submit");

    submitButton.attr("id","submit-Button");

    gameDiv.append(submitButton);


}

// submit button on click and run conditionals 

$(document).on("click", "#submit-Button", function(){
   
    console.log(wrongAnswers);
    console.log(correctAnswers);

   endGame();

 })

 endGame= function(){
 
    $.each($("input[name='answer0']:checked"), function() {

        if ($(this).val() === questionsOptions[0].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });

      $.each($("input[name='answer1']:checked"), function() {
        if ($(this).val() === questionsOptions[1].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });

      $.each($("input[name='answer2']:checked"), function() {
        if ($(this).val() === questionsOptions[2].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });
      $.each($("input[name='answer3']:checked"), function() {
        if ($(this).val() === questionsOptions[3].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });
      $.each($("input[name='answer4']:checked"), function() {
        if ($(this).val() === questionsOptions[4].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });
      $.each($("input[name='answer5']:checked"), function() {
        if ($(this).val() === questionsOptions[5].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });
      $.each($("input[name='answer6']:checked"), function() {
        if ($(this).val() === questionsOptions[6].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });
      $.each($("input[name='answer7']:checked"), function() {
        if ($(this).val() === questionsOptions[7].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });
      $.each($("input[name='answer8']:checked"), function() {
        if ($(this).val() === questionsOptions[8].correct) {
          correctAnswers++;
        }
        else {
          wrongAnswers++;
        }
      });

      $("#questions-section").hide();


      var resultDiv = $("<div>");

      var results = $("<h2> Correct Answers: " + correctAnswers + "</h2><br><h2> Wrong Answers: " + wrongAnswers + "</h2>");

        resultDiv.append(results);

        $("#results-section").append(resultDiv);

 }

//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #timer-number tag.
    $("#timer-section").html("<h2> Time Left: " + number + "</h2>");
    //  Once number hits zero...
    if (number === 0) {
        clearInterval(time);
      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

startGame();

// Clicking the start button will launch the questions and begin the timer
$(".start-button").on("click", function() { 

    launchGame();
 
 });

// Need a function to end the game when the time runs out and then dynamically show the score page.

// Need a on click function for a play again buttton to reload the game and start over. 


});

var correctAnswers = 0;
var wrongAnswers = 0;

var userGuess = [];

var time = 0;

var number = 30;

var questionsOptions = [
    {
    question: "Which instrument did Ted steal for Robin in the first episode and appears in Robin’s apartment for the rest of the series?",
    answers: ["French Horn", "Clarinet", "Tuba", "Drum"],
    correct: 0,
    },
    {
    question: "What is tattooed on Ted's lower back?",
    answers: [ "Dolphin", "Rainbow", "Skull","Butterfly"],
    correct: 3,
    },
    {
    question: "Barney, Ted, and Marshall all worked for GNB at some point. What does GNB stand for?",
    answers: [ "Gigantic Nation Bank", "George Nation Bank","Goliath Nation Bank", "Good Nation Bank",],
    correct: 2,
    },
    {
    question: "What did Barney have to wear for a year after losing a bet?",
    answers: ["Ducky Tie", "Panties", "A Wig", "Necklace"],
    correct: 0,
    },
    {
    question: "Which of these is one of Barney’s theories?",
    answers: ["The Mermaid Theory", "The Cloud Theory", "The Player Theory", "The Magician Theory"],
    correct: 0,
    },
    {
    question: "Which character was one of Ted’s serious girlfriends?",
    answers: ["Karen", "Stella", "Joni", "Rebecca"],
    correct: 1,
    },
    {
    question: "Who is Robin’s arch-enemy at work?",
    answers: ["Patrice", "Steve", "Cindy", "Patrick"],
    correct: 0,
    },
    {
    question: "What is the name of Lily’s high school boyfriend, to whom she ~technically~ lost her virginity?",
    answers: ["Shooter", "Scrouge", "Scooter", "Pooter"],
    correct: 2,
    },
    {
    question: "What is Marshall and Lily’s theory on how to be a happy couple?",
    answers: ["Olive Theory", "Computer Theory", "Berry Theory", "Cherry Theory"],
    correct: 0,
    }
];

// var correctAnswers = [
//     "French Horn",
//     "Butterfly",
//     "Goliath Nation Bank",
//     "Ducky Tie",
//     "The Mermaid Theory",
//     "Stella",
//     "Patrice",
//     "Scooter",
//     "Olive Theory",
// ]