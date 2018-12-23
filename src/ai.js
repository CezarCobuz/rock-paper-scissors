// === AI SWITCH ===
let roundNumber = 1;
let AI_ON = false;

// === MOST RECENT PAST ACTION & RESULT
let humanPreviousGesture;
let previousHumanResult;
let aiPreviousGesture;
let computerChoice;

// === AI COUNTING ===
// AT HUMAN WIN
let nrOfTimesHumanRepeatsAtWin = 0;
let nrOfTimesHumanAlternatesAtWin = 0;
// ALTERNATION PATTERN
let nrOfTimesHumanAlternatesAtWinToAiChoice = 0;
let nrOfTimesHumanAlternatesAtWinToWhatAiWouldHaveBeaten = 0;

// AT HUMAN LOSE
let nrOfTimesHumanRepeatsAtLose = 0;
let nrOfTimesHumanAlternatesAtLose = 0;
// ALTERNATION PATTERN
let nrOfTimesHumanAlternatesAtLoseToAiChoice = 0;
let nrOfTimesHumanAlternatesAtLoseToWhatHumanWouldHaveBeaten = 0;

// AT DRAW
let nrOfTimesHumanRepeatsAtDraw = 0;
let nrOfTimesHumanAlternatesAtDraw = 0;

function updateFrequencyRepeateAlternate(userChoice, previousHumanResult, humanPreviousGesture, aiPreviousGesture) {
    // FOR HUMAN STATEGY FIND
    if (roundNumber > 1) {
        switch (previousHumanResult) {
            case 'draw':
                if (userChoice == humanPreviousGesture) {
                    nrOfTimesHumanRepeatsAtDraw++;
                } else {
                    // TODO TREAT BOTH CASES, ADD EXTRA COUNTERS
                    nrOfTimesHumanAlternatesAtDraw++;
                }
                break;
            case 'lose':
                if (userChoice == humanPreviousGesture) {
                    nrOfTimesHumanRepeatsAtLose++;
                } else {
                    nrOfTimesHumanAlternatesAtLose++;
                    if (userChoice == aiPreviousGesture) {
                        nrOfTimesHumanAlternatesAtLoseToAiChoice++;
                    }
                    if (userChoice == beatThis(aiPreviousGesture)) {
                        nrOfTimesHumanAlternatesAtLoseToWhatHumanWouldHaveBeaten++;
                    }
                }
            case 'win':
                if (userChoice == humanPreviousGesture) {
                    nrOfTimesHumanRepeatsAtWin++;
                } else {
                    nrOfTimesHumanAlternatesAtWin++;
                    if (userChoice == aiPreviousGesture) {
                        nrOfTimesHumanAlternatesAtWinToAiChoice++;
                    }
                    if (beatThis(userChoice) == aiPreviousGesture) {
                        nrOfTimesHumanAlternatesAtWinToWhatAiWouldHaveBeaten++;
                    }
                }
        }
    }
    logCountersAI();
}

function logCountersAI() {
    console.log('nrOfTimesHumanRepeatsAtWin',nrOfTimesHumanRepeatsAtWin);
    console.log('nrOfTimesHumanAlternatesAtWin',nrOfTimesHumanAlternatesAtWin);
    console.log('\tnrOfTimesHumanAlternatesAtWinToAiChoice',nrOfTimesHumanAlternatesAtWinToAiChoice);
    console.log('\tnrOfTimesHumanAlternatesAtWinToWhatAiWouldHaveBeaten',nrOfTimesHumanAlternatesAtWinToWhatAiWouldHaveBeaten);
    console.log('nrOfTimesHumanRepeatsAtLose',nrOfTimesHumanRepeatsAtLose);
    console.log('nrOfTimesHumanAlternatesAtLose',nrOfTimesHumanAlternatesAtLose);
    console.log('\tnrOfTimesHumanAlternatesAtLoseToAiChoice',nrOfTimesHumanAlternatesAtLoseToAiChoice);
    console.log('\tnrOfTimesHumanAlternatesAtLoseToWhatHumanWouldHaveBeaten',nrOfTimesHumanAlternatesAtLoseToWhatHumanWouldHaveBeaten);
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

function getStategyAtAlternate(nrAlternatesToAi, nrAlternatesToBeat) {
    if (nrAlternatesToAi > nrAlternatesToBeat) {
        return 'copiesAI';
    } else {
        return 'beatsCurentHC';
    }

}

function beatThis(gesture) {
    let beatWith;
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
    let humanStrategy;
    let humanAltStrategy;
    console.log('\t\t\t\t\thumanPreviousGesture',humanPreviousGesture);
    console.log('\t\t\t\t\tpreviousHumanResult before swithch',previousHumanResult);
    switch (previousHumanResult) {
        case 'win':
            humanStrategy = getStategy(nrOfTimesHumanRepeatsAtWin, nrOfTimesHumanAlternatesAtWin);
            console.log('+++ humanStrategy',humanStrategy,'at win');
            switch (humanStrategy) {
                case 'repeats':
                    return beatThis(humanPreviousGesture);
                    break;
                case 'alternates':
                    humanAltStrategy = getStategyAtAlternate(nrOfTimesHumanAlternatesAtWinToAiChoice, nrOfTimesHumanAlternatesAtWinToWhatAiWouldHaveBeaten);
                    console.log('\t+++humanAltStrategy',humanAltStrategy);
                    switch (humanAltStrategy) {
                        case 'copiesAI':
                            console.log('\t\t+++ from runAI WIN returning...',humanPreviousGesture);
                            return humanPreviousGesture;
                            break;
                        case 'beatsCurentHC':
                            return  beatThis(beatThis(humanPreviousGesture));
                            break;
                    }
                    break;
            }
            break;
        case 'lose':
            humanStrategy = getStategy(nrOfTimesHumanRepeatsAtLose, nrOfTimesHumanAlternatesAtLose);
            console.log('+++ humanStrategy',humanStrategy,'at lose');
            switch (humanStrategy) {
                case 'repeats':
                    return beatThis(humanPreviousGesture);
                    break;
                case 'alternates':
                    console.log('\t\t\t\t\thumanPreviousGesture',humanPreviousGesture,'in case lose alternates');
                    humanAltStrategy = getStategyAtAlternate(nrOfTimesHumanAlternatesAtLoseToAiChoice, nrOfTimesHumanAlternatesAtLoseToWhatHumanWouldHaveBeaten);
                    console.log('\t+++humanAltStrategy',humanAltStrategy);
                    switch (humanAltStrategy) {
                        case 'copiesAI':
                            console.log('\t\t+++ from runAI LOSE returning...',beatThis(beatThis(humanPreviousGesture)));
                            return beatThis(beatThis(humanPreviousGesture));
                            break;
                        case 'beatsCurentHC':
                            return humanPreviousGesture;
                            break;
                    }
                    break;
            }
            break;
        case 'draw':
            humanStrategy = getStategy(nrOfTimesHumanRepeatsAtDraw, nrOfTimesHumanAlternatesAtDraw);
            console.log('+++ humanStrategy',humanStrategy,'at draw');
            switch (humanStrategy) {
                case 'repeats':
                    return beatThis(humanPreviousGesture);
                    break;
                case 'alternates':
                    // ADDS RANDOM FOR MASKING ANTI-HUMAN-STRATEGY
                    let aiChoices = choices;
                    let indexOfRemoved = aiChoices.indexOf(userChoice);
                    aiChoices.splice(indexOfRemoved,1);
                    return aiChoices[Math.floor(Math.random()*2)];
                    break;
            }
            break;
    }
}