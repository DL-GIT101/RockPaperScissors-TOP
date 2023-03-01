function getComputerChoice() {
    let x = Math.floor((Math.random() * 100) + 1);
    let choice;

    if(x <= 33){
        choice = "rock";
    }else if(x <= 66){
        choice = "paper";
    } else if(x <= 100){
        choice = "scissor";
    }else{
        choice = "rock";
    }

    return choice;
}