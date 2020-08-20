moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    return moves[computerSelection];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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

const div = document.querySelector('div');

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');

playerScore.textContent = 0;
computerScore.textContent = 0;

const announcement = document.createElement('p');
div.appendChild(announcement);

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
       const msg = playRound(button.innerHTML, computerPlay());
       if(msg.indexOf('Win') > -1){
           playerScore.textContent++;
           winner(playerScore.textContent, 'Player');
       } else if(msg.indexOf('Lose') > -1){
           computerScore.textContent++;
           winner(computerScore.textContent, 'Computer');
       }
    });
});

function winner(currentScore, player) {
    if(currentScore == 5){
        announcement.textContent = `${player} wins! Choose a move to play again.`;
        resetScore();
    } else{
        announcement.textContent = '';
    }
}

function resetScore() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}