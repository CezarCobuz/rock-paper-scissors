// === AI SWITCH ===
let roundNumber = 1;
let AI_ON = false;

// === MOST RECENT PAST ACTION & RESULT
let humanPreviousGesture;
let previousHumanResult;

// === AI COUNTING ===
// AT HUMAN WIN
let nrOfTimesHumanRepeatsAtWin = 0;
let nrOfTimesHumanAlternatesAtWin = 0;
// AT HUMAN LOSE
let nrOfTimesHumanRepeatsAtLose = 0;
let nrOfTimesHumanAlternatesAtLose = 0;
// AT DRAW
let nrOfTimesHumanRepeatsAtDraw = 0;
let nrOfTimesHumanAlternatesAtDraw = 0;

function updateFrequencyRepeateAlternate(userChoice, previousHumanResult, currentResult) {
    // FOR HUMAN STATEGY FIND
    if (roundNumber > 1) {
        if (previousHumanResult == 'draw') {
            if (userChoice == humanPreviousGesture) {
                nrOfTimesHumanRepeatsAtDraw++;
            } else {
                nrOfTimesHumanAlternatesAtDraw++;
            }
        }
        if (previousHumanResult == 'lose') {
            if (userChoice == humanPreviousGesture) {
                nrOfTimesHumanRepeatsAtLose++;
            } else {
                nrOfTimesHumanAlternatesAtLose++;
            }
        }
        if (previousHumanResult == 'win') {
            if (userChoice == humanPreviousGesture) {
                nrOfTimesHumanRepeatsAtLose++;
            } else {
                nrOfTimesHumanAlternatesAtLose++;
            }
        }
    }
    logCountersAI();
}

function logCountersAI() {
    console.log('nrOfTimesHumanRepeatsAtWin',nrOfTimesHumanRepeatsAtWin);
    console.log('nrOfTimesHumanAlternatesAtWin',nrOfTimesHumanAlternatesAtWin);
    console.log('nrOfTimesHumanRepeatsAtLose',nrOfTimesHumanRepeatsAtLose);
    console.log('nrOfTimesHumanAlternatesAtLose',nrOfTimesHumanAlternatesAtLose);
    console.log('nrOfTimesHumanRepeatsAtDraw',nrOfTimesHumanRepeatsAtDraw);
    console.log('nrOfTimesHumanAlternatesAtDraw',nrOfTimesHumanAlternatesAtDraw);
}

function getStategy(nrRepeats, nrAlternates) {
    if (nrRepeats > nrAlternates) {
        return 'repeats';
    } else {
        return 'alternates';
    }
}

function beatThis(gesture) {
    switch (gesture) {
        case 'rock':
            beatWith = 'paper';
            break;
        case 'paper':
            beatWith = 'scissors';
            break;
        case 'scissors':
            beatWith = 'rock';
            break;
    }
    return beatWith;
}

function runAI(userChoice) {
    let choices = ['rock','paper', 'scissors'];
    let beatWith;
    let humanStrategy;
    switch (previousHumanResult) {
        case 'win':
            humanStrategy = getStategy(nrOfTimesHumanRepeatsAtWin, nrOfTimesHumanAlternatesAtWin);
            console.log('+++ humanStrategy',humanStrategy);
            switch (humanStrategy) {
                case 'repeats':
                    return beatThis(userChoice);
                    break;
                case 'alternates':
                    // TODO TREAT BOTH CASES, ADD EXTRA COUNTERS
                    let aiChoices = choices;
                    let indexOfRemoved = aiChoices.indexOf(userChoice);
                    console.log('+++',aiChoices);
                    aiChoices.splice(indexOfRemoved,1);
                    console.log('+++',aiChoices);
                    return aiChoices[Math.floor(Math.random()*2)];
                    break;
            }
            break;
        case 'lose':
            humanStrategy = getStategy(nrOfTimesHumanRepeatsAtLose, nrOfTimesHumanAlternatesAtLose);
            console.log('+++ humanStrategy',humanStrategy);
            switch (humanStrategy) {
                case 'repeats':
                    return beatThis(userChoice);
                    break;
                case 'alternates':
                    // TODO TREAT BOTH CASES, ADD EXTRA COUNTERS
                    let aiChoices = choices;
                    let indexOfRemoved = aiChoices.indexOf(userChoice);
                    aiChoices.splice(indexOfRemoved,1);
                    return aiChoices[Math.floor(Math.random()*2)];
                    break;
            }
            break;
        case 'draw':
            humanStrategy = getStategy(nrOfTimesHumanRepeatsAtDraw, nrOfTimesHumanAlternatesAtDraw);
            console.log('+++ humanStrategy',humanStrategy);
            switch (humanStrategy) {
                case 'repeats':
                    return beatThis(userChoice);
                    break;
                case 'alternates':
                    // TODO TREAT BOTH CASES, ADD EXTRA COUNTERS
                    let aiChoices = choices;
                    let indexOfRemoved = aiChoices.indexOf(userChoice);
                    aiChoices.splice(indexOfRemoved,1);
                    return aiChoices[Math.floor(Math.random()*2)];
                    break;
            }
            break;
    }
}