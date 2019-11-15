
// variables for quiz
var startButton = document.querySelector("#startButton");
var timerEl = document.getElementById("timer");
var page1 = document.getElementsByClassName("page1");
var carousel = document.querySelector(".carousel");
var quiz = document.getElementById("quiz");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");

// var scoreContainer = document.querySelector("#scoreContainer");
//create functiont that loops through questions

var allQuestions = JSON.parse(localStorage.getItem("questions")) || questions;
console.log("allQuestions value", allQuestions);

function changeQuestions(){
  for(var i = 0; i < questions.length; i++){
    questions[i].question;
    console.log(questions[i].question);
  }
}

var currentIndex = 0;
//when user pushes start quiz button, timer starts and page moves to first question
//set timer 
startButton.addEventListener("click", (function(event){
  //15 seconds per question
  if(startButton === true){
    startButton.settAttribute('style', 'display: none');
  }
  
  currentIndex++;
  var secondsLeft = 5;

  setTimeout(function() {
  }, 1000)
  
  var interval = setInterval(function() {
    secondsLeft--;
    console.log('tick');
    if (secondsLeft === 0) {
      clearInterval(interval)
      console.log('Times Up!')
    }
  }, 1000)


  carousel.textContent = allQuestions[currentIndex];
  console.log(allQuestions[currentIndex]);

  quiz.appendChild(carousel);
  console.log(carousel);

  localStorage.setItem("Questions", JSON.stringify(allQuestions));

}));

changeQuestions();
    //change text.content of id "question" to access the question elements in the questions variable.
    //reference study session from Sarah for the variable/array grabbing thing
    //append questions to the div, using [i} in the for loop
    
    //style.display = "none" add to the main div that holds the start page to close out the page    
  
  
  //display timer on page
    //if an answer is incorrect, notify and remove 10 seconds from timer
    //if answer is correct, add 10 seconds to timer(or overall score)
    
 
    
    //once question answered, trigger next question
    //create for loop for transferring to next question, refer to review session from Sarah? 

    //at end of cycle, add up remaining time and add it to overall points earned for final score

    //need to link javascripts to html, put questions on top

    //NOTES/HINTS
    //JSON.stringify()
    //var studentStringified = JSON.stringify(students);
    //localstorage,setItem("students", studentsStringified);
    //var = studentsFromLovalStorage = localStorage.getItem("students");
    //JSON.parse()