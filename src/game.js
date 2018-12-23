function win(userChoice, computerChoice) {
    userScore++;
    visualUpdateWin(userChoice,computerChoice);
    updateFrequencyRepeateAlternate(userChoice, previousHumanResult, humanPreviousGesture, aiPreviousGesture);
    previousHumanResult = 'win';
}

function lose(userChoice, computerChoice) {
    computerScore++;
    visualUpdateLose(userChoice,computerChoice);
    updateFrequencyRepeateAlternate(userChoice, previousHumanResult, humanPreviousGesture, aiPreviousGesture);
    previousHumanResult = 'lose';
}

function draw(userChoice, computerChoice) {
    drawScore++;
    visualUpdateDraw(userChoice,computerChoice);
    updateFrequencyRepeateAlternate(userChoice, previousHumanResult, humanPreviousGesture, aiPreviousGesture);
    previousHumanResult = 'draw';
}

function getComputerChoice(userChoice) {
    const choices = ['rock','paper', 'scissors'];
    let result;
    if (AI_ON){
        result = runAI(userChoice);
        console.log('\t\t\t+++ from getComputerChoice returning...', result);
        return result;
    }
    // RANDOM FOR FIRST ROUND
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    if (roundNumber > 1) {
        AI_ON = true;
        aiPreviousGesture = computerChoice;
    }
    console.log('---------- roundNumber',roundNumber,'----------');
    console.log('AI_ON',AI_ON);
    console.log('humanPreviousGesture',humanPreviousGesture);
    console.log('previousHumanResult',previousHumanResult);
    computerChoice = getComputerChoice(userChoice);
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

    // TODO FIX THIS ---APP DOESN'T RUN CODE UNTIL HERE, IT GETS STUCK ON THE WAY
    console.log('---aiPreviousGesture in game()',aiPreviousGesture);
    visualUpdateRoundNumber(roundNumber);
    roundNumber++;
}