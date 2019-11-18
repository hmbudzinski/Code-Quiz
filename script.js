
// variables for quiz
var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#timer");
var page1 = document.querySelector(".page1");
var quiz = document.querySelector("#quiz");

// var scoreContainer = document.querySelector("#scoreContainer");
//create functiont that loops through questions

//function to access questions 

function changeQuestions(){
  for(var i = 0; i < questions.length; i++){
    questions[i].question;
    currentIndex++;
  }
}

var currentIndex = 0;
//when user pushes start quiz button, timer starts and page moves to first question
startButton.addEventListener("click", function(event){
  //if start button is pushed, clear current display and move to next display
  if(startButton){
    page1.setAttribute("style", "display:none");

    for(var i = 0; i < questions.length; i++){
      
      var h3 = document.createElement("h3");
      h3.textContent = questions[i].question;
      console.log(questions[i].question);
      var mainQuestion = document.getElementById("main-question");
      mainQuestion.appendChild(h3);
    }

    for(var j = 0; j < questions[i].choices[j].length; j++){
      
      var button = document.createElement("button");
      button.textContent = questions[i].choices[j].choices;
      console.log(questions[i].choices[j].choices);
      var answers = document.getElementById("answers");
      answers.appendChild(button);
    }

    var secondsLeft = 20;
    
    var interval = setInterval(function() {
      timerEl.textContent = "Time: " + secondsLeft--;
      console.log('tick');
      
      if(secondsLeft === 15){
        changeQuestions();
      }
      
      if (secondsLeft === -1) {
        clearInterval(interval)
      console.log('Times Up!')
      }
    }, 1000);
};
    
answers.addEventListener("click", function(){
console.log("answer clicked");
       
      for (var k = 0; k < questions.length; k++){;
          console.log(questions[i].answer[k].answer);
          
          if(answer === true){
            alert("Correct!");
          }
          else {
            alert("Incorrect");
          }          
        }  
    }   
)});

    //15 seconds per question

    //reference study session from Sarah for the variable/array grabbing thing  
  
    //if an answer is incorrect, notify and remove 10 seconds from timer

    //if answer is correct, add 10 seconds to timer(or overall score)
    
    //once question answered, trigger next question

    //at end of cycle, add up remaining time and add it to overall points earned for final score

    //NOTES/HINTS
    //JSON.stringify()
    //var studentStringified = JSON.stringify(students);
    //localstorage,setItem("students", studentsStringified);
    //var = studentsFromLovalStorage = localStorage.getItem("students");
    //JSON.parse()