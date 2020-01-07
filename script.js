
// variables for quiz
var seconds = questions.length * 15;
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizBody = document.querySelector("#quiz");
var questionBody = document.querySelector("#main-question");
var choicesDiv = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var page1 = document.querySelector(".page1");
var currentIndex = 0;
var scorepage;

//On click: 
//timer starts and page moves to first question

function getQuestion(){

  page1.setAttribute("style", "display:none");

  let i = currentIndex;

  //Display first question
  questionBody.innerText = questions[i].title;

  for (j = 0; j < questions[i].choices.length; j++){
    //call first set of choices 
    var buttonDiv = document.createElement("div");
    var button = document.createElement("button");
    var resultEl = document.createElement("h4");
    var answerOutput = document.querySelector("#answer-output");
    console.log("current Index", currentIndex);
    
    button.setAttribute("id", "responses" + j);
    button.textContent = questions[i].choices[j];
    buttonDiv.append(button);
    choicesDiv.append(buttonDiv);

    document.querySelector("#responses" + j).addEventListener("click", function (event) {
      var selectedAns = event.target.innerHTML;
      console.log(selectedAns);

      if (selectedAns === questions[i].answer) {
          resultEl.textContent = ("Correct!");
          answerOutput.innerText = "";
          answerOutput.append(resultEl);
          console.log("correct");
      }
      else {
          resultEl.textContent = ("Incorrect!");
          answerOutput.innerText = "";
          answerOutput.append(resultEl);
          seconds = seconds - 15
          timer.textContent = "Time: " + seconds;
          console.log("incorrect");
          verifyTime(); 
    }

  currentIndex++;
  questionBody.innerHTML ="";
  choicesDiv.innerHTML="";

  // verify if index is < questions.length
  if (currentIndex < questions.length) {
      getQuestion();
  }
  else {
      endQuiz();
      console.log("At the end!!");
  }
})}
}

function verifyTime() {
  if (seconds < 0) {
      timer.textContent = "Time's Up!";
      clearInterval(timeInterval);
      seconds = 0
      endQuiz()
  }
}

function endQuiz() {
  quizBody.innerHTML = "";
  clearInterval(timerEl);
  timerEl.remove();

  var scorepage = document.getElementById("scorepage");

  var finalScoreEl = document.getElementById("total-score");
  finalScoreEl.textContent = "Final Score: " + seconds;
  
  var endNote = document.createElement("h4");
  endNote.textContent = "Thanks for Playing!"
  scorepage.prepend(endNote);

  var addUser = document.querySelector("#add-user");
  var userBtn = document.createElement("button");
  userBtn.textContent = "Submit Your Score";
  addUser.append(userBtn);
  var initials = document.createElement("input");
  initials.setAttribute("placeholder", "Insert Initials Here");
  addUser.prepend(initials);

  userBtn.addEventListener("click", function () {
      event.preventDefault()

      localStorage.setItem("User:" + initials, "Score:" + finalScoreEl);
      
      var results = document.querySelector("#results");
      results.textContent = "Score Board";
      var initialsList = document.createElement("ul");
      initialsList.textContent = initials.value + " " + finalScoreEl.textContent;
      results.append(initialsList);
  })
}

startButton.addEventListener("click", function(){
  event.preventDefault();
  
  var timeInterval = setInterval(function(){
    timerEl.textContent = "Time: " + seconds--;
    verifyTime();
  }, 1000);
  
  getQuestion();
});
