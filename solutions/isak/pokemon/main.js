var app = new Vue({
    el: '#app',
    data: {
      characterData: {
        characterName: "",
        imageURL: "",
        defence: 1,
        attack: 10
      }, 
      game: {
          players: []
      },
      gameRunning: false
    },
    methods: {
      restart() {
        this.game.players.forEach(player => {
          player.health = 100;
          player.evadeActive = false;
        });
      },
  
      attack() {
        if(this.game.players[0].health <= 0) {
          alert(`Winner: ${this.game.players[1].characterName}`)

        } else if(this.game.players[1].health <= 0) {
          alert(`Winner: ${this.game.players[0].characterName}`)

        } else if(this.game.players[0] <= 0 && this.game.players[1].health <= 0) {
          alert("No winner");

        } else {
          this.game.players[0].attack(this.game.players[1]);
          this.game.players[1].attack(this.game.players[0]);
        };
      },
      
      createCharacter() {
        let characterAttack = parseInt(this.characterData.attack);
        let characterDefence = parseInt(this.characterData.defence);

        if(characterAttack > 10) {
            characterDefence = 1;
            characterAttack = 10;
        } else if(characterDefence > 10) {
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
      startGame() { this.gameRunning = !this.gameRunning ? true : false }
    }
});