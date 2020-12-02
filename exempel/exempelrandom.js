function response() {
    let result = undefined;
    const answer = Math.floor(Math.random() * 3); // 0, 1, 2
    switch (answer) {
        case 0:
            result = "Then this happens";
            break;
        case 1:
            result = "Then another thing happens";
            break;
        default:
            result = "Not valid answer";
    }

    return result;
}

alert(response());
