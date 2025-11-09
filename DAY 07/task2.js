function game() {
    console.log("Welcome to the Secret Number Game!");
    let computerchoice = Math.floor(Math.random() * 10) + 1;
    let count = 0;
    let userchoice;

    do {
        userchoice = parseInt(prompt("Enter your choice (1–10):"));
        
        if (isNaN(userchoice) || userchoice < 1 || userchoice > 10) {
            console.log("Invalid input! Please enter a number between 1 and 10.");
            continue;
        }

        count++;

        if (userchoice === computerchoice) {
            console.log(`Congratulations! You guessed the correct number ${computerchoice} in ${count} attempts.`);
            break;
        } else if (userchoice < computerchoice) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }
    } while (true);
}

game();
