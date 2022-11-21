const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const result = document.querySelector('.result');

function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors'];
  let choiceIndex = Math.floor(Math.random() * 3);
  return options[choiceIndex];
}

function getScore(player) {
  const playerScoreArray = player.textContent.split(' ');
  return Number(playerScoreArray[playerScoreArray.length - 1]);
}

function updateScore(player) {
  //split score string into words
  const current = player.textContent.split(' ');
  //get last word containing score value and update
  current[current.length - 1] = getScore(player) + 1;
  player.textContent = current.join(' ');
}

function checkWin() {
  let playerScoreValue = getScore(playerScore);
  let computerScoreValue =getScore(computerScore);

  if(playerScoreValue === 5 || computerScoreValue === 5) {
    for(let button of buttons) {
      button.removeEventListener('click', playRound);
    }
    if(playerScoreValue === 5) {
      result.textContent = 'You win!';
    } else {
      result.textContent = 'You lose!';
    }
  }
}

function playRound() {
  let playerSelection = this.textContent;
  let computerSelection = getComputerChoice();

  if(playerSelection === computerSelection) {
    result.textContent = 'It\'s a draw!';
    return;
  }
  let round = playerSelection + computerSelection;
  // array of player win conditions modeled as 'PlayerComputer'
  let winConditions = ['RockScissors', 'ScissorsPaper', 'PaperRock'];
  if(winConditions.includes(round)) {
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    updateScore(playerScore);
  } else {
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    updateScore(computerScore);
  }
  checkWin();
}

function game() {
  for(let button of buttons){
    button.addEventListener('click', playRound);
  }
}

game();