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

function win(userChoice, computerChoice) {
    userScore++;
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

    updateFrequencyRepeateAlternate(userChoice,previousHumanResult);
    previousHumanResult = 'win';
}

function lose(userChoice, computerChoice) {
    computerScore++;
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

    updateFrequencyRepeateAlternate(userChoice,previousHumanResult);
    previousHumanResult = 'lose';
}

function draw(userChoice, computerChoice) {
    drawScore++;
    drawScore_span.innerHTML = drawScore;
    drawScore_span.classList.add('grey-glow-score');
    setTimeout(() => { drawScore_span.classList.remove('grey-glow-score')}, 150);
    getRobotHand(computerChoice);
    getHumanHand(userChoice);
    result_p.innerHTML = "Draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('grey-glow')}, 250);

    updateFrequencyRepeateAlternate(userChoice,previousHumanResult);
    previousHumanResult = 'draw';
}

function getComputerChoice(userChoice) {
    const choices = ['rock','paper', 'scissors'];
    if (AI_ON){
        return runAI(userChoice);
    }

    // RANDOM FOR FIRST ROUND
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    if (roundNumber > 1) {
        AI_ON = true;
    }
    console.log('roundNumber',roundNumber);
    console.log('AI_ON',AI_ON);
    console.log('humanPreviousGesture',humanPreviousGesture);
    console.log('previousHumanResult',previousHumanResult);
    const computerChoice = getComputerChoice(userChoice);
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
    humanPreviousGesture = userChoice;
    roundNumber++;
}