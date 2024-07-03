const buttons = document.querySelectorAll("button");

const mainScreen = document.querySelector(".main-screen");
const playerOneResult = document.querySelector(".child-one");
const computerResult = document.querySelector(".child-two");


let humanScore = 0;
let computerScore = 0;


buttons.forEach(button => button.addEventListener("click", e => {

    const humanChoice = recordPlayerSelection(e);
    const computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice);

    if(!(humanScore < 5 && computerScore < 5)){

        let winner = getWinner(humanScore, computerScore);

        showWinner(winner);
        humanScore = 0;
        playerOneResult.textContent = `Player One: ${humanScore}`;;
        computerScore = 0;
        computerResult.textContent = `Computer: ${humanScore}`;;
    };

}));

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "Rock"
        
        case 1:
            return "Paper"

        case 2:
            return "Scissors"
    }
}

function recordPlayerSelection(e){

    return e.target.textContent;
}

function getHumanChoice(){
    while (true) {
        let choice = prompt("Enter 'R' for Rock, 'P' for Paper or 'S' for Scissors: ", "");
        if(choice === "R" || choice === "r"){
            return "Rock"
        }else if(choice === "P" || choice === "p"){
            return "Paper"
        }else if(choice === "S" || choice === "s"){
            return "Scissors"
        }else{
            alert("Please choose Rock, Paper or Scissors.")
        }
    }
}

function playRound(humanChoice, computerChoice){
    
    let roundWinner = getRoundWinner(humanChoice, computerChoice);
    if (roundWinner === "Human") humanScore++
    if (roundWinner === "Computer") computerScore++

    showRoundWinner(roundWinner, humanChoice, computerChoice);

}

function getRoundWinner(humanChoice, computerChoice){
    
    if (humanChoice === "Rock" && computerChoice === "Rock") return "Draw"
    if (humanChoice === "Rock" && computerChoice === "Paper") return "Computer"
    if (humanChoice === "Rock" && computerChoice === "Scissors") return "Human"
    if (humanChoice === "Paper" && computerChoice === "Rock") return "Human"
    if (humanChoice === "Paper" && computerChoice === "Paper") return "Draw"
    if (humanChoice === "Paper" && computerChoice === "Scissors") return "Computer"
    if (humanChoice === "Scissors" && computerChoice === "Rock") return "Computer"
    if (humanChoice === "Scissors" && computerChoice === "Paper") return "Human"
    if (humanChoice === "Scissors" && computerChoice === "Scissors") return "Draw"
}

function showRoundWinner(roundWinner, humanChoice, computerChoice){

    if(roundWinner === "Draw") mainScreen.textContent = "That's a draw!";
    if(roundWinner === "Human"){

        mainScreen.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        playerOneResult.textContent = `Player One: ${humanScore}`;
    };
    if(roundWinner === "Computer"){

        mainScreen.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerResult.textContent = `Computer: ${computerScore}`;
    };
}

function getWinner(humanScore, computerScore){

    if(humanScore > computerScore){
        return "human"
    }else{
        return "computer"
    }

}

function showWinner(winner){

    if(winner === "human") mainScreen.textContent = "You Won the Game!";
    if(winner === "computer") mainScreen.textContent = "You Lost the Game!";
}

