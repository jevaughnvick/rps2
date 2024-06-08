

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


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    

    while(humanScore < 5 && computerScore < 5){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
    }

    let winner = getWinner(humanScore, computerScore);

    showWinner(winner);

    ///////////////////////////////////////////////////////////////////////

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

        if(roundWinner === "Draw") console.log("That's a draw!")
        if(roundWinner === "Human") console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        if(roundWinner === "Computer") console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    }

    function getWinner(humanScore, computerScore){

        if(humanScore > computerScore){
            return "human"
        }else{
            return "computer"
        }
    
    }
    
    function showWinner(winner){

        if(winner === "human") console.log("You Won the Game!");
        if(winner === "computer") console.log("You Lost the Game!");
    }
}


playGame()