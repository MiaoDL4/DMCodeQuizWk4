var main = document.querySelector(".mainArea");
var hsButton = document.querySelector(".btnhighScore")
//Var home 
var hpH1El = document.createElement("h1");
var hpInfoEl = document.createElement("div");
var hpStartEl = document.createElement("button");
//Var Questions

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
//how to make the multi choice part?

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
    hsBackEl.textContent = "start";
    hsClearEl.textContent = "clear score";
    main.appendChild(hsH1El);
    main.appendChild(hsScoreEl);
    main.appendChild(hsBackEl);
    main.appendChild(hsClearEl);
}

//high score button
hsButton.addEventListener("click",function() {
    console.log('highscore button pressed');
    highScore();
    //reset timer needed
});


