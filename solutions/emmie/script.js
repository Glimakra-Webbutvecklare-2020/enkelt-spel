function ask(question) {
    let userAnswer = prompt("This is question").toLowerCase();
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

const gameName = "A game";
let play = prompt(`Do you want to play ${gameName}?`).toLowerCase();

let isPlaying = play == "y" || play == "yes";

while (isPlaying) {
    response = ask("What is your next move?");

    console.log(response);
}

alert("Good bye!");
