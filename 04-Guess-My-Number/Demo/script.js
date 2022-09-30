'use strict';
let randomSecretNumber = Math.floor(Math.random() * 20) + 1;
let checkButton = document.querySelector(".check")
let messageElement = document.querySelector(".message")
let randomNumber = document.querySelector(".number")
let bodyElement = document.querySelector("body")
randomNumber.textContent = randomSecretNumber
let scoreElement = document.querySelector(".score")
let highScoreElement = document.querySelector(".highscore")
let restGameBtn = document.querySelector(".again")
let score = 20;
let highScore = 0;
function displayMessage (message){
    messageElement,textContent = message}

checkButton.addEventListener("click", function (){
    let guessedNumber = Number(document.querySelector(".guess").value)
    //Checking if random secret number is equal to inputed number
    if(guessedNumber=== randomSecretNumber){
        message.textContent = "You are correct"
        bodyElement.style.backgroundColor = "#60b347" //MANIPULATING CSS WITH JS
        randomNumber.textContent = randomSecretNumber
        randomNumber.style.width = "30rem"
        if(score > highScore){
            highScore = score;
            highScoreElement.textContent = highScore
    }
    else if(guessedNumber > randomSecretNumber){
        if(score > 0){
        message.textContent = "Too high"
        score = score - 1;
        scoreElement.textContent = score
        }
        else{
            scoreElement.textContent = 0
        message.textContent = "You lost the game"
        }
    }
    else if(guessedNumber < randomSecretNumber){
        if(score > 0){
            message.textContent = "Too Low"
            score = score - 1;
            scoreElement.textContent = score;
            }
            else{
            scoreElement.textContent = 0
            message.textContent = "You lost the game"
         }
        }
    }
    });

restGameBtn.addEventListener("click", function (){
    score = 20
    randomSecretNumber = Math.floor(Math.random() * 20) + 1;
    message.textContent = "Start guessing"
    bodyElement.style.backgroundColor = "#222"
    randomNumber.textContent = "?"
    highScoreElement.textContent = 0;
    scoreElement.textContent = score
    document.querySelector('.guess').value = '';

})


