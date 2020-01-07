
// variables for quiz
var seconds = questions.length * 15;
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizBody = document.querySelector("#quiz");
var choicesDiv1 = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var page1 = document.querySelector(".page1");
var currentIndex = 0;
// var answerBtns;
// var timerId;

// variables to reference DOM elements
var submitBtn = document.getElementById("submit");

//On click: 
//timer starts and page moves to first question 
//start 10 second timer

function getQuestion(){

  page1.setAttribute("style", "display:none");

  let i = currentIndex;

  //Display first question
  var h3 = document.createElement("h3");
  h3.textContent = questions[i].title;

  //appends the h3 div to the main div that holds the questions
  quizBody.append(h3);

  for (j = 0; j < questions[i].choices.length; j++){

    //call first set of choices 
    var buttonDiv = document.createElement("div");
    var button = document.createElement("button");
    var resultEl = document.createElement("h4");
    var answerOutput = document.querySelector("#answer-output");
    var currentQuestion = 0;

    buttonDiv.append(button);
    button.setAttribute("id", "responses" + j);
    button.setAttribute("res", questions[i].choices[j]);
    button.textContent = questions[i].choices[j];
    
    currentQuestion++;

    quizBody.append(buttonDiv);

    document.querySelector("#responses" + j).addEventListener("click", function (event) {
      var selectedAns = event.target.attributes[1].nodeValue;

      if (selectedAns === questions[i].answer) {

          resultEl.textContent = ("Correct!");
          answerOutput.innerHTML = "";
          answerOutput.append(resultEl);

      }
      else {

          resultEl.textContent = ("Incorrect!");
          answerOutput.innerHTML = "";
          answerOutput.append(resultEl);
          seconds = seconds - 15
          timer.textContent = "Time: " + seconds;
          verifyTime(); 
    }

  index++;

  // verify if index is < questions.length
  if (index < questions.length) {
      getQuestion();
  }
  else {
      endQuiz();
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
  // stop timer
  clearInterval(timerEl);
  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  // hide questions section
  scoreContainer.setAttribute("class", "hide");


  endScreen.innerHTML = "";
  var total = document.querySelector("#total-score");
  var addUser = document.querySelector("#add-user");
  total.textContet = seconds;

  var resultsArea = document.querySelector("#resultsarea");
  resultsArea.style.display = "block";

  addUser.addEventListener("click", function () {
      event.preventDefault()
      
      // the input
      var initials = document.querySelector("#initials").value;
      document.querySelector("#initials").value = "";

      // then add to the localstorage
      // key totalscores [{user:"", score:},]

      if (initials !== "") {
          var newUser = {
              user: initials,
              score: seconds
          }
          var totalScores = JSON.parse(localStorage.getItem("totalScores"))
          console.log(totalScores);
          if (!totalScores) {
              totalScores = []
          }
          totalScores.push(newUser)
          localStorage.setItem("totalScores", JSON.stringify(totalScores))
      }
  })
}


// function saveHighscore() {
//   // get value of input box
//   var initials = initialsEl.value.trim();
//   // make sure value wasn't empty
//   if (initials !== "") {
//     // get saved scores from localstorage, or if not any, set to empty array
//     var highscores =
//       JSON.parse(window.localStorage.getItem("highscores")) || [];
//     // format new score object for current user
//     var newScore = {
//       score: time,
//       initials: initials
//     };
//     // save to localstorage
//     highscores.push(newScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highscores));
//     // redirect to next page
//     window.location.href = "highscores.html";
//   }
// }


startButton.addEventListener("click", function(){
  event.preventDefault();
  
  var timeInterval = setInterval(function(){
    timerEl.textContent = "Time: " + seconds--;
    verifyTime();
  }, 1000);
  
  getQuestion();
});
