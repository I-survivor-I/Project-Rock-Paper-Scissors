//console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.random();
    console.log("Random number:", number);

    let computerChoice;

    if (number <= 0.33) {
        computerChoice = ("Rock");
    } else if (number <= 0.66) {
        computerChoice = ("Paper");
    } else {
        computerChoice = ("Scissors");
    }
    return (computerChoice);
}

function getHumanChoice() {
    let text1 = prompt('select: Rock / Paper / Scissors');
    let text2 = text1.charAt(0);
    let text3 = text1.slice(1).toLowerCase();
    let humanChoice = text2.toUpperCase() + text3; 
    return (humanChoice);
}

function playRound(humanChoice, computerChoice) {
    console.log("human selects: " + humanChoice + " | computer selects: " + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if ( 
        (humanChoice === "Rock" && computerChoice === "Scissors")  ||
        (humanChoice === "Paper" && computerChoice === "Rock")     ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("human wins " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("computer wins " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }  
    console.log("human has: " + humanScore + " points");
    console.log("computer has: " + computerScore + " points");

}



while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    alert("Ready for next round?");
    console.clear();
}

if (humanScore === 5) {
    console.log("🎉 Human wins the game!");
} else {
    console.log("🤖 Computer wins the game!");
}



