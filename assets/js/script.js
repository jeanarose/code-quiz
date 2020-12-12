// WHEN I answer a question
// THEN I am presented with another question

// When the start button is clicked, the first question and answers appear
// Will need:
// - An event listener "click" for the Start Quiz button
var startButton = document.querySelector("button");
var headingDisplay = document.querySelector("h1");
var paragraphDisplay = document.querySelector("p");

function startQuiz(event){
    event.preventDefault();
    headingDisplay.textContent = "Commonly used data types do NOT include:";
    headingDisplay.setAttribute("style","text-align: left");
    paragraphDisplay.textContent = "";
}

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