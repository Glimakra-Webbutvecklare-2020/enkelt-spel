function ask(mood, randomNumber) {
    // let userAnswer = prompt(question).toLowerCase();
    let response = undefined;

    switch (mood) {
            // 1
        case "happy":
            if (randomNumber === 1){
                response = "It's a tie, both of us picked happy";
            } else if (randomNumber === 2){
                response = "Computer wins, sleepy beats happy"
            } else if (randomNumber === 3){
                response = "You win, happy beats sad"
            }
            break;
            // 2
        case "sleepy":
            if (randomNumber === 1){
                response = "You win, sleepy beats happy";
            } else if (randomNumber === 2){
                response = "It's a tie, both of us picked sleepy";
            } else if (randomNumber === 3){
                response = "Computer wins, sad beats sleepy"
            }
            break;
            // 3
        case "sad":
            if (randomNumber === 1){
                response = "Computer wins, happy beats sad";
            } else if (randomNumber === 2){
                response = "You win, sad beats sleepy";
            } else if (randomNumber === 3){
                response = "It's a tie, both of us picked sad"
            }
            break;
    }
    return response;
}
const moods = document.querySelector("#moods");
const winner = document.querySelector("#winner");
const computer = document.querySelector("#computer");
moods.addEventListener("click", function(event){
    console.log(event.target);
    const mood = event.target.getAttribute("data-id");
    console.log(mood);

    // computer random
    let randomNumber = randomChoice();
    let answer = ask(mood, randomNumber);
    
    // timeout
setTimeout(function() {
    console.log(answer);
    winner.innerHTML = answer;
    computer.innerHTML = getMood(randomNumber);
}, 1000)
    
})
function getMood (number) {
    if (number === 1) {
        return "happy";
    } else if (number === 2) {
        return "sleepy";
    } else if (number === 3) {
        return "sad";
    }
}
function randomChoice() {
    let randomNumber = Math.random();
    return Math.ceil(randomNumber * 3);
}

const gameName = "Elephant moodgame";

let isPlaying = true
let counter = 0;
while (isPlaying) {
    if (counter >= 3) {
        isPlaying = false;
    }
    // response = ask("Yey! What mood do you want to play? Happy, sleepy or sad");

    counter++;
}