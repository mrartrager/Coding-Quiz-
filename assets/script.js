let startButton = document.getElementById("startQuizBtn");
let resetButton = document.getElementById("resetBtn");
let playAgainButton= document.getElementById("playAgainBtn");
let timerClock = document.getElementById("timer");
let points = document.getElementById("score");
let quizSec = document.getElementById("quizSec");
let scores = document.getElementById("scores");

let quizQuestion = [
    {
        question:, 
        options:[
            ""
        ],
        correctAnswer: "",
    }, 
    {
        question:,
        options: [
            ""
        ],
        correctAnswer: "",
    },
    {
        question:, 
        options:[
            ""
        ],
        correctAnswer: "",
    }, 
    {
        question:, 
        options:[
            ""
        ],
        correctAnswer: "",
    }, 
]


startButton.addEventListener("click", startQuiz);
playAgain.addEventListener("click", startQuiz);
resetButton.addEventListener("click", resetQuiz);