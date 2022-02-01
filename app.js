//ask user for play in getUserPlay()
//get computer play in getComputerPlay()
//compare plays to decide winner in playRound(userPlay, computerPlay)
//playRound(...) 5 times to decide match winner in game()

const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');
let userScore = 0;
let computerScore = 0;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(getComputerPlay(), btn.className.split('-')[0].toUpperCase());
    })
})

const PLAYS = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerPlay(){
    const play = Math.floor(Math.random() * 3);
    return PLAYS[play];
}

function playRound(computerPlay, userPlay){
    //draw
    if(computerPlay === userPlay) display.textContent = `It's a draw! you: ${userScore} - comp: ${computerScore}`;
    //win conditions
    else if((computerPlay === 'ROCK' && userPlay === 'PAPER')
    || (computerPlay === 'PAPER' && userPlay === 'SCISSORS')
    || (computerPlay === 'SCISSORS' && userPlay === 'ROCK')){
        userScore++;
        display.textContent = `You win! ${userPlay} beats ${computerPlay} you: ${userScore} - comp: ${computerScore}`;
        if(userScore === 5) {
            display.textContent = 'nice you won!!';
            userScore = 0;
            computerScore = 0; 
        }
    }
    //lose
    else {
        computerScore++;
        display.textContent = `You lose. ${computerPlay} beats ${userPlay} you: ${userScore} - comp: ${computerScore}`  
        if(computerScore === 5) {
            display.textContent = 'you freakin lost';
            userScore = 0;
            computerScore = 0; 
        }
    }
}

// function game(){
//     let rounds = 5;
//     let userScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i < rounds; i++){
//         let result = playRound(getComputerPlay(), getUserPlay());
//         console.log(result);
//         if(result.startsWith('You win')) userScore++;
//         else if(result.startsWith('You lose')) computerScore++;
//     }
//     if(userScore > computerScore) console.log('You won the game!')
//     else if(userScore < computerScore) console.log('You lost the game.')
//     else console.log('The game ended in a draw.');
// }

// game();