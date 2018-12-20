// === AI SWITCH ===
let roundNumber = 1;
let AI_ON = false;

// === MOST RECENT PAST ACTION & RESULT
let humanPreviousGesture;
let previousHumanResult;

// === AI COUNTING ===
// AT HUMAN WIN
let nrOfTimesHumanAlternatesAtWin = 0;
let nrOfTimesHumanRepeatsAtWin = 0;
// AT HUMAN LOSE
let nrOfTimesHumanAlternatesAtLose = 0;
let nrOfTimesHumanRepeatsAtLose = 0;
// AT DRAW
let nrOfTimesHumanAlternatesAtDraw = 0;
let nrOfTimesHumanRepeatsAtDraw = 0;

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