
// variables for quiz
var startButton = document.querySelector("#startButton");
var timerEl = document.getElementById("timer");

// var quiz = document.querySelector("#quiz");
// var question = document.querySelector("#question");
// var timeGuage = document.querySelector("#timeGuage");

// var choiceA = document.querySelector("#A");
// var choiceB = document.querySelector("#B");
// var choiceC = document.querySelector("#C");
// var choiceD = document.querySelector("#D");

// var scoreContainer = document.querySelector("#scoreContainer");

// var lastQuestionIndex = questions.length[-1];
// var runningQuestionIndex = 0;



//when user pushes start quiz button, timer starts and page moves to first question
//set timer 
startButton.addEventListener("click", (function(){
    console.log('timer started');
    
    var secondsLeft = 30;
    
    setTimeout(function() {
      console.log('Set timeout complete');
    }, 1000)
    
    var interval = setInterval(function() {
      secondsLeft--;
      console.log('tick');
      if (secondsLeft === 0) {
        clearInterval(interval)
        console.log('Times Up!')
      }
    }, 1000)

    //display timer on page
    
    }));
    
    
    //when the user pushes the start button, pop up first question with four possible answers and start timer countdown
    //timer should be 15 seconds per questions, counting down from total
    //if user selects correct answer, add ten points to overall score, notify and move to next question
    //if user selects incorrect answer, notify of incorrect, remove ten seconds from timer and move to next question
    //cycle through all questions
    //at end of cycle, add up remaining time and add it to overall points earned for final score
    //need to link javascripts to html, put questions on top
    //JSON.stringify()
    //var studentStringified = JSON.stringify(students);

    //localstorage,setItem("students", studentsStringified);
    //var = studentsFromLovalStorage = localStorage.getItem("students");
    //JSON.parse()