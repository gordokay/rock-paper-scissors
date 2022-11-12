function getComputerChoice() {
  let options = ['Rock', 'Paper', 'Scissors'];
  let choiceIndex = Math.floor(Math.random() * 3);
  return options[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return 'It\'s a draw!';
  }
  let round = playerSelection + computerSelection;
  // array of player win conditions modeled as 'PlayerComputer'
  let winConditions = ['RockScissors', 'ScissorsPaper', 'PaperRock'];
  if(winConditions.includes(round)) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, paper, scissors, shoot!');
    // change input to initial capital format
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result = playRound(playerSelection, getComputerChoice());
    if(result.includes('win')) {
      playerWins++;
    }
    else if(result.includes('lose')) {
      computerWins++;
    }
    console.log(result);
  }
  if(playerWins > computerWins) {
    console.log('You win!');
  }
  else if(computerWins > playerWins) {
    console.log('You lose!');
  }
  else {
    console.log('It\'s a tie!');
  }
}

game();