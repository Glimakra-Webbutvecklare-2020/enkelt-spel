class Character {
    
    constructor(config) {
        this.id = config.ID;
        this.characterName = config.characterName;
        this.attackPower = config.atk;
        this.defencePower = config.def;
        this.imageURL = config.imageURL;
        this.health = 100;
        this.evadeActive = false;
    };

    attack(character) {
        character.health -= ( this.attackPower - character.defencePower );
        return { 
            attackerHealth: this.health,
            defenderHealth: character.health
        };
    };

    evade() {
        let probability = [false, true, true, false, false];
        this.evadeActive = probability[Math.floor(Math.random() * probability.length)];
    };

    getProps() {
        return [
            {key: "Character", value: this.characterName },
            {key: "Health", value: this.health}, 
            {key: "Attack Power", value: this.attackPower}, 
            {key: "Evade", value: this.evadeActive },
            {key: "Defence", value: this.defencePower}
        ]
    };
};


function calcOpacity(health) {
    return 100 - health;
};