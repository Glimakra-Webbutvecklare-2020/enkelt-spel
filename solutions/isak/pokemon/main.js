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
      attack() {
         this.game.players[0].attack(this.game.players[1]);
         this.game.players[1].attack(this.game.players[0]);
      },
      startGame() {
          this.gameRunning = !this.gameRunning ? true : false;
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
                imageURL: this.characterData.imageURL,
                atk: characterAttack,
                def: characterDefence,
                characterName: this.characterData.characterName
            }),
            new Character({
                ID: 1,
                imageURL: "./cat.jpeg",
                atk: 5,
                def: 6,
                characterName: "Cat"
            })
        ]; 

        console.log(this.game.players[0])
        this.startGame();
      }
    }
});