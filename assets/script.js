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
let userName = document.getElementById("Username");
let showHighScore = document.getElementById("Userscore");
let clear = document.getElementById("playAgainBtn");
// let timeRemaining = 60;
let score = 0;


// Questions for Quiz
let quizQuestions = [{
  question: " There are four champions in Legend of Zelda Breath of the Wild: Urbosa, Daruk, Revali and...?",
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
  question: "In Brandon Sandersons novel series The Stormlight Archive, what is Kaladins spren named?",
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
  {
  question: "What Disney movie did Daft Punk do the original score for?",
  OptionA: " Tron Legacy ",
  OptionB: " Lilo & Stitch ",
  OptionC: " The Nightmare Before Christmas ",
  OptionD: " Wall-E ",
  correctAnswer: "A"},
  {
  question: "In the Watchmen graphic novel, how does Dr.Manhattan get his powers?",
  OptionA: " We never actually find out ",
  OptionB: " Ozmandias gave Dr.Mannhattan his powers on accident ",
  OptionC: " Dr.Manhattan was caught in a radioactive particle test ",
  OptionD: " He's from an alternate universe where everyone has powers ",
  correctAnswer: "C"}
];



// new function //

let timerInterval;
let timeLeft = 101;

function startQuiz(){
lostGame.style.display = "none";
welcomeSection.style.display = "none";
generateQuizQuestion();

//timer
timerInterval = setInterval(function() 
{
  timeLeft--;
  timerClock.textContent = timeLeft;


  if(timeLeft === 0) {
    clearInterval(timerInterval);
    window.alert("TIMES UP!!");
    showScore();
  }
}, 1000);
quizContent.style.display = "block";
}


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

function showScore() {
  quizContent.style.display = "none";
  lostGame.style.display = "flex";
  clearInterval(timerInterval);
  userInitials.value = "";
  finalScoreEl.innerHTML = "you got" + score + " out of " + quizQuestions.length + " correct!";
}


submitScoreBtn.addEventListener("click", function(event){
event.preventDefault()
console.log("inside submit button")

  if(userInitials.value === "") {
    alert("Ay silly, you can't submit a blank form, enter your initials");
    return false;
  } else {
    let savedHighscores = JSON.parse(localStorage.getItem("highscore")) || [];
    let currentUser = userInitials.value.trim();
    let currentHighscore = {
      name : currentUser,
      score : score
    };
    savedHighscores.push(currentHighscore);
    localStorage.setItem("highscore", JSON.stringify(savedHighscores));
    generateHighscores();
  }
});


// new function //
function generateHighscores() {
  userName.innerHTML = "", //userName = document.getElementById("Username")
  showHighScore.innerHTML = "";
  let highscores = JSON.parse(localStorage.getItem("highscore")) || [];
  for (i=0; i < highscores.length; i++){
    let newNameSpan = document.createElement("li");
    let newScoreSpan = document.createElement("li");
    newNameSpan.textContent = highscores[i].name;
    newScoreSpan.textContent = highscores[i].name;
    userName.appendChild(newNameSpan);
    showHighScore.appendChild(newScoreSpan);
  }
};


// new function // 
function showHighscore() {
  highscoreSection.style.display = "none";
  highscoreDiv.style.display = "none";
  clear.style.display = "nobe";
generateHighscores()
}


//new function // 

function clearScore(){
  window.localStorage.clear();
  userName.textContent = "";
  showHighScore.textContent = "";
}


// new function // 
function replayQuiz() {
 startQuiz
  timeLeft = 101;
  score = 0;
  currentQuestionOn = 0;
}



// new function // 
let correct;
let displayTime = 5;

function checkAnswer(answer){
  correct = quizQuestions[currentQuestionOn].correctAnswer;

  if (answer === correct && currentQuestionOn !== finalQuestionOn){
    document.getElementById("answerFeedback").innerHTML="Woohoo previous question was correct ."
      score++;
      currentQuestionOn++;
      // document.getElementById("answerFeedback").innerHTML="correct"
      generateQuizQuestion();
  }else if (answer !== correct && currentQuestionOn !== finalQuestionOn){
      currentQuestionOn++;
      window.alert("Sorry wrong answer!");
      timeLeft -= 5;
      generateQuizQuestion();
      document.getElementById("answerFeedback").innerHTML="-5 seconds, previous question was Incorrect."
      // generateQuizQuestion();
      span.textContent = "-5 seconds previous question was Incorrect";
      
  }else{
      showScore();
  }
}




startButton.addEventListener("click", startQuiz);
clear.addEventListener("click", startQuiz);
// highscoreSection.addEventListener("click", startQuiz); // not working