// Rock , Paper , Scissors Game

function game(){
    console.log("Welcome to Rock, Paper, Scissors Game!");
    let userchoice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
    let computerchoice = Math.floor(Math.random() * 3)+1;
    if(computerchoice === 1){
        computerchoice = "rock";
    } else if(computerchoice === 2){
        computerchoice = "paper";
    } else{
        computerchoice = "scissors";
    }
    console.log(`user selected -> ${userchoice}`)
    console.log(`computer selected -> ${computerchoice}`)

    if (userchoice === computerchoice) {
        console.log("It's a draw!");
    } else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }

}
//starting the game
game();