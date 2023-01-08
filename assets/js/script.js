var quizTimer = document.getElementById("QuizTimer")
//for "movement" between pages
var dHomePage = document.getElementById("homePage");
var dQuestion = document.getElementById("questionPage");
var dGameOverPage = document.getElementById("gameOverPage");
var dHighScorePage = document.getElementById("highScorePage");
var nav = document.getElementById("nav");
var score = document.getElementById("Score");
//for question page
var Que = document.getElementById("mainAreaTitle");
var cho1 = document.getElementById("A");
var cho2 = document.getElementById("B");
var cho3 = document.getElementById("C");
var cho4 = document.getElementById("D");
var start = document.getElementById("start");

var recordScore;
var Timer;
var count = 60;




function check(answer){
    if(questionsArray[runningQuestionIndex].correctAr == answer && runningQuestionIndex < lastQuestionIndex){
        console.log('correct')
        runningQuestionIndex++;
        showQuestion();
    }else if(questionsArray[runningQuestionIndex].correctAr != answer &&    runningQuestionIndex < lastQuestionIndex){
        if(count > 15 ){
            count = count - 15;
        } else {
            count = 0;
        }
        quizTimer.innerHTML = count;
        runningQuestionIndex++;
        showQuestion();
        console.log('incorrect')
    } else{
        clearInterval(Timer);
        scoreRecord = count;
        moveGameOverPage();
    }

}
function timer(){
    if(count > 0){
        count--;
        quizTimer.innerHTML = count;
        console.log(count);
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
        questionAr : "Javascript is an _______ language?0",
        choice1Ar : "Object Oriented",
        choice2Ar : "Object Based",
        choice3Ar : "Procedural",
        choice4Ar : "Scipting",
        correctAr : "1"
    },
    {//q2
        questionAr : "Javascript is an _______ language?1",
        choice1Ar : "Object Oriented",
        choice2Ar : "Object Based",
        choice3Ar : "Procedural",
        choice4Ar : "Scipting",
        correctAr : "1"
    },
    {//q3
        questionAr : "Javascript is an _______ language?2",
        choice1Ar : "Object Oriented",
        choice2Ar : "Object Based",
        choice3Ar : "Procedural",
        choice4Ar : "Scipting",
        correctAr : "1"
    },
    {//q4
        questionAr : "Javascript is an _______ language?3",
        choice1Ar : "Object Oriented",
        choice2Ar : "Object Based",
        choice3Ar : "Procedural",
        choice4Ar : "Scipting",
        correctAr : "1"
    },
    {//q5
        questionAr : "Javascript is an _______ language?4",
        choice1Ar : "Object Oriented",
        choice2Ar : "Object Based",
        choice3Ar : "Procedural",
        choice4Ar : "Scipting",
        correctAr : "1"
    },
    {//q6
        questionAr : "Javascript is an _______ language?5",
        choice1Ar : "Object Oriented",
        choice2Ar : "Object Based",
        choice3Ar : "Procedural",
        choice4Ar : "Scipting",
        correctAr : "1"
    }
]
var lastQuestionIndex = questionsArray.length - 1;
var runningQuestionIndex = 0;
function showQuestion(){
    let q = questionsArray[runningQuestionIndex];
    Que.innerHTML = q.questionAr;
    cho1.innerHTML = q.choice1Ar;
    cho2.innerHTML = q.choice2Ar;
    cho3.innerHTML = q.choice3Ar;
    cho4.innerHTML = q.choice4Ar;
    console.log(q)
}


//function for movement between pages
function moveHomePage(){
    console.log('show homepage div')
    dHighScorePage.style.display = "none";
    nav.style.visibility = "visible";
    dHomePage.style.display = "block";
    runningQuestionIndex = 0;
    count = 10;

}

function moveQuestionPage(){
    console.log('show questons div')
    dHomePage.style.display = "none";
    dQuestion.style.display = "block";
    runningQuestionIndex = 0;
    showQuestion();
    quizTimer.innerHTML = count;
    Timer = setInterval(timer,1000);
}

function moveGameOverPage(){
    console.log('show gameover div')
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "block";
    nav.style.visibility = "hidden";
    score.innerHTML = scoreRecord;
}

function record(){
    console.log('show highscore div via record')
    dHomePage.style.display = "none";
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "none";
    nav.style.visibility = "hidden";
    dHighScorePage.style.display = "block";
}

function moveHighScorePage(){
    console.log('show highscore div')
    dHomePage.style.display = "none";
    dQuestion.style.display = "none";
    dGameOverPage.style.display = "none";
    nav.style.visibility = "hidden";
    dHighScorePage.style.display = "block";
    clearInterval(Timer)
}