function writeHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    var highScoresList = document.getElementById("list-highscores");
    var initialsDisplay = document.getElementById("initials");
    var scoreDisplay = document.getElementById("score");
    var timeLeftDisplay = document.getElementById("time-left");
    for (var i = 0; i < highScores.length; i++) {
      paragraphElementInitials = document.createElement("p");
      paragraphElementInitials.textContent = highScores[i].initials;
      paragraphElementInitials.className = "user-highscore"
      initialsDisplay.append(paragraphElementInitials)
      paragraphElementScore = document.createElement("p");
      paragraphElementScore.textContent = highScores[i].score;
      paragraphElementScore.className = "user-highscore"
      scoreDisplay.append(paragraphElementScore);
      paragraphElementTimeLeft = document.createElement("p");
      paragraphElementTimeLeft.textContent = highScores[i].timeLeft;
      paragraphElementTimeLeft.className = "user-highscore"
      timeLeftDisplay.append(paragraphElementTimeLeft);
    }
  }
  writeHighScores();