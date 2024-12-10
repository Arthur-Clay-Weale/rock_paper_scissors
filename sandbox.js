

const newDiv = document.createElement("div");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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
    let humanScore = 0;
    let computerScore= 0;

function playGame() {

    function playRound(humanChoice, computerChoice){

        if (humanChoice== 'rock' && computerChoice == 'rock'){
            console.log('Its a Tie');
        }else if((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')){
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }else if((humanChoice == 'scissors' && computerChoice == 'rock') || (humanChoice == 'paper' && computerChoice == 'scissors' ) || ( humanChoice == 'rock' && computerChoice == 'paper' )){
            computerScore += 1;
            console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    }
runningScore();
}

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

function runningScore(){
    console.log('Running Score');
    console.log(`Human Score = ${humanScore}`);
    console.log(`Computer Score = ${computerScore}`);

    if (humanScore === 5){
        console.log('You beat the computer! You are a Boss');
        finalUpdate();
    }else if(computerScore === 5){
        console.log('The Computer beat you. Better luck next time!');
        finalUpdate();
    }
    }
}
playGame();

function finalUpdate(){
    
    console.log('Final Scoreboard\n')
    console.log(`Human Score = ${humanScore}`);
    console.log(`Computer Score = ${computerScore}`);
}