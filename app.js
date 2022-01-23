//ask user for play in getUserPlay()
//get computer play in getComputerPlay()
//compare plays to decide winner in playRound(userPlay, computerPlay)
//playRound(...) 5 times to decide match winner in game()

const PLAYS = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerPlay(){
    const play = Math.floor(Math.random() * 3);
    return PLAYS[play];
}

function getUserPlay(){
    const play = prompt("Enter your play: ");
    return play.toUpperCase();
}

function playRound(computerPlay, userPlay){
    //draw
    if(computerPlay === userPlay) return "It's a draw!";
    //win conditions
    else if((computerPlay === 'ROCK' && userPlay === 'PAPER')
    || (computerPlay === 'PAPER' && userPlay === 'SCISSORS')
    || (computerPlay === 'SCISSORS' && userPlay === 'ROCK')){
        return `You win! ${userPlay} beats ${computerPlay}` 
    }
    //lose
    else return `You lose. ${computerPlay} beats ${userPlay}`  
}

function game(){
    let rounds = 5;
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++){
        let result = playRound(getComputerPlay(), getUserPlay());
        console.log(result);
        if(result.startsWith('You win')) userScore++;
        else if(result.startsWith('You lose')) computerScore++;
    }
    if(userScore > computerScore) console.log('You won the game!')
    else if(userScore < computerScore) console.log('You lost the game.')
    else console.log('The game ended in a draw.');
}

game();