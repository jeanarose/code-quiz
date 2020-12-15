// Global variables
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Function that writes the highscores
function writeHighScores() {
  var initialsDisplay = document.getElementById("initials");
  var scoreDisplay = document.getElementById("score");
  var timeLeftDisplay = document.getElementById("time-left");
  for (var i = 0; i < highScores.length; i++) {
    // Create, add text to, and append paragraph with initials
    paragraphElementInitials = document.createElement("p");
    paragraphElementInitials.textContent = highScores[i].initials;
    paragraphElementInitials.className = "user-highscore";
    initialsDisplay.append(paragraphElementInitials);
    // Create, add text to, and append paragraph with score
    paragraphElementScore = document.createElement("p");
    paragraphElementScore.textContent = highScores[i].score;
    paragraphElementScore.className = "user-highscore";
    scoreDisplay.append(paragraphElementScore);
    // Create, add text to, and append paragraph with seconds left
    paragraphElementTimeLeft = document.createElement("p");
    paragraphElementTimeLeft.textContent = highScores[i].timeLeft;
    paragraphElementTimeLeft.className = "user-highscore";
    timeLeftDisplay.append(paragraphElementTimeLeft);
  }
}

writeHighScores();

// Button variables
var goBackButton = document.getElementById("go-back");
var clearHighScoresButton = document.getElementById("clear-highscores");
var highScoresList = document.getElementById("list-highscores");

// Function for Go Back button
function goBack() {
  window.history.back();
}

// Listener for Go Back button
goBackButton.addEventListener("click", goBack);

// Function for Clear Highscores Button
function clearHighScores() {
  var wrapper = document.getElementById("wrapper");
  highScores = [];
  localStorage.clear();
  wrapper.innerHTML = "";
}

// Listener for Clear Highscores Button
clearHighScoresButton.addEventListener("click", clearHighScores);
