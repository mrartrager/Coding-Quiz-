let startButton = document.getElementById("startQuizBtn");
let highScore = document.getElementById("highScoreBtn");
let quizSec = document.getElementById("quizSec"); //quizSec stands for quiz section line 25 of HTML
let choices = document.getElementById("options");
let points = document.getElementById("score"); // this is score that will change through the game not final score
let timerClock = document.getElementById("timer"); //will write a function to start timer on button click start quiz
let scores = document.getElementById("finalScore"); // dont get confused with score, this is final score
let resetButton = document.getElementById("resetBtn"); // rest highscore sheet
let playAgainButton = document.getElementById("playAgainBtn"); // starts quiz over
let timeRemaining = 60; // clock starts at 60, pretty sure i can write into a function and delete this


let currentQuestion = null;
let userChoice = -1;
let userScore = 0;
let timerObject = null;
let timer = 60;

let quizQuestion = [
  {
    question:
      "There are four champions in Legend of Zelda Breath of the Wild, Urbosa, Daruk, Revali and...?",
    options: [" A. Mipha ", " B. Link ", " C. Hyrule ", " D. Vah Ruta "],
    correctAnswer: " A. Mipha ",
  },
  {
    question: "What issue of Detective Comics did Batman first appear in?",
    options: [
      " A. Issue 1 ",
      " B. Issue 27 ",
      " C. Issue 16 ",
      " D. Issue 86 ",
    ],
    correctAnswer: "A. Isuue 27",
  },
  {
    question: "How far is the James Webb Telescope from Earth?",
    options: [
      " A. Trick question, its based on Earth ",
      " B. 100,000 miles away from Earth ",
      " C. The Earth is flat and everything we've been shown of space is fake. ",
      " D. About 1 million miles away from Earth ",
    ],
    correctAnswer: " D. About 1 million miles away from Earth ",
  },
  {
    question: " Who was Anakin Skywalkers Padawan? ",
    options: [
      " A. Darth Maul ",
      " B. Captain Kirk ",
      " C. Ahsoka Tano ",
      " D. Obi Wan Kenobi ",
    ],
    correctAnswer: " C. Ahsoka Tano ",
  },
];

function startQuiz() {
  startButton.style.visibility = "hidden";
  quizSec.style.visibility = "visible";
  scores.style.visibility = "hidden";
  timer = 60;
  timerObject = setInterval(gameLoop, 1000);
}

function gameLoop() {
  timer--;
  updateUserUI();
  if (userChoice != -1) {
    if (isUserCorrect()) {
      userScore++;
    } else {
      userScore--;
      timer -= 5;
      updateUserUI();
    }
    updateUserUI();
    userChoice = -1;
    loadQuestion();
  }
  if (timer <= 0) {
    clearInterval(timerObject);
    highScore();
  }
}

function updateUserUI() {
  timerClock.innerHTML = `${timer}s`;
  points.innerHTML = userScore;
}

startButton.addEventListener("click", startQuiz);
playAgainButton.addEventListener("click", startQuiz);
//resetButton.addEventListener("click", resetQuiz);
