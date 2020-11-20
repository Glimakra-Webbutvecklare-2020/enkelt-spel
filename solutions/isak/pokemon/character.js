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

        if(!character.evadeActive) {
            let randDmg = Math.round(Math.random() * this.attackPower);
            let randDef = Math.round(Math.random() * character.defencePower);
    
            if(randDef > randDmg) {
                character.evadeActive = true;
                return;
            };

            character.health -= randDmg - randDef;
            return;
        };


        character.evadeActive = false;
        return;
    };

    evade() {
        let probability = [false, true, true, false, false];
        this.evadeActive = probability[Math.floor(Math.random() * probability.length)];
        return;
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
