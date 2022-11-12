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