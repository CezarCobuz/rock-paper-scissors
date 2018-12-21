function visualUpdateRoundNumber(roundNumber) {
    let adder = '';
    if (roundNumber < 10) {
        adder = '0';
    }
    roundNumber_span.innerHTML = 'Round:' + adder + roundNumber.toString();
}

function visualUpdateLose(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    computerScore_span.classList.add('red-glow-score');
    setTimeout(() => { computerScore_span.classList.remove('red-glow-score')}, 150);
    getRobotHand(computerChoice);
    getHumanHand(userChoice);
    result_p.innerHTML = `
    <span class="computerChoice">${capitalizeFirstLetter(computerChoice)}</span>
    beats
    <span class="userChoice">${capitalizeFirstLetter(userChoice)}</span>
    . You lose!
    `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 250);
}

function visualUpdateWin(userChoice, computerChoice) {
    userScore_span.innerHTML =  userScore;
    userScore_span.classList.add('green-glow-score');
    setTimeout(() => { userScore_span.classList.remove('green-glow-score')}, 150);
    computerScore_span.innerHTML = computerScore;
    getRobotHand(computerChoice);
    getHumanHand(userChoice);
    result_p.innerHTML =  `
        <span class="userChoice">${capitalizeFirstLetter(userChoice)}</span>
        beats
        <span class="computerChoice">${capitalizeFirstLetter(computerChoice)}</span>
        . You win!
        `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 250);

}

function visualUpdateDraw(userChoice, computerChoice) {
    drawScore_span.innerHTML = drawScore;
    drawScore_span.classList.add('grey-glow-score');
    setTimeout(() => { drawScore_span.classList.remove('grey-glow-score')}, 150);
    getRobotHand(computerChoice);
    getHumanHand(userChoice);
    result_p.innerHTML = "Draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('grey-glow')}, 250);
}

function getRobotHand(computerChoice) {
    switch (computerChoice) {
        case "paper":
            result_img_div.innerHTML = `<img src="assets/paper-robot-trans.png" alt="paper-robot">`;
            break;
        case "rock":
            result_img_div.innerHTML = `<img src="assets/rock-robot-trans.png" alt="rock-robot">`;
            break;
        case "scissors":
            result_img_div.innerHTML = `<img src="assets/scissors-robot-trans.png" alt="scissors-robot">`;
            break;
    }
}

function capitalizeFirstLetter (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getHumanHand(userChoice) {
    switch (userChoice) {
        case "paper":
            result_img_human_div.innerHTML = `<img src="assets/paper-hand-human.png" alt="paper-human">`;
            break;
        case "rock":
            result_img_human_div.innerHTML = `<img src="assets/rock-hand-human.png" alt="rock-human">`;
            break;
        case "scissors":
            result_img_human_div.innerHTML = `<img src="assets/scissors-hand-human.png" alt="scissors-human">`;
            break;
    }
}