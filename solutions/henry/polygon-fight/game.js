/* Global */
const announcePrompt = document.querySelector("#announce-prompt");
const gameContainer = document.querySelector("#game-container");
const buttonContainer = document.querySelector(".button-container");
const selectionContainer = document.querySelector(".selection-container");
const statsContainer = document.querySelector(".stats-container");
const fightContainer = document.querySelector(".fight-container");

/* Selection */
// Inital
const polygons = document.querySelectorAll(".polygon");
let selectedPolygon = undefined;

// Functions
const setSelectedPolygon = (event) => {
    // clear old selected just in case
    polygons.forEach((polygon) => {
        if (polygon.classList.contains("selected")) {
            polygon.classList.remove("selected");
        }
    });
    selectedPolygon = event.target;
    selectedPolygon.classList.add("selected");
    announcePrompt.textContent = "Set Name and Points";
};

// Setup
polygons.forEach((polygon) => {
    polygon.addEventListener("click", setSelectedPolygon);
});

/* Stats picking */
//Inital
let character = {};
const statsInputs = document.querySelectorAll(".stats-input");
const fightButton = document.querySelector("#fight-button");
let points = 10;
// TODO, something more careful
const nameInput = statsInputs[0];
const attackInput = statsInputs[1];
const defenceInput = statsInputs[2];

// Functions
const validateAbility = (event) => {
    let pointsUsed = Number(attackInput.value) + Number(defenceInput.value);

    if (pointsUsed > points) {
        event.target.value = String(Number(event.target.value) - 1);
    }

    announcePrompt.textContent = `Set Name and Points: ${
        points - pointsUsed
    } points left`;
};

const IsValidStats = (selectedPolygon, name, attack, defence) => {
    const selectedPolygonIsOk = selectedPolygon.classList.contains("polygon");
    const nameIsOk = typeof name === "string" && name.length > 0;
    const attackIsOk = typeof attack === "number" && attack <= 10 && attack > 0;
    const defenceIsOk =
        typeof defence === "number" && defence <= 10 && defence > 0;
    const totalPointsIsOk = attack + defence <= 10;
    return (
        selectedPolygonIsOk &&
        nameIsOk &&
        attackIsOk &&
        defenceIsOk & totalPointsIsOk
    );
};

const createCharacter = () => {
    const name = nameInput.value;
    const attack = Number(attackInput.value);
    const defence = Number(defenceInput.value);

    if (!IsValidStats(selectedPolygon, name, attack, defence)) {
        console.error("Inputs are not valid!");
        return;
    }

    character = {
        health: 100,
        element: selectedPolygon,
        name: nameInput.value,
        attack: Number(attackInput.value),
        defence: Number(defenceInput.value),
    };

    return character;

    console.log(`Character has been created:${character}`);
};

const initGame = (event) => {
    const player = createCharacter();
    announcePrompt.textContent = "Fight";
    console.log(gameContainer);
    gameContainer.removeChild(selectionContainer);
    gameContainer.removeChild(statsContainer);
    gameContainer.removeChild(buttonContainer);
    gameContainer.appendChild(fightContainer);
    // Display fight container
    fightContainer.style.display = "flex";

    // Start game
    game(player);
};

// Setup
attackInput.addEventListener("change", validateAbility);
defenceInput.addEventListener("change", validateAbility);

/* Fight */
// Functions
const createRandomOpponent = () => {
    const randomIdx = Math.floor(Math.random() * polygons.length);
    const opponentPolygon = polygons[randomIdx];
    const randomAttackValue = Math.ceil(Math.random() * points);
    return (opponent = {
        health: 100,
        element: opponentPolygon,
        name: nameInput.value,
        attack: randomAttackValue,
        defence: points - randomAttackValue,
    });
};

const populateContainer = (container, player, opponent) => {
    // Todo create view of player with its Health, Attack and Defence
    // Include buttons for abilities

    // temporary just inject their element to have something
    container.appendChild(player.element);
    container.appendChild(opponent.element);
    console.log(container, player, opponent);
};

const game = (player) => {
    opponent = createRandomOpponent();
    populateContainer(fightContainer, player, opponent);

    // Main Game Loop
    // while (opponent.health > 0 || player.health > 0) {}
};

// Setup
fightButton.addEventListener("click", initGame);
