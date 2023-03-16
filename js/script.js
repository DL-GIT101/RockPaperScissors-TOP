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

    computerSelection = getComputerChoice();

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

   game(message);
   
}

// to change the text inside the div message
function displayMessage(message) {
    document.getElementById('message').innerText = message;
}

function game(message) {

        // get the length till the explamation point for the slice function
        let exclamationPointIndex = message.indexOf("!");
        let result = message.slice(0,exclamationPointIndex);

        let scorePlayer = document.getElementById('playerScore').innerText;
        let scoreComputer = document.getElementById('computerScore').innerText;

        if (result == "You Win") {
            ++scorePlayer;
        } else if (result == "You Lose") {
            ++scoreComputer;
        } else if (result == "Error"){
            --i;
        }

        document.getElementById('playerScore').innerText = scorePlayer;
        document.getElementById('computerScore').innerText = scoreComputer;

        if(scorePlayer == 5){
            displayMessage("You win against the Computer");     
            reset();
        } else if(scoreComputer == 5){
            displayMessage("You lose against the Computer");
            reset();
        } else {
            displayMessage(message);
        }
    
}

// resets the score and append "new game" button
function reset() {

    let choices = document.querySelectorAll('.choices button');
    choices.forEach((choice) => {
        choice.disabled = true;
    });

    let box = document.getElementById('box');
    const button  = document.createElement('button');
    button.innerText = "New Game";
    button.addEventListener('click', enableBTN)
    box.appendChild(button);
    
    document.getElementById('playerScore').innerText = 0;
    document.getElementById('computerScore').innerText = 0;
}

function enableBTN() {
    let choices = document.querySelectorAll('.choices button');
    choices.forEach((choice) => {
        choice.disabled = false;
    });

    let box = document.getElementById('box');
    box.removeChild(box.lastElementChild);

    displayMessage('Result will appear here');
}

// select all buttons and assign each of them the eventlistener with the function that 
// has the playRound function with button text as the argument
const btns  = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnText = btn.innerText.toLowerCase();
        playRound(btnText);
    });
    
});