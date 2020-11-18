/* Functions */
function ask(question) {
    let userAnswer = prompt(question).toLowerCase();
    let response = undefined;

    switch (userAnswer) {
        case "option1":
            console.log("Since you that was your choice, then this happens!");
            response = "response1";
            break;
        case "option2":
            console.log(
                "Since you that was your choice, then another thing happens!"
            );
            response = "response2";
            break;
        default:
            console.log("Not a valid response");
    }

    return response;
}

function getComputerResponse() {
    // Let a random value determine the response
    return "Not implemented yet";
}

/* Initalization */
const gameName = "a game";

/* Game Loop */
let play = prompt(`Do you want to play ${gameName}?`).toLowerCase();
let isPlaying = play == "y" || play == "yes";
while (isPlaying) {
    response = ask("What is your move?");

    alert(
        `Your move was ${response} and computer was ${getComputerResponse()}`
    );
}

/* Exit */
alert("Goodbye!");
