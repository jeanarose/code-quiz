// Variables that hold existing elements.
var startPage = document.getElementById("start-page");
var questionPage = document.getElementById("question-page");
var completedQuizPage = document.getElementById("completed-page");
var startButton = document.querySelector("button");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");
var outcomeDisplay = document.querySelector("#outcome");
var questionDisplay = document.getElementById("question");
var ulElement = document.getElementById("answer-choices");
var hrElement = document.querySelector("hr");

// Question objects
var questionsArray = [
  {
    question: "Commonly used data types do NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: "3. parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: "4. all of the above",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal / bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: "4. console.log",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "3. quotes",
  },
];

// Question index tracker
var questionTracker = 0;

// Displays "Correct!" or "Wrong!" for one second depending on what the user chose
function outcomeDisplayTimer() {
  hrElement.setAttribute("style", "display: block");
  if (
    event.target.textContent === questionsArray[questionTracker].correctAnswer
  ) {
    outcomeDisplay.textContent = "Correct!";
  } else {
    outcomeDisplay.textContent = "Wrong!";
  }
  var timeInterval = setTimeout(function () {
    hrElement.setAttribute("style", "display: none");
    outcomeDisplay.textContent = "";
    clearInterval(timeInterval);
  }, 500);
}

// Need an event listener for the submit button on the al done page
// Take the value of the input (initials) which will be one of the objects key values (when the user hits submit, you're going to form the object "Highscores")
// the other key value will be whatever time is left
// one key will be the initials, the other key will be the score
// Click submit > create an object with initials, score, and time left
// push object to the scores array
// Stringify array
// store in local storage
// redirect to highscores page
// parse array from local storage
// loop through it on the page

// Function that brings the user to the enter initials page
function enterInitials() {
  // Replace what's on the page with the All Done page
  // questionPage.innerHTML = "";
  // completedQuizPage.setAttribute("style", "display: block");
  alert("Enter initials!");
}

// Function that starts quiz
function startQuiz(event) {
  event.preventDefault();

  // Remove start page content and display first question
  startPage.innerHTML = "";
  questionDisplay.textContent = questionsArray[0].question;

  // Writes the next question
  writeNextQuestion();
}

// Function that writes the next question
function writeNextQuestion() {
  // Empty existing ul
  ulElement.innerHTML = "";

  if (questionTracker === questionsArray.length) {
    enterInitials();
  }

  for (var i = 0; i < questionsArray[questionTracker].answers.length; i++) {
    // Change question display to the next question
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
      outcomeDisplayTimer();

      // Take user to the next question after the previous question disappears
      function nextQuestionTimer() {
        var timeInterval = setTimeout(function () {
          questionTracker++;
          writeNextQuestion();
          clearInterval(timeInterval);
        }, 500);
      }
      nextQuestionTimer();
    });
  }
}

// Event listener for Start Button
startButton.addEventListener("click", startQuiz);

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
