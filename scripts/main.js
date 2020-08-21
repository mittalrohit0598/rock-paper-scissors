moves = ['rock', 'raper', 'scissors'];

function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    return moves[computerSelection];
}

function playRound(playerSelection, computerSelection) {
    let msg = '';

    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            msg = 'You Lose! Paper beats Rock';
        }
        else if(computerSelection == 'scissors'){
            msg = 'You Win! Rock beats Scissors';
        }
        else{
            msg = 'It\'s a Draw!';
        }
    } else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            msg = 'You Win! Paper beats Rock';
        }
        else if(computerSelection == 'scissors'){
            msg = 'You Lose! Scissors beats Paper';
        }
        else{
            msg = 'It\'s a Draw';
        }
    } else{
        if(computerSelection == 'rock'){
            msg = 'You Lose! Rock beats Scissors';
        }
        else if(computerSelection == 'paper'){
            msg = 'You Win! Scissors beats Paper';
        }
        else{
            msg = 'It\'s a Draw';
        }
    }
    return msg;
}

const buttons = Array.from(document.querySelectorAll('img'));
buttons.forEach((button) => {
    button.addEventListener('click', game());
});

function game(e);{

}

function winner(currentScore, player) {
    if(currentScore == 5){
    } else{
    }
}

function resetScore() {

}