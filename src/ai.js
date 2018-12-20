let roundNumber = 1;
let AI_ON = false;
let humanPreviousGesture;
let previousHumanResult;

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