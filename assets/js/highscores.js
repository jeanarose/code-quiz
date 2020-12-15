// Function that writes the highscores
function writeHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    var initialsDisplay = document.getElementById("initials");
    var scoreDisplay = document.getElementById("score");
    var timeLeftDisplay = document.getElementById("time-left");
    for (var i = 0; i < highScores.length; i++) {
    // Create, add text to, and append paragraph with initials
      paragraphElementInitials = document.createElement("p");
      paragraphElementInitials.textContent = highScores[i].initials;
      paragraphElementInitials.className = "user-highscore"
      initialsDisplay.append(paragraphElementInitials)
    // Create, add text to, and append paragraph with score
      paragraphElementScore = document.createElement("p");
      paragraphElementScore.textContent = highScores[i].score;
      paragraphElementScore.className = "user-highscore"
      scoreDisplay.append(paragraphElementScore);
    // Create, add text to, and append paragraph with seconds left
      paragraphElementTimeLeft = document.createElement("p");
      paragraphElementTimeLeft.textContent = highScores[i].timeLeft;
      paragraphElementTimeLeft.className = "user-highscore"
      timeLeftDisplay.append(paragraphElementTimeLeft);
    }
  }

  writeHighScores();

  // Button variables

  // Function for Go Back button

  // Listener for Go Back button

  // Function for Clear Highscores Button

  // Listener for Clear Highscores Button