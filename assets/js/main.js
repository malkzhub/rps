// // Enter Player Name
// let playerName = prompt("Enter name: ");
// const playerInput = document.querySelector("#player-name");
const options = {
  82: "rock",
  80: "paper",
  83: "scissors",
  76: "lizard",
  75: "spock",
};

// playerInput.textContent = playerName;

// function to hightlight what the player selected
function hitKey(e) {
  const key = document.querySelector(
    `.player-button[data-button="${e.keyCode}"]`
  );

  let isSelected = document.querySelector("#player-select");
  let finalSelection = options[e.keyCode];

  if (!key) return;
  key.classList.add("selected");

  // display chosen object

  if (e.keyCode in options) {
    isSelected.innerHTML = `
    <h5>Player chose <span class="text-warning text-capitalize">${finalSelection}</span></h5>
    `;
  }
}

// function for computer selection
function getComputerChoice(e) {
  const rChoice = Object.keys(options);
  let rSelected = rChoice[Math.floor(Math.random() * rChoice.length)];

  const cKey = document.querySelector(
    `.computer-button[data-computer="${options[rSelected]}"]`
  );

  let cSelected = document.querySelector("#computer-select");
  let cFinal = options[rSelected];

  if (!(e.keyCode in options)) {
    return false;
  } else {
    if (rSelected in options) {
      cSelected.innerHTML = `
      <h5>A.I. chose <span class="text-warning text-capitalize">${cFinal}</span></h5>
      `;
    }
  }

  cKey.classList.add("selected");
}

// function to remove the effect when player changes choice
function removeEffect(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("selected");
}

// removing transition
const keys = document.querySelectorAll(".player-button");
keys.forEach((key) => key.addEventListener("transitionend", removeEffect));

const cKeys = document.querySelectorAll(".computer-button");
cKeys.forEach((key) => key.addEventListener("transitionend", removeEffect));

// Event listener if player has selected
window.addEventListener("keydown", hitKey);
window.addEventListener("keydown", getComputerChoice);
