function ask(question) {
    const answer = prompt(question);
    return answer;
}

function response(answer) {
    let result = undefined;
    switch (answer) {
        case "a":
            result = "Then this happens";
            break;
        case "b":
            result = "Then another thing happens";
            break;
        default:
            result = "Not valid answer";
    }

    return result;
}

const answer = ask("What do you chose a or b?");

function delayedResponseAlert() {
    alert(response(answer));
}

setTimeout(() => {
    alert(response(answer));
}, 2000);
