const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * options.length);
  return options[randomChoice];
}

function getPlayerChoice() {
  return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "Tie game";
  } else if (
    (playerSelection === options[0] && computerSelection === options[2]) ||
    (playerSelection === options[1] && computerSelection === options[0]) ||
    (playerSelection === options[2] && computerSelection === options[1])
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt("Choose between Rock, Paper, and Scissors");
    let computerSelection = getComputerChoice();

    console.log(
      `Round ${i}: ${playRound(
        playerChoice,
        computerSelection
      )}, Player Score: ${playerScore} vs Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    return "You Win";
  } else if (playerScore < computerScore) {
    return "You Lose";
  } else {
    return "Tie Game";
  }
}
