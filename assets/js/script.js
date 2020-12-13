// STEPS FOR DOM MANIPULATION:
// 1. Create an element
// 2. Add content
// 3. Append to an existing element

// Question objects
var firstQuestion = {
  question: "Commonly used data types do NOT include:",
  answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  correctAnswer: "3. alerts",
};

var secondQuestion = {
  question: "The condition in an if / else statement is enclosed within ____.",
  answers: [
    "1. quotes",
    "2. curly brackets",
    "3. parentheses",
    "4. square brackets",
  ],
  correctAnswer: "3. parentheses",
};

var thirdQuestion = {
  question: "Arrays in JavaScript can be used to store ____.",
  answers: [
    "1. numbers and strings",
    "2. other arrays",
    "3. booleans",
    "4. all of the above",
  ],
  correctAnswer: "4. all of the above",
};

var fourthQuestion = {
  question:
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: [
    "1. JavaScript",
    "2. terminal / bash",
    "3. for loops",
    "4. console.log",
  ],
  correctAnswer: "4. console.log",
};

var fifthQuestion = {
  question:
    "String values must be enclosed within ____ when being assigned to variables.",
  answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  correctAnswer: "3. quotes",
};

var questionsArray = [
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
  fifthQuestion,
];

// Question index tracker
var questionTracker = 0;

// Variables that hold existing elements.
var startButton = document.querySelector("button");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");
var ulElement = document.getElementById("answer-choices");
var outcomeDisplay = document.querySelector("#outcome");
var hrElement = document.querySelector("hr");
var questionDisplay = document.getElementById("question");

function correctDisplayTimer() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    
    hrElement.setAttribute("style", "display: block");
    outcomeDisplay.textContent = "Correct!";
    timeLeft--;

    if (timeLeft === 0) {
      hrElement.setAttribute("style", "display: none");
      outcomeDisplay.textContent = "";
      clearInterval(timeInterval);
    }

  }, 100);
}

function wrongDisplayTimer() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    
    hrElement.setAttribute("style", "display: block");
    outcomeDisplay.textContent = "Wrong!";
    timeLeft--;

    if (timeLeft === 0) {
      hrElement.setAttribute("style", "display: none");
      outcomeDisplay.textContent = "";
      clearInterval(timeInterval);
    }

  }, 100);
}

// Function for to start the quiz on the click of the Start Button
function startQuiz(event) {
  event.preventDefault();

  // Change heading to display question and remove paragraph text.
  headingDisplay.setAttribute("style", "display: none");
  questionDisplay.textContent = firstQuestion.question;
  paragraphDisplay.setAttribute("style", "display: none");

  // Remove Start Quiz button from page.
  startButton.setAttribute("style", "display: none");

  // Writes the next question
  writeNextQuestion();
}

// Function that writes the next question
function writeNextQuestion() {
  // Empty existing ul
  ulElement.innerHTML = "";

  for (var i = 0; i < questionsArray[questionTracker].answers.length; i++) {
    // Change question display
    questionDisplay.textContent = questionsArray[questionTracker].question;

    // Create li and append it to ul
    var liElement = document.createElement("li");
    liElement.textContent = "";
    ulElement.append(liElement);

    // Create button and append it to li
    var answerButton = document.createElement("button");
    answerButton.className = "btn";
    answerButton.textContent = questionsArray[questionTracker].answers[i];
    liElement.append(answerButton);

    // Check if the answer is correct and display "Correct!" or "Wrong!" and display for 1 second.
    answerButton.addEventListener("click", function (event) {
      if (
        event.target.textContent ===
        questionsArray[questionTracker].correctAnswer
      ) {
        correctDisplayTimer();
      } else {
        hrElement.setAttribute("style", "display: block");
        wrongDisplayTimer();
      }          

      // Take user to the next question after one second?
      function nextQuestionTimer() {
        var timeLeft = 5;
      
        var timeInterval = setInterval(function() {
          
          timeLeft--;
      
          if (timeLeft === 0) {
            questionTracker++;
            writeNextQuestion();
          }
      
        }, 100);
      }
      nextQuestionTimer();
     
      
      // Open highscores html
      // if(questionTracker > questionsArray.length){
      //   window.open("./highscores.html")
      // }
    });
  }
}

// Event listener for Start Button
startButton.addEventListener("click", startQuiz);

// Event listener for 'ul' element with 'li' answer choices.

// - DOM manipulation to change the h1 and paragraph text
// - DOM manipulation to create answer choice buttons
// - Event listeners on all of the answer choice buttons
// - Event listeners / DOM manipulation on each answer choice button such that
//   when one is clicked, the next question and answers appear

// *** DO SECOND TO LAST ***
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// *** DO LAST ***
// WHEN the game is over
// THEN I can save my initials and score
