

let humanScore = 0;
let computerScore = 0;
for(let i = 0; i < 5; i++){

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0){
        return 'rock';
    }else if (randomNum === 1){
        return 'paper';
    }else return 'scissors';
    
    
} 
function getHumanChoice(){
    choice = prompt('What do you choose: ');
    return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice){

    
    if(computerChoice == humanChoice) {
        return 'Its a Tie!';
    } else if(computerChoice == 'rock' && humanChoice == 'paper') {
        return 'Player wins, paper beats rock';
    } else if(computerChoice == 'paper' && humanChoice == 'scissors') {
        return 'Player wins, scissors beats paper';
    } else if(computerChoice == 'scissors' && humanChoice == 'rock') {
        return 'Player wins, rock beats scissors';
    } else if(computerChoice == 'rock' && humanChoice == 'scissors') {
        return 'Computer wins, rock beats scissors';
    } else if(computerChoice == 'paper' && humanChoice == 'rock') {
        return 'Computer wins, paper beats rock';
    } else if(computerChoice == 'scissors' && humanChoice == 'paper') {
        return 'Computer wins, scissors beats paper';
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection.toLowerCase(),computerSelection.toLowerCase()));

function updateScoreBoard(){

    if(humanSelection =='paper' && computerSelection == 'rock'){
        humanScore += 1;
    }else if(humanSelection =='scissors' && computerSelection == 'paper'){
        humanScore += 1;
    }else if(humanSelection =='rock' && computerSelection == 'scissors'){
        humanScore += 1;
    }

    if(humanSelection =='rock' && computerSelection == 'paper'){
        computerScore += 1;
    }else if(humanSelection =='paper' && computerSelection == 'scissors'){
        computerScore += 1;
    }else if(humanSelection =='scissors' && computerSelection == 'rock'){
        computerScore += 1;
    }

    console.log('Player score is: '+ humanScore);
    console.log('Computer score is: '+computerScore);
}
updateScoreBoard();
}
