// Variables for tracking scores and clicks
let userScore = 0;
let computerScore = 0;
let clickCounter = 0;
let rounds = 5; // Best of 5 rounds
let currentRound = 1;

// Function to handle user choice
function play(userChoice) {
  if (currentRound > rounds) {
    resetGame();
    return;
  }

  clickCounter++;

  // Computer randomly selects 1 (Rock), 2 (Paper), or 3 (Scissors)
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  // Display user and computer choices
  displayChoices(userChoice, computerChoice);

  // Determine the winner of this round
  const winner = determineWinner(userChoice, computerChoice);

  // Update scores based on the winner
  updateScore(winner);

  // Update click counter display
  document.getElementById('click-counter').innerText = `Clicks: ${clickCounter}`;

  // Check if the game is over (all rounds played)
  if (currentRound === rounds) {
    displayFinalWinner();
  } else {
    currentRound++;
  }
}

// Function to display choices
function displayChoices(userChoice, computerChoice) {
  const choices = ['🪨', '📃', '✂️'];
  document.getElementById('user-choice').innerText = `You chose: ${choices[userChoice - 1]}`;
  document.getElementById('computer-choice').innerText = `Computer chose: ${choices[computerChoice - 1]}`;
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    document.getElementById('result').innerText = "It's a tie!";
    return 'tie';
  }

  if ((userChoice === 1 && computerChoice === 3) ||
      (userChoice === 2 && computerChoice === 1) ||
      (userChoice === 3 && computerChoice === 2)) {
    document.getElementById('result').innerText = "You win this round!";
    return 'user';
  } else {
    document.getElementById('result').innerText = "Computer wins this round!";
    return 'computer';
  }
}

// Function to update scores
function updateScore(winner) {
  if (winner === 'user') {
    userScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
  document.getElementById('click-counter').innerText = `Score: You - ${userScore}, Computer - ${computerScore}`;
}

// Function to display the final winner after all rounds
function displayFinalWinner() {
  if (userScore > computerScore) {
    document.getElementById('result').innerText = "Congratulations! You won the game!";
  } else if (computerScore > userScore) {
    document.getElementById('result').innerText = "Game over! The computer won the game.";
  } else {
    document.getElementById('result').innerText = "The game is a tie!";
  }

  // Reset button to start a new game
  document.getElementById('result').innerHTML += '<br><button onclick="resetGame()">Play Again</button>';
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  clickCounter = 0;
  currentRound = 1;
  document.getElementById('result').innerText = '';
  document.getElementById('user-choice').innerText = '';
  document.getElementById('computer-choice').innerText = '';
  document.getElementById('click-counter').innerText = `Score: You - 0, Computer - 0`;
}
