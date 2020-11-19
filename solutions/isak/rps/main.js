class Game {
    constructor() {
        this.player;
        this.computer;
        return;
    };
    
    setRoles(config) { // update roles
        this.player = config.a;
        this.computer = config.b;
        return;
    };

    determineWinner(a, b) { // A represents the computer, B represents the computer
        if (a === b) return { winner: "even" }; // the player choose the same as the computer

        /*
            rock -> scissor
            paper -> rock
            scissor -> paper
        */

        if(a === "paper" && b === "rock") return { winner: "you" };
        if(a === "rock" && b === "scissor") return { winner: "you" };
        if(a === "scissor" && b === "paper") return { winner: "you" };

        return { winner: "computer" }; // if player hasn't won then the computer must have won?
    };   
};

function startGame(player) { /* Essentialy the main function */

    let game = new Game(); // instantiate a new game object

    game.setRoles({
        a: player, // gets passed in through the template
        b: ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)] // pull a random string from array and assign it to the computer
    });

    let result = game.determineWinner(game.computer, game.player); // produce a winner from the given choises
    
    /*
        alert(`
        You choose: ${game.player}\n
        Computer choose: ${game.computer}\n
        Winner: ${result.winner}
        `); // inform player of the results
    */

    displayResults({
        player: game.player,
        computer: game.computer,
        winner: result.winner
    })

    return;
};


function reset() {
    let lis = document.querySelectorAll('#results-ul li');
    
    for(let i = 0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    };
};


function displayResults(result) {
    let list = document.getElementById("results-ul");
    let li = document.createElement("li");

    li.append(createSpan(`${result.player}`));
    li.append(createSpan(`${result.computer}`));
    li.append(createSpan(`${result.winner}`));

    list.appendChild(li);
};

function createSpan(text) {
    let span = document.createElement("span");
    span.textContent = text;
    
    return span;
};