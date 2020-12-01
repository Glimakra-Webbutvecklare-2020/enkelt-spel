//game begins with main menu
//then, player creates their character
//game begins

function GameCharacter(name, health, minDMG, maxDMG, minDEF, maxDEF) {
    this.name = name;
    this.health = health;
    this.minDMG = minDMG;
    this.maxDMG = maxDMG;
    this.minDEF = minDEF;
    this.maxDEF = maxDEF;
    this.evasion = 0;
    this.isDead = false;
}

let player = new GameCharacter("Hästjävel", 15, 2, 7, 5, 10);
let enemy = new GameCharacter("Flug-Höet", 20, 3, 11, 2, 7);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//TO DO: make it possible to set the range of randomization
function randomizeCharacterStats(character) {
    character.health = getRandomInteger(6, 18);
    character.minDMG = getRandomInteger(3, 6);
    character.maxDMG = getRandomInteger(6, 12);
    character.minDEF = getRandomInteger(3, 5);
    character.maxDEF = getRandomInteger(5, 8);
}

function checkGameOver() {
    if(enemy.isDead) {
        alert("You win!");
        //TO DO: reload page as it was before the battle
    }
    else if(player.isDead) {
        alert("You lose! :(")
        //TO DO: replay encounter/create new horse
    }
}

//main game logic
let isPlayerTurn = true;

function attack(attacker, target) {
    let damageResult = getRandomInteger(attacker.minDMG, attacker.maxDMG);
    console.log(`${attacker.name} is attacking...`);
    target.health -= damageResult;
    console.log(`${attacker.name} deals ${damageResult} damage to ${target.name}!`);
    nextTurn();
}

function evade(character) {
    console.log(`${character.name} is evading...`);
    character.evasion = getRandomInteger(character.minDEF, character.maxDEF);
    console.log(character.evasion);
    nextTurn();
}

function annoy() {
    //TO DO: implement randomizing the sound
    horseNoises[0].play();
    console.log("NEEEEIGH");
    nextTurn();
}

function controlEnemyTurn() {
    let actionChoice = getRandomInteger(1, 2);
    if(actionChoice === 1) {
        attack(enemy, player);
    } 
    else if(actionChoice === 2) {
        evade(enemy);
    }
}

//this is the main "update loop" that runs after every turn
function nextTurn() {
    checkGameOver();
    if(isPlayerTurn === true) {
        isPlayerTurn = false;
        console.log(`${enemy.name}'s turn!`);
        enemy.evasion = 0;
        controlEnemyTurn();
    }
    else if (isPlayerTurn === false) {
        isPlayerTurn = true;
        console.log(`${player.name}'s turn!`);
        player.evasion = 0;
    }

    //if player turn, enable actions
    //if not player turn, run AI logic
}

//html elements
const attackButton = document.getElementById('attackbutton');
attackButton.addEventListener('click', () => {
    console.log("Clicked Attack Button");
    attack(player, enemy);
});

const evadeButton = document.getElementById('evadebutton');
evadeButton.addEventListener('click', () => {
    console.log("Clicked Evade Button");
    evade(player);
});

const annoyButton = document.getElementById('annoybutton');
annoyButton.addEventListener('click', () => {
    annoy();
});

const characterCreatorWindow = document.getElementById('game_charactercreator');
document.onload = characterCreatorWindow.style.display = "none";

//sound
let horseNoises = [
    new Audio('horse_noise_01.wav'),
];