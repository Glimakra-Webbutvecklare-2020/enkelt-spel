let game; // global game object

class RenderTools {
    createListItem(text) {
        let listItem = document.createElement("li");
        listItem.textContent = text;

        return listItem;
    };

    createList() {
        return document.createElement("ul");
    };

    createImg(url, opacity) {
        let tag = document.createElement("img");
        tag.src = url;
        return tag;
    };

    getDiv(id) {
        let div = document.createElement("div"); // create new div element
        div.id = `character-${id}`; // asign id
        div.className = "character"; // asign class 

        return div; 
    };
};


class Game {

    constructor() {
        this.players = [];
    };


    render() {
        this.players.forEach(player => {
            player.render();
        });
    };

    start() {
        this.render();
    };
};

function attackHandler() {
    game.players[0].attack(game.players[1]);
    game.players[1].attack(game.players[0]);
    game.players[0].render();
    game.players[1].render();

    if(game.players[0].health <= 0) {
        alert("Cat wins!")
        newGame();

    } else if(game.players[1].health <= 0) {
        alert("You have defeated the cat!")
        newGame();

    } else if(game.players[0].health <= 0 && game.players[1].health <= 0) {
        alert("NO winner!")
        newGame();

    };


    return;
};

function newGame() {
    game = new Game();
    game.players = [
        new Character(0, "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"), 
        new Character(1, "https://images.pexels.com/photos/4438556/pexels-photo-4438556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    ] 
    game.start();
};

(function main() {
    newGame();
}());