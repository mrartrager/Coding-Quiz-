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