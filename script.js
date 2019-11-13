
// variables for quiz
var startButton = document.querySelector("#startButton");
// var quiz = document.querySelector("#quiz");
// var qImg = document.querySelector("#qimg");
// var question = document.querySelector("#question");
// var counter = document.querySelector("#counter");
// var timeGuage = document.querySelector("#timeGuage");

// var choiceA = document.querySelector("#A");
// var choiceB = document.querySelector("#B");
// var choiceC = document.querySelector("#C");
// var choiceD = document.querySelector("#D");

// var scoreContainer = document.querySelector("#scoreContainer");

// var lastQuestionIndex = questions.length[-1];
// var runningQuestionIndex = 0;

//set timer 
var deadline = '00:00:30'; 

startButton.addEventListener("click", function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var minutes = Math.floor( (t/1000/60) % 60);
    var seconds = Math.floor( (t/1000) % 60);
    console.log(endtime);
    return{
        'total': t,
        'minutes': minutes,
        'seconds': seconds,
    };

function initializeClock(counter, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        clock.innterHTML = 'minutes: ' + t.minutes; +
                            'seconds: ' + t.seconds;
        if (t.total <= 0){
            clearInterval(timeinterval);
        }
    }, 1000);
    initializeClock('clockdiv', deadline);
}
});

console.log(deadline);

//when user pushes start quiz button, timer starts and page moves to first question
// startButton.addEventListener("click", function(event){
//     setTimeout(function(){
//         console.log(startButton);
//         function renderQuestion(){
//             var q = questions[runningQuestionIndex];
//             question.innerHTML = "<p>" +q.question+ "</p>";
//             choiceA.innerHTML = q.choiceA;
//             choiceB.innerHTML = q.choiceB;
//             choiceC.innerHTML = q.choiceC;
//             choiceD.innerHTML = q.choiceD;   
//         }

//         renderQuestionIndex = 0;
//         renderQuestion();
    
//         runningQuestionIndex++
//         renderQuestion();
            
//         })
//     });

    
    
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