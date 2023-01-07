var main = document.querySelector(".mainArea");
var hsButton = document.querySelector(".btnhighScore")
//Var home 
var hpH1El = document.createElement("h1");
var hpInfoEl = document.createElement("div");
var hpStartEl = document.createElement("button");
//Var Questions
var qH1El = document.createElement("h1");
var qChoice1El = document.createElement("div");
var qChoice2El = document.createElement("div");
var qChoice3El = document.createElement("div");
var qChoice4El = document.createElement("div");
//Var Game over
var goH1El = document.createElement("h1");
var goYourScoreEl = document.createElement("div"); //may need to change
var goinputEl = document.createElement("input");
var goSubmitEl = document.createElement("button");
//Var High score
var hsH1El = document.createElement("h1");
var hsScoreRecordEl = document.createElement("div"); //may need to change
var hsBackEl = document.createElement("button");
var hsClearEl = document.createElement("button");

var timerCount;
var timer;
var score;

let questions = [
    {//q1
        question : "Javascript is an _______ language?1",
        choice1 : "Object Oriented",
        choice2 : "Object Based",
        choice3 : "Procedural",
        choice4 : "Scipting",
        correct : "1"
    },
    {//q2
        question : "Javascript is an _______ language?2",
        choice1 : "Object Oriented",
        choice2 : "Object Based",
        choice3 : "Procedural",
        choice4 : "Scipting",
        correct : "1"
    },
    {//q3
        question : "Javascript is an _______ language?3",
        choice1 : "Object Oriented",
        choice2 : "Object Based",
        choice3 : "Procedural",
        choice4 : "Scipting",
        correct : "1"
    },
    {//q4
        question : "Javascript is an _______ language?4",
        choice1 : "Object Oriented",
        choice2 : "Object Based",
        choice3 : "Procedural",
        choice4 : "Scipting",
        correct : "1"
    },
    {//q5
        question : "Javascript is an _______ language?5",
        choice1 : "Object Oriented",
        choice2 : "Object Based",
        choice3 : "Procedural",
        choice4 : "Scipting",
        correct : "1"
    },
    // {//q6
    //     question : "",
    //     choice1 : "",
    //     choice2 : "",
    //     choice3 : "",
    //     choice4 : "",
    //     correct : ""
    // }
]


function startQuiz() {
    timerCount = 60;
}




//home page
function homepage(){
    main.innerHTML = '';
    hpH1El.textContent = "code quiz";
    hpInfoEl.textContent = "this is a quiz";
    hpStartEl.textContent = "start";
    main.appendChild(hpH1El);
    main.appendChild(hpInfoEl);
    main.appendChild(hpStartEl);
    hpStartEl.className = "button"; //give appended thing class
}

//Questions
function questions(){
    .className = "Question";
    qChoice1El.className = "1";
    qChoice2El.className = "2";
    qChoice3El.className = "3";
    qChoice4El.className = "4";
    main.appendChild(qH1El);
    main.appendChild(qChoice1El);
    main.appendChild(qChoice2El);
    main.appendChild(qChoice3El);
=   main.appendChild(qChoice4El);
    //loss conditons if timer reaches 0 or all questions anwsered
}


//game over
function gameOver(){
    main.innerHTML = '';
    hsH1El.textContent = "gameover";
    hsScoreRecordEl.textContent = "Scores";
    hsBackEl.textContent = "start";
    hsClearEl.textContent = "clear score";
    main.appendChild(hsH1El);
    main.appendChild(hsScoreEl);
    main.appendChild(hsBackEl);
    main.appendChild(hsClearEl);
}

//High score
function highScore(){
    main.innerHTML = '';
    hsH1El.textContent = "High scores";
    hsScoreRecordEl.textContent = "Scores";
    hsBackEl.textContent = "back";
    hsClearEl.textContent = "clear score";
    main.appendChild(hsH1El);
    main.appendChild(hsScoreRecordEl);
    main.appendChild(hsBackEl);
    main.appendChild(hsClearEl);
}

//high score button
hsButton.addEventListener("click",function() {
    console.log('highscore button pressed');
    highScore();
    timerCount = 0;
});

//high score start button
hsBackEl.addEventListener("click",function(){
    console.log('back button pressed');
    homepage();
})

var questionIndex = 0;
