var dHomePage = document.getElementById("homePage");
var dQuestion = document.getElementById("questionPage");
var dGameOverPage = document.getElementById("gameOverPage");
var dHighScorePage = document.getElementById("highScorePage");
var nav = document.getElementById("nav");





function moveQuestionPage(){
    console.log('show questons div')
    dHomePage.style.display = "none";
    dQuestion.style.display = "block";
}

function moveHighScorePage(){
    console.log('show highscore div')
    dHomePage.style.display = "none";
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "none";
    nav.style.visibility = "hidden";
    dHighScorePage.style.display = "block";
}

function moveHomePage(){
    console.log('show homepage div')
    dHighScorePage.style.display = "none";
    nav.style.visibility = "visible";
    dHomePage.style.display = "block";
}





// var main = document.querySelector(".mainArea");
// var hsButton = document.querySelector(".btnhighScore")
// //Var home 
// var hpH1El = document.createElement("h1");
// var hpInfoEl = document.createElement("div");
// var hpStartEl = document.createElement("button");
// //Var Questions
// var qH1El = document.createElement("h1");
// var qChoice1El = document.createElement("div");
// var qChoice2El = document.createElement("div");
// var qChoice3El = document.createElement("div");
// var qChoice4El = document.createElement("div");
// //Var Game over
// var goH1El = document.createElement("h1");
// var goYourScoreEl = document.createElement("div"); //may need to change
// var goinputEl = document.createElement("input");
// var goSubmitEl = document.createElement("button");
// //Var High score
// var hsH1El = document.createElement("h1");
// var hsScoreRecordEl = document.createElement("div"); //may need to change
// var hsBackEl = document.createElement("button");
// var hsClearEl = document.createElement("button");

// var timerCount;
// var timer;
// var score;


// var Que = document.getElementById("mainAreaTitle");
// var cho1 = document.getElementById("A");
// var cho2 = document.getElementById("B");
// var cho3 = document.getElementById("C");
// var cho4 = document.getElementById("D");

// var questionsArray = [
//     {//q1
//         questionAr : "Javascript is an _______ language?1",
//         choice1Ar : "Object Oriented",
//         choice2Ar : "Object Based",
//         choice3Ar : "Procedural",
//         choice4Ar : "Scipting",
//         correctAr : "1"
//     },
//     {//q2
//         questionAr : "Javascript is an _______ language?1",
//         choice1Ar : "Object Oriented",
//         choice2Ar : "Object Based",
//         choice3Ar : "Procedural",
//         choice4Ar : "Scipting",
//         correctAr : "1"
//     },
//     {//q3
//         questionAr : "Javascript is an _______ language?1",
//         choice1Ar : "Object Oriented",
//         choice2Ar : "Object Based",
//         choice3Ar : "Procedural",
//         choice4Ar : "Scipting",
//         correctAr : "1"
//     },
//     {//q4
//         questionAr : "Javascript is an _______ language?1",
//         choice1Ar : "Object Oriented",
//         choice2Ar : "Object Based",
//         choice3Ar : "Procedural",
//         choice4Ar : "Scipting",
//         correctAr : "1"
//     },
//     {//q5
//         questionAr : "Javascript is an _______ language?1",
//         choice1Ar : "Object Oriented",
//         choice2Ar : "Object Based",
//         choice3Ar : "Procedural",
//         choice4Ar : "Scipting",
//         correctAr : "1"
//     },
//     // {//q6
//     //     question : "",
//     //     choice1 : "",
//     //     choice2 : "",
//     //     choice3 : "",
//     //     choice4 : "",
//     //     correct : ""
//     // }
// ]

// var lastQuestionIndex = questionsArray.length - 1;
// var runningQuestionIndex = 0;

// function showQuestion(){
//     let q = questionsArray[runningQuestionIndex];
//     Que.innerHTML = q.questionAr;
//     cho1.innerHTML = q.choice1Ar;
//     cho2.innerHTML = q.choice2Ar;
//     cho3.innerHTML = q.choice3Ar;
//     cho4.innerHTML = q.choice4Ar;
//     console.log(q)
// }

// showQuestion()
// function startQuiz() {
//     timerCount = 60;
// }

// //home page
// function homepage(){
//     main.innerHTML = '';
//     hpH1El.textContent = "code quiz";
//     hpInfoEl.textContent = "this is a quiz";
//     hpStartEl.textContent = "start";
//     main.appendChild(hpH1El);
//     main.appendChild(hpInfoEl);
//     main.appendChild(hpStartEl);
//     hpStartEl.className = "button"; //give appended thing class
// }

// //Questions
// function questionPage(){
//     main.innerHTML = '';
// }


// //game over
// function gameOver(){
//     main.innerHTML = '';
//     hsH1El.textContent = "gameover";
//     hsScoreRecordEl.textContent = "Scores";
//     hsBackEl.textContent = "start";
//     hsClearEl.textContent = "clear score";
//     main.appendChild(hsH1El);
//     main.appendChild(hsScoreEl);
//     main.appendChild(hsBackEl);
//     main.appendChild(hsClearEl);
// }

// //High score
// function highScore(){
//     main.innerHTML = '';
//     hsH1El.textContent = "High scores";
//     hsScoreRecordEl.textContent = "Scores";
//     hsBackEl.textContent = "back";
//     hsClearEl.textContent = "clear score";
//     main.appendChild(hsH1El);
//     main.appendChild(hsScoreRecordEl);
//     main.appendChild(hsBackEl);
//     main.appendChild(hsClearEl);
// }

// //high score button
// hsButton.addEventListener("click",function() {
//     console.log('highscore button pressed');
    
//     highScore();
//     timerCount = 0;
// });

// //high score start button
// hsBackEl.addEventListener("click",function(){
//     console.log('back button pressed');
//     homepage();
// })

// hpStartEl.addEventListener("click",function(){
//     console.log('start button pressed');
//     questionPage();
//     questionShow();
// })
