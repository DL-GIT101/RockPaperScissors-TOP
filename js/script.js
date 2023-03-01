function getComputerChoice() {

    let x = Math.floor((Math.random() * 100) + 1);
    let choice;

    if (x <= 33){
        choice = "rock";
    } else if (x <= 66){
        choice = "paper";
    } else if (x <= 100){
        choice = "scissor";
    } else {
        choice = "rock";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    let message;

    if (playerSelection == "rock") {
        if (computerSelection == "rock"){
            message = "It's a tie! Rock and Rock";
        } else if (computerSelection == "scissor") {
            message = "You Win! Rock beats Scissor";
        } else if (computerSelection == "paper") {
            message = "You Lose! Paper beats Rock";
        } else {
            message = "Error! Incorrect Input";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper"){
            message = "It's a tie! Paper and Paper";
        } else if (computerSelection == "rock") {
            message = "You Win! Paper beats Rock";
        } else if (computerSelection == "scissor") {
            message = "You Lose! Scissor beats Paper";
        } else {
            message = "Error! Incorrect Input";
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == "scissor"){
            message = "It's a tie! Scissor and Scissor";
        } else if (computerSelection == "paper") {
            message = "You Win! Scissor beats Paper";
        } else if (computerSelection == "rock") {
            message = "You Lose! Rock beats Scissor";
        } else {
            message = "Error! Incorrect Input";
        }
    } else {
        message = "Error! Incorrect Input";
    }

    return message;
}

function game () {

    let round = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 1; i <= 5; i++) {

        round = i;

        let playerSelection = prompt("Input 'Rock' - 'Paper' - 'Scissor'");
        let computerSelection = getComputerChoice();

        let message = playRound(playerSelection, computerSelection);
        let exclamationPointIndex = message.indexOf("!");
        let result = message.slice(0,exclamationPointIndex);

        if (result == "You Win") {
            ++scorePlayer;
        } else if (result == "You Lose") {
            ++scoreComputer;
        } else if (result == "Error"){
            --i;
        }

        alert(
        `Round ${round}
        ${message} 
        Player: ${scorePlayer} 
        Computer: ${scoreComputer}`);

    }
}