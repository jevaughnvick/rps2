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
