// Variables brought in javascript from html ID's
let welcomeSection = document.getElementById("welcomePage");
let startButton = document.getElementById("startQuizBtn");
let quizContent = document.getElementById("quizSection");
let timerClock = document.getElementById("timer");
let questionsEl = document.getElementById("questions");
let buttonA = document.getElementById("A");
let buttonB = document.getElementById("B");
let buttonC = document.getElementById("C");
let buttonD = document.getElementById("D");
let lostGame = document.getElementById("gameover");
let scoreFinal = document.getElementById("finalScore");
let submitScoreBtn = document.getElementById("submitButton");
let userInitials = document.getElementById("initials");
let highscoreSection = document.getElementById("highscore");
let highscoreDiv = document.getElementById("highscorePage");
let userName = document.getElementById("highScoreUser");
let showHighScore = document.getElementById("Userscore");
let clear = document.getElementById("Reset");
let timeRemaining = 60;

// Questions for Quiz
let quizQuestions = [{
  question: " There are four champions in Legend of Zelda Breath of the Wild, Urbosa, Daruk, Revali and...?",
  OptionA: " Mipha",
  OptionB: " Link",
  OptionC: " Hyrule",
  OptionD: " Vah Ruta",
  correctAnswer: "A"},
{
  question:" How far is the James Webb Telescope from Earth?",
  OptionA: " Trick question, its based on Earth ",
  OptionB:" 100,000 miles away from Earth ",
  OptionC:" The Earth is flat and everything we've been shown of space is fake ",
  OptionD: " About 1 million miles away from Earth ",
  correctAnswer: "D"},
 {
  question: " Who was Anakin Skywalkers Padawan? ",
  OptionA: " Darth Maul ",
  OptionB: " Captain Kirk ",
  OptionC: " Ahsoka Tano ",
  OptionD: " Obi Wan Kenobi ",
  correctAnswer: "C"},
  {
  question: "In Brandon Sandersons novel series The Stormlight Archive what is Kaladins spren named?",
  OptionA: " Shallan ",
  OptionB: " Syl ",
  OptionC: " Adolin ",
  OptionD: " Dalinar ",
  correctAnswer: "B"},
  {
  question: "In Pokemon Silver, where can you find the legendary Pokemon Lugia?",
  OptionA: " In Vermilion City ",
  OptionB: " Mt. Moon ",
  OptionC: " By the Seafoam Islands ",
  OptionD: " Goldenrod Tower ",
  correctAnswer: "D"},
];


// new function // 

let currentQuestionOn = 0;
let finalQuestionOn = quizQuestions.length;


function generateQuizQuestion(){
  lostGame.style.display = "none";
  if (currentQuestionOn === finalQuestionOn){
    return showScore();
  }
  let currentQuestion = quizQuestions[currentQuestionOn];
  questionsEl.innerHTML = "<p>" + currentQuestion.question + "<p>";
  buttonA.innerHTML = currentQuestion.OptionA;
  buttonB.innerHTML = currentQuestion.OptionB;
  buttonC.innerHTML = currentQuestion.OptionC;
  buttonD.innerHTML = currentQuestion.OptionD;
};



// new function //

let timerInterval;
let timeLeft = 60;

function startQuiz(){
lostGame.style.display = "none";
welcomeSection.style.display = "none";
generateQuizQuestion();

//timer
timerInterval = setInterval(function() 
{
  timeRemaining--;
  timerClock.textContent = timeRemaining;

  if(timeLeft === 0) {
    clearInterval(timerInterval);
    showScore();
  }
}, 1000);
quizContent.style.display = "block";
}


// new function // 

function showScore() {
  quizContent.style.display = "none";
  lostGame.style.display = "flex";
  clearInterval(timerInterval);
  userInitials.value = "";
  finalScoreEl.innerHTML = "you got" + score + " out of " + quizQuestions.length + " correct!";
}



submitScoreBtn.addEventListener("click", function highscore(){

  if(userInitials.value === "") {
    alert("ay silly, you can't submit a blank form, enter your initials");
    return false;
  } else {
    let savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    let currentUser = highscoreInputName.value.trim();
    let currentHighscore = {
      name : currentUser,
      score : score
    };
    lostGame.style.display = "none";
    highscoreSection.style.display = "flex";
    highscoreDiv.style.display = "block";
    clear.style.display = "flex";
    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
  }
});