let startButton = document.getElementById("startQuizBtn");
let resetButton = document.getElementById("resetBtn");
let playAgainButton= document.getElementById("playAgainBtn");
let timerClock = document.getElementById("timer");
let points = document.getElementById("score");
let quizSec = document.getElementById("quizSec");
let scores = document.getElementById("scores");




let quizQuestion = [
    {
        question:"There are four champions in Legend of Zelda Breath of the Wild, Urbosa, Daruk, Revali and...?",
        options: [
            " A. Mipha ",
            " B. Link ",
            " C. Hyrule ",
            " D. Vah Ruta ",
        ],
        correctAnswer: " A. Mipha ",
    }, 
    {
        question:"What issue of Detective Comics did Batman first appear in?",
        options: [
            " A. Issue 1 ",
            " B. Issue 27 ",
            " C. Issue 16 ",
            " D. Issue 86 ",
        ],
        correctAnswer: "A. Isuue 27",
    },
    {
        question:"How far is the James Webb Telescope from Earth?", 
        options:[
            " A. Trick question, its based on Earth ",
            " B. 100,000 miles away from Earth ",
            " C. The Earth is flat and everything we've been shown of space is fake. ",
            " D. About 1 million miles away from Earth ",
        ],
        correctAnswer: " D. About 1 million miles away from Earth ",
    }, 
    {
        question:" Who was Anakin Skywalkers Padawan? ", 
        options:[
            " A. Darth Maul ",
            " B. Captain Kirk ",
            " C. Ahsoka Tano ",
            " D. Obi Wan Kenobi ",
        ],
        correctAnswer: " C. Ahsoka Tano ",
    }, 
]

function startQuiz() {
    
 
}




startButton.addEventListener("click", startQuiz);
playAgain.addEventListener("click", startQuiz);
resetButton.addEventListener("click", resetQuiz);