function play(userChoice) {
    // Generate a random number for the computer's choice
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    // Determine the winner
    let result = "";
    let computerEmoji = "";
    let userEmoji = "";

    switch (computerChoice) {
        case 1:
            computerEmoji = "🪨";
            break;
        case 2:
            computerEmoji = "📃";
            break;
        case 3:
            computerEmoji = "✂️";
            break;
        default:
            computerEmoji = "";
    }

    switch (userChoice) {
        case 1:
            userEmoji = "🪨";
            break;
        case 2:
            userEmoji = "📃";
            break;
        case 3:
            userEmoji = "✂️";
            break;
        default:
            userEmoji = "";
    }

    if (userChoice === computerChoice) {
        result = "🤘 🥴 It's a draw!";
    } else if (
        (userChoice === 1 && computerChoice === 3) ||
        (userChoice === 2 && computerChoice === 1) ||
        (userChoice === 3 && computerChoice === 2)
    ) {
        result = "😁 You win!";
    } else {
        result = "🤖 I win! 😭";
    }

    // Display the result and choices
    document.getElementById("result").textContent = result;
    document.getElementById("computer-choice").textContent = "Computer's Choice: " + computerEmoji;
    document.getElementById("user-choice").textContent = "Your Choice: " + userEmoji;
}
