// STEPS FOR DOM MANIPULATION:
// 1. Create an element
// 2. Add content
// 3. Append to an existing element

// Variables that hold existing elements.
var startButton = document.querySelector("button");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");
var ulElementAnswerChoices = document.getElementById("answer-choices");
var outcomeDisplay = document.getElementById("outcome");

// Create 'li' elements and  buttons.
var firstAnswerChoice = document.createElement("li");
var firstAnswerButton = document.createElement("button");
var secondAnswerChoice = document.createElement("li");
var secondAnswerButton = document.createElement("button");
var thirdAnswerChoice = document.createElement("li");
var thirdAnswerButton = document.createElement("button");
var fourthAnswerChoice = document.createElement("li");
var fourthAnswerButton = document.createElement("button");

// Text content for 'li's is set to empty
firstAnswerChoice.textContent = "";
secondAnswerChoice.textContent = "";
thirdAnswerChoice.textContent = "";
fourthAnswerChoice.textContent = "";

// Add class to buttons
firstAnswerButton.className = "btn";
secondAnswerButton.className = "btn";
thirdAnswerButton.className = "btn";
fourthAnswerButton.className = "btn";

// Function for 'Start Button'
function startQuiz(event) {
  event.preventDefault();

  // Change heading to display question and remove paragraph text.
  headingDisplay.textContent = "Commonly used data types do NOT include:";
  headingDisplay.setAttribute("style", "text-align: left");
  paragraphDisplay.textContent = "";

  // Append 'li' to 'ul' that holds the first answer choice button.
  ulElementAnswerChoices.append(firstAnswerChoice);

  // Create and append button to 'li' that displays the first answer choice.
  // Add class for wrong answer.
  firstAnswerButton.textContent = "1. strings";
  firstAnswerButton.className.add = "wrong-answer";
  firstAnswerChoice.append(firstAnswerButton);

  // Create and append 'li' to 'ul' that holds the second answer choice button.
  ulElementAnswerChoices.append(secondAnswerChoice);

  // Create and append button to 'li' that displays the second answer choice.
  // Add class for wrong answer.
  secondAnswerButton.textContent = "2. booleans";
  secondAnswerButton.className.add = "wrong-answer";
  secondAnswerChoice.append(secondAnswerButton);

  // Create and append 'li' to 'ul' that holds the third answer choice button.
  ulElementAnswerChoices.append(thirdAnswerChoice);

  // Create and append button to 'li' that displays the third answer choice.
  // Add class for correct answer.
  thirdAnswerButton.textContent = "3. alerts";
  thirdAnswerButton.className.add = "correct-answer";
  thirdAnswerChoice.append(thirdAnswerButton);

  // Create and append 'li' to 'ul' that holds the fourth answer choice button.
  ulElementAnswerChoices.append(fourthAnswerChoice);

  // Create and append button to 'li' that displays the fourth answer choice.
  // Add class for wrong answer.
  fourthAnswerButton.textContent = "4. numbers";
  fourthAnswerButton.className.add = "wrong-answer";
  fourthAnswerChoice.append(fourthAnswerButton);

  // Remove Start Quiz button from page.
  startButton.setAttribute("style", "display:none");
}

// Event listener for Start Button
startButton.addEventListener("click", startQuiz);

// function firstQuestion(event){
//     // Add horizontal line
//     if(event.target.matches("li")){
//         var horizontalLine = document.createElement("hr");
//         horizontalLine.textContent = "";
//         outcomeDisplay.append(horizontalLine);
//     }
    

// Conditional to check if the answer was right or wrong
// if(className === "correct-answer")){
//     // add horizontal line
//     // add "Correct!" underneath horizontal line
//     // take user to the next page
// } else {
//     // add horizontal line
//     // add "Wrong!" underneath horizontal line
//     // take user to the next page
//     // deduct 10 seconds
// }
// }

// Event listener for 'ul' element with 'li' answer choices.
// ulElementAnswerChoices.addEventListener("click", firstQuestion);










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
