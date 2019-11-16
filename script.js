
// variables for quiz
var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#timer");
var page1 = document.querySelector(".page1");
var carousel = document.querySelector(".carousel");
var quiz = document.querySelector("#quiz");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var mainQuestion = document.querySelector(".mainQuestion");
var answers = document.querySelector(".answers");

// var scoreContainer = document.querySelector("#scoreContainer");
//create functiont that loops through questions

// var allQuestions = JSON.parse(localStorage.getItem("questions")) || questions;
// console.log("allQuestions value", allQuestions);

//function to access questions 
var currentIndex = 0;

function changeQuestions(){
  for(var i = 0; i < questions.length; i++){
    questions[i].question;
    currentIndex++;
  }
}

//when user pushes start quiz button, timer starts and page moves to first question
//set timer 
//can we use that css function that hides a div?
startButton.addEventListener("click", (function(event){
  //if start button is pushed, clear current display and move to next display
  if(startButton){
    page1.setAttribute("style", "display:none");
  };
  
  // carousel.textContent = allQuestions[currentIndex];
  // console.log(allQuestions[currentIndex]);

  if(startButton){
    for (var i = 0; i < questions.length; i++){
    //pull in question 1 
      console.log(questions[i].question);

      var h3 = document.createElement("h3");
      $("h3").text(questions[i].question);
      mainQuestion.appendChild(h3);
    
    for(var j = 0; j < questions[i].choices.length; j++){
      console.log(questions[i].choices[j].choices);
      var button = document.createElement("button");
      $("button").text(questions[i].choices[j].choices);
      answers.appendChild(button);
    }

    console.log(questions[i].answer);
  }; 
    //create a table row CHANGE THESE TO H3 and BUTTON divs 
        // var tr = document.createElement("tr");
        // //create a; table data cell(td) and inside of there, build out an <a> tag with the link and the text of the bookmark inside of it 
        // var td = document.createElement("td");
        // //<a href = 'link here' target='_blank'>name<a>
        // td.innerHTML = `<div>${questions[i]}</div>`;
        // //figure out how to get it on the page, append the td's into the TR (table row)
        // tr.appendChild(td);
        // //append the tr with all the data in it to the html
        // quiz.appendChild(td);
        
        
        //15 seconds per question
        var secondsLeft = 10;
                
        var interval = setInterval(function() {
          timerEl.textContent = "Time: " + secondsLeft--;
          console.log('tick');

          if (secondsLeft === -1) {
            clearInterval(interval)
            console.log('Times Up!')
          }
        }, 1000);

        changeQuestions();
    };

  // var answers = localStorage.getItem(document.questions.choices);
  // document.getElementById("quiz").value = answer;
}));

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