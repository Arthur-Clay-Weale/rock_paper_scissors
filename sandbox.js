



function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0){
        return 'Rock';
    }else if (randomNum === 1){
        return 'Paper';
    }else return 'Scissors';
    
    
}

for(let i = 0; i < 3; i++){
    console.log(getComputerChoice())
}

function getHumanChoice(){
    choice = prompt('What do you choose: ');
    return choice;
}

//console.log(getHumanChoice())
