let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function(message){
    document.querySelector(".message").textContent = message;

};

let checkButton = document.querySelector(".check");
let guessInput = document.querySelector(".guess");
let mainNumber = document.querySelector(".number");
let body = document.querySelector("body");
let highscoreElement = document.querySelector(".highscore");
let scoreElement = document.querySelector(".score");
let again = document.querySelector(".again");
checkButton.addEventListener("click",function(){
    let guess = Number(guessInput.value);
    if(!guess){
        displayMessage("No Number"); 
    }

    if(guess>20){
        displayMessage("Please enter below 20"); 
    }
    else{
         if(guess == secretNumber){
            displayMessage("Correct Number");
            mainNumber.textContent = secretNumber;
            body.style.backgroundColor = "green";
    
            if(score>highscore){
                highscore = score; 
                highscoreElement.textContent = highscore; 
            }
        }
    
       else if(guess != secretNumber)
       {
        if(score>1){
            displayMessage(guess < secretNumber? "Number is low" : "Number is High");
            score--;
            scoreElement.textContent = score;
        }
        else{
            displayMessage("Lost the Game");
        }
       }
    }

    
});


again.addEventListener("click",function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    body.style.background = "#222";
    mainNumber.textContent = "?";
    scoreElement.textContent= score;
    guessInput.value = "";
})
