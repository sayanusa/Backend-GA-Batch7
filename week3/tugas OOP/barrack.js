class Barrack {
    constructor(slots, groups){
        this.slots = slots || [];
        this.groups = groups;
    }
    recruit(army){
        this.slots.push(army);
    }
    summon(){
        console.log("!!==vvv== Agrippa's Armies Lists ==vvv==!!");
        //console.log(this.slots);

        console.log(`Type: Knight, Total: ${this.groups.Knight.length} member.`);
        this.groups.Knight.forEach(el => {
                console.log(`Name: ${el.name}, level : ${el.level}.`);
        })
        console.log('--------------------------------');

        console.log(`Type: Spearman, Total: ${this.groups.Spearman.length} member.`);
        this.groups.Spearman.forEach(el => {
                console.log(`Name: ${el.name}, level : ${el.level}.`);
        })
        console.log('--------------------------------');

        console.log(`Type: Archer, Total: ${this.groups.Archer.length} member.`);
        this.groups.Archer.forEach(el => {
                console.log(`Name: ${el.name}, level : ${el.level}.`);
        })
        console.log('--------------------------------');
        console.log(`Agrippa has total ${this.slots.length} armies in Barrack.`)
    }

    grouping (){
        let tempGroup = {
            Knight : [

            ],
            Spearman : [

            ],
            Archer : [

            ]
        };
        this.slots.forEach(el => {
            if(el.type === 'Knight'){
                tempGroup.Knight.push(el);
            } else if(el.type === 'Spearman'){
                tempGroup.Spearman.push(el);
            } else {
                tempGroup.Archer.push(el);
            }
        })
        this.groups = tempGroup;
        console.log(this.groups);
    }

    disband(name){
        for(let i=0; i<this.slots.length; i++){
            if(this.slots[i] === name){
                this.slots.splice(i,1);
            }
        }
        //console.log(this.slots);
    }

}

module.exports = Barrack;
