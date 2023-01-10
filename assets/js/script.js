var quizTimer = document.getElementById("QuizTimer")
var dHomePage = document.getElementById("homePage");
var dQuestion = document.getElementById("questionPage");
var dGameOverPage = document.getElementById("gameOverPage");
var dHighScorePage = document.getElementById("highScorePage");
var nav = document.getElementById("nav");
var score = document.getElementById("Score");
var Que = document.getElementById("mainAreaTitle");
var cho1 = document.getElementById("A");
var cho2 = document.getElementById("B");
var cho3 = document.getElementById("C");
var cho4 = document.getElementById("D");
var start = document.getElementById("start");
var scoreDisplay = document.getElementById("scoreDisplay");
var initalsInput = document.getElementById("initals");
var Highscores = [];
var recordScore;
var Timer;
var count = 60;

function timer(){
    if(count > 0){
        count--;
        quizTimer.innerHTML = count;
    }else{
        count--;
        count = 0;
        quizTimer.innerHTML = count;
        clearInterval(Timer);
        scoreRecord = count;
        moveGameOverPage();
    }
}

var questionsArray = [
    {//q1
        questionAr : "Javascript is an _______ language?", choice1Ar : "Object Oriented", choice2Ar : "Object Based", choice3Ar : "Procedural", choice4Ar : "Scipting", correctAr : "1"
    },
    {//q2
        questionAr : "How can a datatype be declared to be a Variable type?", choice1Ar : "Const", choice2Ar : "Let", choice3Ar : "Int", choice4Ar : "Var", correctAr : "4"
    },
    {
        questionAr : "How to stop an interval timer in Javascript?", choice1Ar : "Object Oriented", choice2Ar : "Object Based", choice3Ar : "Procedural", choice4Ar : "Scipting", correctAr : "1"
    },
    {
        questionAr : "Which of the following methods can be used to display data in some form using Javascript?", choice1Ar : "Cocument.write()", choice2Ar : "Console.log()", choice3Ar : "Window.alert()", choice4Ar : "All of the above", correctAr : "4"
    },
    {
        questionAr : "What keyword is used to check whether a given property is valid or not?", choice1Ar : "is in", choice2Ar : "in", choice3Ar : "exists", choice4Ar : "Truth", correctAr : "2"
    },
    {
        questionAr : "Which function is used to serialize an object into a JSON string in Javascript?", choice1Ar : "convert()",choice2Ar : "parse()", choice3Ar : "stringify()", choice4Ar : "None of the above", correctAr : "1"
    }
]

function moveHomePage(){ //for button
    dHighScorePage.style.display = "none";
    nav.style.visibility = "visible";
    dHomePage.style.display = "block";
    runningQuestionIndex = 0;
    count = 60;
    quizTimer.innerHTML = count;
    scoreDisplay.innerHTML = ''; //deletes so that returning to page doesnt keep old children
}

function moveQuestionPage(){ //for button
    dHomePage.style.display = "none";
    dQuestion.style.display = "block";
    runningQuestionIndex = 0;
    showQuestion();
    quizTimer.innerHTML = count;
    Timer = setInterval(timer,1000);
}

function moveGameOverPage(){ //for button
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "block";
    nav.style.visibility = "hidden";
    score.innerHTML = scoreRecord;
}

function record(event){ //for button
    highscoreStorage()
    dHomePage.style.display = "none";
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "none";
    nav.style.visibility = "hidden";
    dHighScorePage.style.display = "block";
    showHighScores()
    initalsInput.value = '';
}

function moveHighScorePage(){ //for button
    dHomePage.style.display = "none";
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "none";
    nav.style.visibility = "hidden";
    dHighScorePage.style.display = "block";
    clearInterval(Timer)
    showHighScores()
}

function clearRecord(){ //for button
    Highscores = []; 
    window.localStorage.removeItem("playerScoreList");
    scoreDisplay.innerHTML = ''; // deletes appended children
}

function highscoreStorage(){ //storage of highscore
    if (initals.value !== '') {
        var playerHighscore = {
            time: Date.now(), //didnt have time to finish this feature
            init: document.getElementById('initals').value,
            scoreR: document.getElementById('Score').textContent
        }
    }else{
        var playerHighscore = {
            time: Date.now(), 
            init: "Unknown",
            scoreR: document.getElementById('Score').textContent
        }
    }
    Highscores.push(playerHighscore);
    var sort = Highscores.sort(({scoreR:a}, {scoreR:b}) => b-a); // sorts but high to low
    localStorage.setItem('playerScoreList', JSON.stringify(Highscores));
}

function showHighScores() {
    var playerScoreList = localStorage.getItem("playerScoreList");
    if (playerScoreList.length == 0) {
        return;
    }
    var storedHighScores = JSON.parse(playerScoreList);
    for (i = 0; i < storedHighScores.length; i++) {
        var newHighscore = document.createElement("li");
        newHighscore.innerHTML = storedHighScores[i].init + ": " + storedHighScores[i].scoreR;
        scoreDisplay.appendChild(newHighscore);
    }
}

function showQuestion(){
    let q = questionsArray[runningQuestionIndex];
    Que.innerHTML = q.questionAr;
    cho1.innerHTML = q.choice1Ar;
    cho2.innerHTML = q.choice2Ar;
    cho3.innerHTML = q.choice3Ar;
    cho4.innerHTML = q.choice4Ar;
}
var lastQuestionIndex = questionsArray.length - 1;
var runningQuestionIndex = 0;
function check(answer){    
    if(questionsArray[runningQuestionIndex].correctAr == answer && runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        showQuestion();        
    }else if(questionsArray[runningQuestionIndex].correctAr != answer &&    runningQuestionIndex < lastQuestionIndex){
        if(count > 10 ){
            count = count - 10;
        } else {
            count = 0;
        }
        quizTimer.innerHTML = count;
        runningQuestionIndex++;
        showQuestion();
    } else{
        clearInterval(Timer);
        scoreRecord = count;
        moveGameOverPage();
    }

}


