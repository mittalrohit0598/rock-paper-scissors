moves = ['rock', 'paper', 'scissors'];

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

const display = document.querySelector('#display');
let playerScore = 0;
let computerScore = 0;

const start = document.querySelector('#start');
start.addEventListener('click', () => {
    if(start.textContent == 'Play Again'){
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#message').remove();
    }
    
    start.textContent = "";
    
    display.setAttribute('style', 'background-color: #fff; display: flex;');

    const player = document.createElement('div');
    player.setAttribute('id', 'player');
    display.appendChild(player);
    player.setAttribute('style', 'width: 250px; color: #00bcd4');
    const playerScoreMsg = document.createElement('h3');
    playerScoreMsg.textContent = `Your Score: ${playerScore}`;
    player.appendChild(playerScoreMsg);
    playerScoreMsg.setAttribute('style', 'margin: 30px 0;');
    const playerMove = document.createElement('h3');
    playerMove.setAttribute('style', 'margin: 40px 0;');
    player.appendChild(playerMove);

    const computer = document.createElement('div');
    computer.setAttribute('id', 'computer');
    display.appendChild(computer);
    computer.setAttribute('style', 'width: 250px; color: #dd2c00;');
    const computerScoreMsg = document.createElement('h3');
    computerScoreMsg.textContent = `Computer's Score: ${computerScore}`;
    computer.appendChild(computerScoreMsg);
    computerScoreMsg.setAttribute('style', 'margin: 30px 0;');
    const computerMove = document.createElement('h3');
    computerMove.setAttribute('style', 'margin: 40px 0;');
    computer.appendChild(computerMove);

    const msg = document.createElement('h2');
    msg.setAttribute('id', 'message');
    msg.setAttribute('style', 'position: relative; top: -100px;');
    msg.textContent = 'Choose your move above!';
    document.body.appendChild(msg);
});

const buttons = Array.from(document.querySelectorAll('img'));
buttons.forEach((button) => {
    button.addEventListener('click', game)
});

function game(button){
    if(start.textContent == ""){
        const computerMove = computerPlay();
        document.querySelector('#player').lastChild.textContent = `You played ${button.target.id}`;
        document.querySelector('#computer').lastChild.textContent = `Computer played ${computerMove}`;
        
        const result = playRound(button.target.id, computerMove);
        document.querySelector('#message').textContent = result;

        if(result.indexOf('Win') > -1){
            document.querySelector('#message').style.color = '#00bcd4';
            playerScore++;
            document.querySelector('#player').firstChild.textContent = `Your Score: ${playerScore}`;
            winner(playerScore, 'you');
        } else if(result.indexOf('Lose')> -1){
            document.querySelector('#message').style.color = '#dd2c00';
            computerScore++;
            document.querySelector('#computer').firstChild.textContent = `Computer's Score: ${computerScore}`;
            winner(computerScore, 'computer');
        } else{
            document.querySelector('#message').style.color = '#000';
        }
    }
}

function winner(currentScore, player) {
    if(currentScore == 5 && player == 'you'){
        document.querySelector('#message').textContent = `You Win this round by ${playerScore} - ${computerScore}`;
        document.querySelector('#message').setAttribute('style', 'color: #00bcd4; position: relative; top: -250px; background-color: #fff; width: 500px; margin: 0 auto; border-radius: 30px');
        document.querySelector('#player').remove();
        document.querySelector('#computer').remove();
        start.textContent = 'Play Again';
        display.style.backgroundColor = '';

    } else if(currentScore == 5 && player == 'computer'){
        document.querySelector('#message').textContent = `You Lose this round by ${computerScore} - ${playerScore}`;
        document.querySelector('#message').setAttribute('style', 'color: #dd2c00; position: relative; top: -250px; background-color: #fff; width: 500px; margin: 0 auto; border-radius: 30px');
        document.querySelector('#computer').remove();
        document.querySelector('#player').remove();
        start.textContent = 'Play Again';
        display.style.backgroundColor = '';
    }
}

function resetScore() {

}