class Character {
    
    constructor(config) {
        this.id = config.ID;
        this.characterName = config.characterName;
        this.attackPower = config.atk;
        this.defencePower = config.def;
        this.imageURL = config.imageURL;
        this.health = 100; // initial health is 100
        this.evadeActive = false;
    };

    attack(character) { // gets called when user hits the button with a sword

        if(!character.evadeActive) { // evade was not active so damage should be dealt
            let randDmg = Math.round(Math.random() * this.attackPower);
            let randDef = Math.round(Math.random() * character.defencePower);
    
            if(randDef > randDmg) { // the player will block the next incomming damage
                character.evadeActive = true;
                return;
            };

            character.health -= randDmg - randDef; // remove health equal to the ( dmg-def )
            return;
        };


        character.evadeActive = false; // if evade was active then remove if for the enxt round
        return;
    };

    getProps() { // for rendering purposes, easier to loop and display data in an array
        return [
            {key: "Character", value: this.characterName },
            {key: "Health", value: this.health}, 
            {key: "Attack Power", value: this.attackPower}, 
            {key: "Evade", value: this.evadeActive },
            {key: "Defence", value: this.defencePower}
        ]
    };
};
