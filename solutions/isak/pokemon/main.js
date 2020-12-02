var app = new Vue({
    el: '#app',
    data: {
      characterData: {
        characterName: "", // does not matter, just for fun
        imageURL: "", // https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg
        defence: 1, // how many points of attack damage will be absorbed
        attack: 10
      }, 
      game: {
          players: [] // will only contain two players
      },
      gameRunning: false // determines if game should be visible or if the character creation screen should be dislayed
    },
    methods: {
      restart() {
        this.game.players.forEach(player => { // reset all user objects to their original state
          player.health = 100;
          player.evadeActive = false;
        });
      },
  
      attack() {
        if(this.game.players[0].health <= 0) { // if player at index 0 has below 0 health
          alert(`Winner: ${this.game.players[1].characterName}`) // index 1 has won

        } else if(this.game.players[1].health <= 0) { // if player at index 1 has below 0 health
          alert(`Winner: ${this.game.players[0].characterName}`) // index 0 has won

        } else if(this.game.players[0] <= 0 && this.game.players[1].health <= 0) { // the game resulted in a tie
          alert("No winner");

        } else {

          /* Both players will attack every turn */
          this.game.players[0].attack(this.game.players[1]); 
          this.game.players[1].attack(this.game.players[0]);
        };
      },

      createCharacter() {
        let characterAttack = parseInt(this.characterData.attack); // convert string to a int
        let characterDefence = parseInt(this.characterData.defence); // convert string to a int

        if(characterAttack > 10) { // if the user picks a value above 10
            characterDefence = 1;
            characterAttack = 10;
        } else if(characterDefence > 10) { // if the user picks a value above 10
            characterDefence = 10;
            characterAttack = 1;
        };

        
        this.game.players = [ // Create two new player objects and append to the game players array
            new Character({
                ID: 0,
                imageURL: this.characterData.imageURL || "./images/cat.jpeg",
                atk: characterAttack,
                def: characterDefence,
                characterName: this.characterData.characterName || "Player"
            }),
            new Character({
                ID: 1,
                imageURL: "./images/cat.jpeg",
                atk: 5,
                def: 6,
                characterName: "Cat"
            })
        ]; 
        this.startGame();
      },
      startGame() { this.gameRunning = !this.gameRunning ? true : false } // switch between game state
    }
});