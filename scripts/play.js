const textDisplay = document.getElementById('text-display');
const playbutton = document.getElementById('play-btn');
const rockbutton = document.getElementById('rock-btn');
const paperbutton = document.getElementById('paper-btn');
const scissorsbutton = document.getElementById('scissors-btn');
const continuebutton = document.getElementById('continue-btn');
const restartbutton = document.getElementById('restart-btn');
let hearts = 0;
let wins = 0;
let highscore = 0;
let seconds = 0;
let countDown = null;

startGame = () => {
    hearts = 5;
    wins = 0;
    heartsDisplay = '';
    for (let i = 0; i < hearts; i++) {
        heartsDisplay += '<i class="bi bi-heart-fill fs-1 me-1"></i>';
    }
    for (let i = 0; i < 5 - hearts; i++) {
        heartsDisplay += '<i class="bi bi-heartbreak fs-1 me-1"></i>';
    }
    document.getElementById('hearts').innerHTML = heartsDisplay;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('highscore').innerHTML = highscore;
};

stopCountDown = () => {
    clearInterval(countDown);
    countDown = null;
}

gameplay = (playerChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('hand-choices').setAttribute("class", "collapse");
    seconds = 0;
    textDisplay.textContent = "Rock!";

    countDown = setInterval(() => {
        seconds++;
        if (seconds === 1){
            textDisplay.textContent = "Rock! Paper!";
        } else if (seconds === 2){
            textDisplay.textContent = "Rock! Paper! Scissors!";
        } else if (seconds === 3){
            textDisplay.textContent = "Shoot!";
        } else {
            if (playerChoice === "rock"){
                document.getElementById('player_rock').removeAttribute("class", "collapse");
            } else if (playerChoice === "paper"){
                document.getElementById('player_paper').removeAttribute("class", "collapse");
            } else if (playerChoice === "scissors"){
                document.getElementById('player_scissors').removeAttribute("class", "collapse");
            }

            if (computerChoice === "rock"){
                document.getElementById('com_rock').removeAttribute("class", "collapse");
            } else if (computerChoice === "paper"){
                document.getElementById('com_paper').removeAttribute("class", "collapse");
            } else if (computerChoice === "scissors"){
                document.getElementById('com_scissors').removeAttribute("class", "collapse");
            }

            if (playerChoice === computerChoice) {
                textDisplay.textContent = "It's a tie!";
                document.getElementById('continue').removeAttribute("class", "collapse");
            } else if (
                (playerChoice === "rock" && computerChoice === "scissors")||
                (playerChoice === "scissors" && computerChoice === "paper")||
                (playerChoice === "paper" && computerChoice === "rock")
            ) {
                textDisplay.textContent = "You won!";
                wins += 1;
                document.getElementById('wins').innerHTML = wins;
                document.getElementById('continue').removeAttribute("class", "collapse");
            } else if (
                (computerChoice === "rock" && playerChoice === "scissors")||
                (computerChoice === "scissors" && playerChoice === "paper")||
                (computerChoice === "paper" && playerChoice === "rock")
            ) {
                hearts -= 1;
                heartsDisplay = '';
                for (let i = 0; i < hearts; i++) {
                    heartsDisplay += '<i class="bi bi-heart-fill fs-1 me-1"></i>';
                }
                for (let i = 0; i < 5 - hearts; i++) {
                    heartsDisplay += '<i class="bi bi-heartbreak fs-1 me-1"></i>';
                }
                document.getElementById('hearts').innerHTML = heartsDisplay;
                if (hearts === 0) {
                    textDisplay.textContent = "GAME OVER";
                    document.getElementById('restart-btn').removeAttribute("class", "collapse");
                } else {
                    textDisplay.textContent = "You just lost a heart!";
                    document.getElementById('continue').removeAttribute("class", "collapse");
                }
            }
            stopCountDown();
        }
    }, 500);
    
    
}

document.addEventListener("DOMContentLoaded", function() {
  fetch('../misc/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});

playbutton.addEventListener('click', () => {
    document.getElementById('game').removeAttribute("class", "collapse");
    document.getElementById('page').setAttribute("class", "collapse");
    startGame();
});

restartbutton.addEventListener('click', () => {
    document.getElementById('restart-btn').setAttribute("class", "collapse");
    if (highscore < wins){
        highscore = wins;
    }
    document.getElementById('highscore').innerHTML = highscore;
    document.getElementById('hand-choices').removeAttribute("class", "collapse");
    document.getElementById('continue').setAttribute("class", "collapse");
    document.getElementById('player_rock').setAttribute("class", "collapse");
    document.getElementById('player_paper').setAttribute("class", "collapse");
    document.getElementById('player_scissors').setAttribute("class", "collapse");
    document.getElementById('com_rock').setAttribute("class", "collapse");
    document.getElementById('com_paper').setAttribute("class", "collapse");
    document.getElementById('com_scissors').setAttribute("class", "collapse");

    textDisplay.textContent = "Choose your hand:";
    startGame();
});

rockbutton.addEventListener('click', () => {
    gameplay('rock');
});

paperbutton.addEventListener('click', () => {
    gameplay('paper');
});

scissorsbutton.addEventListener('click', () => {
    gameplay('scissors');
});

continuebutton.addEventListener('click', () => {
    document.getElementById('hand-choices').removeAttribute("class", "collapse");
    document.getElementById('continue').setAttribute("class", "collapse");
    document.getElementById('player_rock').setAttribute("class", "collapse");
    document.getElementById('player_paper').setAttribute("class", "collapse");
    document.getElementById('player_scissors').setAttribute("class", "collapse");
    document.getElementById('com_rock').setAttribute("class", "collapse");
    document.getElementById('com_paper').setAttribute("class", "collapse");
    document.getElementById('com_scissors').setAttribute("class", "collapse");

    textDisplay.textContent = "Choose your hand:";
});