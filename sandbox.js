

for(i= 0; i < 5; i++){

function getComputerChoice(){

    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum == 0){
        return 'rock';
    }else if(randomNum == 1){
        return 'paper';
    }else if(randomNum == 2){
        return 'scissors';
    }

}
//console.log(getComputerChoice())

function getHumanChoice(){
    return prompt('Rock, Paper, Scissors: ').toLowerCase()
}
//console.log(getHumanChoice())

function playGame(){

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice){

    if (humanSelection == 'rock' && computerSelection == 'rock'){
    }else if((humanSelection == 'rock' && computerSelection == 'scissors') || (humanSelection == 'scissors' && computerSelection == 'paper') || (humanSelection == 'paper' && computerSelection == 'rock')){
    humanScore += 1;
    }else if((computerSelection == 'rock' && humanSelection == 'scissors') || (computerSelection == 'scissors' && humanSelection == 'paper') || (computerSelection == 'paper' && humanSelection == 'rock')){
    computerScore += 1;
    }

    if(humanSelection == computerSelection){
        return('Its a Tie');
    }else if(humanSelection > computerSelection){
        return(`You Win! ${humanSelection} beats ${computerSelection}`);
    }else if(humanSelection < computerSelection){
        return(`Computer Wins! ${computerSelection} beats ${humanSelection}`);
    }
    
    
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))
    console.log(`Human Score = ${humanScore}`)
    console.log(`Computer Score = ${computerScore}`)
}


console.log(playGame())
}

