// Initial
const playerChoices = document.querySelectorAll("#playerChoices .choice");
const opponentChoices = document.querySelectorAll("#opponentChoices .choice");
const opponentPrompt = document.querySelector("#opponentPrompt");
const validChoices = ["fire", "water", "plant"];
let playerChoice = undefined;
let opponentChoice = undefined;

// Functions
const resetChoices = (choices) => {
    choices.forEach((choice) => {
        if (choice.classList.contains("disabled")) {
            choice.classList.remove("disabled");
        }

        if (choice.classList.contains("selected")) {
            choice.classList.remove("selected");
        }
    });
};

const disableChoices = (choices) => {
    choices.forEach((choice) => {
        if (!choice.classList.contains("disabled")) {
            choice.classList.add("disabled");
        }
    });
};

const isValidResults = (validChoices, playerChoice) => {
    if (!validChoices.includes(playerChoice.classList[0])) {
        console.error("Player Choice not valid.");
        return false;
    }

    return true;
};

const selectChoice = (e) => {
    resetChoices(playerChoices);
    e.target.classList.add("selected");
    return e.target;
};

const makeOpponentChoice = (opponentChoices) => {
    resetChoices(opponentChoices);
    const randomIdx = Math.floor(Math.random() * opponentChoices.length);
    const choice = opponentChoices[randomIdx];
    choice.classList.add("selected");
    return choice;
};

const calculatePlayerResult = (playerChoice, opponentChoice) => {
    const playerSelectText = playerChoice.classList[0];
    const opponentSelectText = opponentChoice.classList[0];
    let result = "lose";

    if (playerSelectText === opponentSelectText) {
        result = "draw";
    } else {
        if (playerSelectText === "fire") {
            if (opponentSelectText === "plant") {
                result = "win";
            }
        } else if (playerSelectText === "water") {
            if (opponentSelectText === "fire") {
                result = "win";
            }
        } else if (playerSelectText === "plant") {
            if (opponentSelectText === "water") {
                result = "win";
            }
        }
    }

    return result;
};

const endGame = () => {
    document.querySelectorAll(".choice").forEach((choice) => {
        choice.removeEventListener("click", game);
    });

    document.querySelector("#header").textContent = "Refresh to play again";
};

const showResult = (result) => {
    const playerResult = document.querySelector("#playerPrompt");
    const opponentResult = document.querySelector("#opponentPrompt");

    if (result === "win") {
        playerResult.textContent = "You win! 🎉";
        playerChoice.classList.add("win");
        opponentResult.textContent = "Opponent lost! 😞";
        opponentChoice.classList.add("lost");
    } else if (result === "draw") {
        playerResult.textContent = "Draw!";
        playerChoice.classList.add("draw");
        opponentResult.textContent = "Draw!";
        opponentChoice.classList.add("draw");
    } else {
        playerResult.textContent = "You lost! 😞";
        playerChoice.classList.add("lost");
        opponentResult.textContent = "Opponent wins! 🎉";
        opponentChoice.classList.add("win");
    }
};

// Main
const game = (e) => {
    playerChoice = selectChoice(e);
    if (isValidResults(validChoices, playerChoice)) {
        opponentPrompt.textContent = "Opponent choosing...";
        // Let the player wait slightly for response
        setTimeout(() => {
            opponentChoice = makeOpponentChoice(opponentChoices);
            const result = calculatePlayerResult(playerChoice, opponentChoice);
            showResult(result);
            endGame();
        }, 1500);
    } else {
        console.error("Something is wrong!");
    }
};

// Setup Game Start on click
playerChoices.forEach((choice) => {
    choice.addEventListener("click", game);
});
