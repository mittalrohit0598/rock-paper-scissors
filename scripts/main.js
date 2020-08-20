moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    return moves[computerSelection];
}

function humanPlay() {
    let playerSelection = prompt('Choose Rock, Paper, or Scissors');
    playerSelection = playerSelection.toLowerCase();
    while(!(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')){
        playerSelection = prompt('Please enter a valid move(Rock, Paper, Scissors)');
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let msg;

    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            msg = 'You Lose! Paper beats Rock';
        }
        else if(computerSelection == 'rock'){
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
            msg = 'You win! Scissors beats Paper';
        }
        else{
            msg = 'It\'s a Draw';
        }
    }
    return msg;
}

function getMessage(result, humanPoints, computerPoints){
    result = `${result} \nPlayer Score: ${humanPoints}\nComputer Score: ${computerPoints}`
    return result
}

function game() {
    let humanPoints = 0;
    let computerPoints = 0;
    
    for(let i = 0; i < 5; i++){
        const playerSelection = humanPlay();
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);

        if(result.indexOf('Lose') > -1){
            computerPoints++;
        } else if(result.indexOf('Win') > -1){
            humanPoints++;
        }

        console.log(getMessage(result, humanPoints, computerPoints));
    }
}

game();