 class Army {
    constructor (name, type, level){
        this.name = name;
        this.type = type;
        this.level = level || 1;
    }

    //method
    talk (){
        console.log(`Hi! my name is ${this.name}. I am a/an ${this.type} and now I am at level ${this.level}`);
    }

    training (farming){
        let levelLimit = 10;
        for (let i=1; i<=farming; i++){
            if (this.level < levelLimit){
                this.level += 1;
                console.log(`level up to ${this.level} !!`);
            } else {
                console.log(`level ${this.level}, max level have reached!`);
            }
        }
    }
}

class Knight extends Army {
    constructor (name){
        super(name, 'Knight', 1);
        this.name = name;
    }

    talkKnight (){ //override the talk method
        super.talk();
        console.log(`I am part of Agrippa's Armies`);
    }
}

class Spearman extends Army {
    constructor (name){
        super(name, 'Spearman', 1);
        this.name = name;
    }

    talkSpearman (){ //override the talk method
        super.talk();
        console.log(`I am part of Agrippa's Armies`);
    }
}

class Archer extends Army {
    constructor (name){
        super(name, 'Archer', 1);
        this.name = name;
    }

    talkArcher (){ //override the talk method
        super.talk();
        console.log(`I am part of Agrippa's Armies`);
    }
}

module.exports = {
    Knight : Knight,
    Spearman : Spearman,
    Archer : Archer
}
