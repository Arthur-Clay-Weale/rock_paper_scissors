

const newDiv = document.createElement("div");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
})
paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
})
scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
})

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
    return prompt('Rock, Paper, Scissors: ').toLowerCase();
}

function playGame(){

let humanScore = 0;
let computerScore= 0;

//for(i= 0; i < 5; i++){

    function playRound(){

        if (humanSelection == 'rock' && computerSelection == 'rock'){
            console.log('Its a Tie');
        }else if((humanSelection == 'rock' && computerSelection == 'scissors') || (humanSelection == 'scissors' && computerSelection == 'paper') || (humanSelection == 'paper' && computerSelection == 'rock')){
            humanScore += 1;
            console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
        }else if((humanSelection == 'scissors' && computerSelection == 'rock') || (humanSelection == 'paper' && computerSelection == 'scissors' ) || ( humanSelection == 'rock' && computerSelection == 'paper' )){
            computerScore += 1;
            console.log(`Computer Wins! ${computerSelection} beats ${humanSelection}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Human Score = ${humanScore}`);
console.log(`Computer Score = ${computerScore}`);
}

function finalUpdate(){
    
    console.log('Final Scoreboard\n')
    console.log(`Human Score = ${humanScore}`);
    console.log(`Computer Score = ${computerScore}`);

    if (humanScore > computerScore){
        console.log('You beat the computer! You are a Boss');
    }else console.log('The Computer beat you. Better luck next time!');
}

finalUpdate();
//}
playGame();

