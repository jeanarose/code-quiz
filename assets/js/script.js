// STEPS FOR DOM MANIPULATION:
// 1. Create an element
// 2. Add content
// 3. Append to an existing element

// First question object
var firstQuestionObject = {
  answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  question: "Commonly used data types do NOT include:",
  correctAnswer: "3. alerts"
};

// Variables that hold existing elements.
var startButton = document.querySelector("button");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");
var ulElementAnswerChoices = document.getElementById("answer-choices");
var outcomeDisplay = document.querySelector("#outcome");


// Function for 'Start Button'
function startQuiz(event) {
  event.preventDefault();

  // Change heading to display question and remove paragraph text.
  headingDisplay.textContent = firstQuestionObject.question;
  headingDisplay.setAttribute("style", "text-align: left");
  paragraphDisplay.textContent = "";

  // Remove Start Quiz button from page.
  startButton.setAttribute("style", "display:none");
  
  writeNextQuestion();
}
function writeNextQuestion(event){
  event.preventDefault();
  
}

// Event listener for Start Button
startButton.addEventListener("click", startQuiz);

function firstQuestion(event) {
  // Add horizontal line
  if (event.target.matches("button")) {
    outcomeDisplay.setAttribute("style", "display: block");
  }
  // Conditional to check if the answer was right or wrong
  if(event.target.matches("button") === firstQuestionObject.correctAnswer){
    // If what is inside button equals firstQuestionObject.correctAnswer
    console.log("You clicked the correct answer!")
  }
}

// Event listener for 'ul' element with 'li' answer choices.
ulElementAnswerChoices.addEventListener("click", firstQuestion);

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
