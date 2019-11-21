
// variables for quiz
var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#timer");
var page1 = document.querySelector(".page1");
var quiz = document.querySelector("#quiz");

// var scoreContainer = document.querySelector("#scoreContainer");
//create functiont that loops through questions

var currentIndex = 0;
//when user pushes start quiz button, timer starts and page moves to first question
startButton.addEventListener("click", function(event){
  //if start button is pushed, clear current display and move to next display
  if(startButton){
    //clears first page
    page1.setAttribute("style", "display:none");
      //creates new element to store questions
      var h3 = document.createElement("h3");
      //adds question to the new element
      h3.textContent = questions[currentIndex].question;
      console.log(questions[currentIndex].question);
      //call element main-question
      var mainQuestion = document.getElementById("main-question");
      //append the h3 element to the main-question element
      mainQuestion.appendChild(h3);
      
      //sets how many seconds the clock will run
      var secondsLeft = 20;
      
      var interval = setInterval(function() {
        timerEl.textContent = "Time: " + secondsLeft--;
        console.log('tick');
        //if seconds left gets down to 15, move to the next question
        if(secondsLeft === 15){
          currentIndex++;
        }
        if (secondsLeft === -1) {
          clearInterval(interval)
          console.log('Times Up!')
        }
      }, 1000);

      //calls answers to link to page
      function nextQuestion(){
        console.log(questions[currentIndex].choices);
        for(var j = 0; j < questions[currentIndex].choices.length; j++){
          //creates button elements to attach to question
          var button = document.createElement("button");
          button.textContent = questions[currentIndex].choices[j];
          //grabs div of answers
          var answers = document.getElementById("answers");
          //append the button div to the answers div
          answers.appendChild(button);
        }

        //add an event listener to each button
      button.addEventListener("click", function(event){
          //create a div to link the text content of the event target
          var usersChoice = event.target.textContent;
          console.log(usersChoice);
          //if the new variable of users choice equals the variable in the
          //questions page, change to the next question
          if (usersChoice === questions[currentIndex].answer){
                console.log("correct!")
                currentIndex++;
          } else{
                  console.log("incorrect");
                  currentIndex++;
              // } // end if 
          }

          }); // end button event listener
        }
    })};

    
// answers.addEventListener("click", function(){
// console.log("answer clicked");
       
//       for (var k = 0; k < questions.length; k++){;
//           console.log(questions[i].answer[k].answer);
          
//           if(answer === true){
//             alert("Correct!");
//           }
//           else {
//             alert("Incorrect");
//           }          
//         }  
//     }   

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