class Character {
    
    constructor(id, imageURL) {
        this.health = 100;
        this.attackPower = 10;
        this.defencePower = 5;
        this.evadeActive = false;
        this.id = id;
        this.imageURL = imageURL;
        this.renderTools = new RenderTools();
    };

    attack(character) {
        
        if(!this.evadeActive) {
            let damage = (Math.random() * 1) * (this.attackPower - character.defencePower);
            character.health -= Math.round(damage);
            this.evade();
            return;
        } else {
            this.evadeActive = false;
            return;
        };
    };

    evade() {
        let probability = [false, true, true, false, false];
        this.evadeActive = probability[Math.floor(Math.random() * probability.length)];
    };

    render() {

        try {
            document.getElementById(`character-${this.id}`).remove();
        } catch(err) {
            console.log("Initial render causes error");
        };

        let container = document.getElementsByClassName("container")[0];
        let div = this.renderTools.getDiv(this.id);
        let list = this.renderTools.createList();

        let properties = [
            {key: "Health", value: this.health}, 
            {key: "Attack Power", value: this.attackPower}, 
            {key: "Defence", value: this.defencePower} 
            //{key: "Player", value: this.id}
        ]

        properties.forEach(element => {
            list.appendChild(this.renderTools.createListItem(`${element.key}: ${element.value}`));
        });

        let healthStatus = document.createElement("div");
        healthStatus.className = "health";
        healthStatus.style.opacity = `${calcOpacity(this.health)}%`;
        div.appendChild(healthStatus);
        div.appendChild(this.renderTools.createImg(this.imageURL, this.health))
        div.appendChild(list);

        container.appendChild(div);
    };
};


function calcOpacity(health) {
    return 100 - health;
};