

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

function getHumanChoice(){
    return prompt('Rock, Paper, Scissors: ').toLowerCase()
}

function playGame(){

let humanScore = 0;
let computerScore= 0;

//for(i= 0; i < 5; i++){

function playRound(humanChoice, computerChoice){

    if (humanSelection == 'rock' && computerSelection == 'rock'){
        return('Its a Tie');
    }else if((humanSelection == 'rock' && computerSelection == 'scissors') || (humanSelection == 'scissors' && computerSelection == 'paper') || (humanSelection == 'paper' && computerSelection == 'rock')){
        humanScore += 1;
        return(`You Win! ${humanSelection} beats ${computerSelection}`);
    }else if((humanSelection == 'scissors' && computerSelection == 'rock') || (humanSelection == 'paper' && computerSelection == 'scissors' ) || ( humanSelection == 'rock' && computerSelection == 'paper' )){
        computerScore += 1;
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

