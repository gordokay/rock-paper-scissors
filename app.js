function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let choiceIndex = Math.floor(Math.random() * 3);
  return options[choiceIndex];
}