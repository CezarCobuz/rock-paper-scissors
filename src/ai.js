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

function runAI() {
    let beatWith;
    if (previousHumanResult == 'win') {
        switch (humanPreviousGesture) {
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
    }
    if (previousHumanResult == 'lose') {
        switch (humanPreviousGesture) {
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
    }
    if (previousHumanResult == 'draw') {
        switch (humanPreviousGesture) {
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
    }
    console.log('AI will chose: beatWith',beatWith);
    return beatWith;
}