// STEPS FOR DOM MANIPULATION:
// 1. Create an element 
// 2. Add content
// 3. Append to an existing element

// WHEN I answer a question
// THEN I am presented with another question

// When the start button is clicked, the first question and answers appear
// Will need:
// - An event listener "click" for the Start Quiz button that listens for a function

// Variables for start button, heading display, and paragraph display. Start button
// is used for event listener and head display and paragraph display are used to alter
// the display on the page.
var startButton = document.querySelector("button");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");
var ulElementAnswerChoices = document.getElementById("answer-choices")

// Function for Start Button
function startQuiz(event){
    event.preventDefault();

    // Change heading to display question, remove paragraph text, and align 'ul' to the left.
    headingDisplay.textContent = "Commonly used data types do NOT include:";
    headingDisplay.setAttribute("style","text-align: left");
    paragraphDisplay.textContent = "";
    ulElementAnswerChoices.setAttribute("style","text-align: left")

    // Create and append 'li' to 'ul' that holds the first answer choice button.
    var firstAnswerChoice = document.createElement("li");
    firstAnswerChoice.textContent = "";
    ulElementAnswerChoices.append(firstAnswerChoice);

    // Create and append button to 'li' that displays the first answer choice. 
    var firstAnswerButton = document.createElement("button");
    firstAnswerButton.className = "btn";
    firstAnswerButton.textContent = "1. strings";
    firstAnswerChoice.append(firstAnswerButton);
    
    // Create and append 'li' to 'ul' that holds the second answer choice button.
    var secondAnswerChoice = document.createElement("li");
    secondAnswerChoice.textContent = "";
    ulElementAnswerChoices.append(secondAnswerChoice);

    // Create and append button to 'li' that displays the second answer choice.
    var secondAnswerButton = document.createElement("button");
    secondAnswerButton.className = "btn";
    secondAnswerButton.textContent = "2. booleans";
    secondAnswerChoice.append(secondAnswerButton);

    // Create and append 'li' to 'ul' that holds the second answer choice button.
    var thirdAnswerChoice = document.createElement("li");
    thirdAnswerChoice.textContent = "";
    ulElementAnswerChoices.append(thirdAnswerChoice);

    // Create and append button to 'li' that displays the second answer choice.
    var thirdAnswerButton = document.createElement("button");
    thirdAnswerButton.className = "btn";
    thirdAnswerButton.textContent = "3. alerts"
    thirdAnswerChoice.append(thirdAnswerButton)

    // var fourthAnswerChoice = document.createElement("button");
}

// Event listener for Start Button 
startButton.addEventListener("click", startQuiz);
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