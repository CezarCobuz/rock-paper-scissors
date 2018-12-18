let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function capitalizeFirstLetter (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML =  userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `
        <span class="userChoice">${capitalizeFirstLetter(userChoice)}</span>
        beats
        <span class="computerChoice">${capitalizeFirstLetter(computerChoice)}</span>
        . You win!
        `;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `
    <span class="computerChoice">${capitalizeFirstLetter(computerChoice)}</span>
    beats
    <span class="userChoice">${capitalizeFirstLetter(userChoice)}</span>
    . You lose!
    `;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "Draw!";
}

function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice= getComputerChoice();
    switch (userChoice + " " + computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            win(userChoice, computerChoice);
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            lose(userChoice, computerChoice);
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })

    paper_div.addEventListener('click', function() {
        game('paper');
    })

    scissors_div.addEventListener('click', function() {
        game('scissors');
    })
}

main();