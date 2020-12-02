/* Global */
const announcePrompt = document.querySelector("#announce-prompt");

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

const createCharacter = (event) => {
    console.log("Fight button clicked");
    const name = nameInput.value;
    const attack = Number(attackInput.value);
    const defence = Number(defenceInput.value);

    if (!IsValidStats(selectedPolygon, name, attack, defence)) {
        console.error("Inputs are not valid!");
        return;
    }

    character = {
        element: selectedPolygon,
        name: nameInput.value,
        attack: Number(attackInput.value),
        defence: Number(defenceInput.value),
    };

    console.log(`Character has been created:${character}`);
};

// Setup
attackInput.addEventListener("change", validateAbility);
defenceInput.addEventListener("change", validateAbility);
fightButton.addEventListener("click", createCharacter);
