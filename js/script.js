/*
getComputerChoice() function
1. Use a random number generator from 0 to 2
2. Use a conditional statement (if else block) and return the result as a string.

1 = rock
2 = paper
3 = scissors
*/

function getComputerChoice() {
    const computerResult = Math.floor(Math.random() * 3) + 1;
    if (computerResult === 1) {
        return "rock";
    }
    else if (computerResult === 2) {
        return "paper";
    }
    else
        return "scissors";
}

/*
getHumanChoice() function
1. Use prompt method to get user's input.
2. Verify user input is valid entry.
3. Store input.

valid entries
rock, paper, scissors

*/

function getHumanChoice() {
    const ask = prompt("Rock, paper or scissors?", "rock");
    const humanResult = ask.toLowerCase();
    if (humanResult === "rock" ||
        humanResult === "paper" ||
        humanResult === "scissors") {
        return humanResult;
    }
    else { 
      return getHumanChoice();
    }

}


/*
playRound() function
1. Takes two parameters, humanChoice and computerChoice.
2. Compare the results of the parameters.
3. Output the results to the console.
4. Increment the winner's count or not if tie.
*/

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie! Next round!");
        }
        else if (computerChoice === "paper") {
            console.log("You lose. Paper beats rock!");
            computerScore++;
        }
        else
            console.log("You win. Rock beats scissors!");
        humanScore++;
    }

    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("Tie! Next round!");
        }
        else if (computerChoice === "scissors") {
            console.log("You lose. Scissors beats paper!");
            computerScore++;
        }
        else
            console.log("You win. Paper beats rock!");
        humanScore++;
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            console.log("Tie! Next round!");
        }
        else if (computerChoice === "rock") {
            console.log("You lose. Rock beats scissors!");
            computerScore++;
        }
        else
            console.log("You win. Scissors beats paper!");
        humanScore++;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

/*
playGame() function
1. create two variables for looping through multiple rounds.
2. Keep playing until 5 rounds
3. Determine the winner after 5 rounds.
*/

function playGame() {
    const roundsToPlay = 5;
    let games = 0;
    
    while(games < roundsToPlay) {   
      playRound(humanSelection,computerSelection);

      humanSelection = getHumanChoice();
      computerSelection = getComputerChoice();
      games++;
    }

    if(humanScore > computerScore){
      console.log("You win the game!");
    }
    else 
      console.log("You lose the game!");
    


}