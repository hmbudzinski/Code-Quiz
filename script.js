
// variables for quiz
var startButton = document.querySelector("#startButton");
var quiz = document.querySelector("#quiz");
var qImg = document.querySelector("#qimg");
var question = document.querySelector("#question");
var counter = document.querySelector("#counter");
var timeGuage = document.querySelector("#timeGuage");

var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

var scoreContainer = document.querySelector("#scoreContainer");

var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;

// startButton.addEventListener("click", function(event){

    
    function renderQuestion(){
        var q = questions[runningQuestionIndex];
        question.innerHTML = "<p>" +q.question+ "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;   
    }
    
    renderQuestionIndex = 0;
    renderQuestion();

    runningQuestionIndex++
    renderQuestion();
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