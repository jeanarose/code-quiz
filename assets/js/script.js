// Navbar variables
var timerString = document.getElementById("timer");
var secondsLeft = 75;
var timeInterval;

// Start page variables
var startPage = document.getElementById("start-page");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");
var startButton = document.querySelector("button");

// Question page(s) variables
var questionPage = document.getElementById("question-page");
var outcomeDisplay = document.querySelector("#outcome");
var questionDisplay = document.getElementById("question");
var ulElement = document.getElementById("answer-choices");
var hrElement = document.querySelector("hr");

// "All Done" page variables
var completedQuizPage = document.getElementById("completed-quiz");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit-button");
var scoreSpan = document.getElementById("user-score");

// Array of objects that holds the questions, answers, and correct answer
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

// High scores arrays
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Trackers / values
var questionTracker = 0;
var questionValue = 100 / questionsArray.length;
var numOfCorrect = 0;
var numOfWrong = 0;

// Function that starts the timer on the first question 
function startTimer() {
  timerString.textContent = secondsLeft;
  timeInterval = setInterval(function () {
    secondsLeft--;
    timerString.textContent = secondsLeft;

    if (secondsLeft === 0) {
      timerString.textContent = "0";
      clearInterval(timeInterval);
      enterInitials();
    }
  }, 1000);
}

// Function that starts quiz
function startQuiz(event) {
  event.preventDefault();
  // Remove start page content, display first question, and start timer
  startPage.innerHTML = "";
  questionDisplay.textContent = questionsArray[0].question;
  startTimer();
  // Writes the next question
  writeNextQuestion();
}

// Displays "Correct!" or "Wrong!" for one second depending on what the user chose
function answer() {
  hrElement.setAttribute("style", "display: block");
  if (
    event.target.textContent === questionsArray[questionTracker].correctAnswer
  ) {
    outcomeDisplay.textContent = "Correct!";
    numOfCorrect++;
  } else {
    outcomeDisplay.textContent = "Wrong!";
    secondsLeft = secondsLeft - 10;
    numOfWrong++;
  }
  var timeInterval = setTimeout(function () {
    hrElement.setAttribute("style", "display: none");
    outcomeDisplay.textContent = "";
    clearInterval(timeInterval);
  }, 500);
}

// Function that writes the next question
function writeNextQuestion() {
  // Empty existing ul
  ulElement.innerHTML = "";

  if (questionTracker === questionsArray.length) {
    
    clearInterval(timeInterval);
    return enterInitials();
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
      answer();

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

// Function that brings the user to the enter initials page
function enterInitials() {
  // Clear contents of page and replace with All Done page
  questionPage.innerHTML = "";
  completedQuizPage.setAttribute("style", "display: block");
  // Display the user's score
  var scoreDisplay = numOfCorrect * questionValue;
  scoreSpan.textContent = scoreDisplay + "%";
  // Event listener for Submit Button
  submitButton.addEventListener("click", function () {
    var highScoresObject = {
      initials: initialsInput.value,
      score: scoreDisplay + "%",
      timeLeft: secondsLeft,
    };
    highScores.push(highScoresObject);
    localStorage.setItem("highscores", JSON.stringify(highScores));
  });
}

// Event listener for Start Button
startButton.addEventListener("click", startQuiz);