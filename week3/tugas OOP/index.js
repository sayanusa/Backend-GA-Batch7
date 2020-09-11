const armyModule = require("./army.js");
const Knight = armyModule.Knight;
const Spearman = armyModule.Spearman;
const Archer = armyModule.Archer;
const Barrack = require("./barrack.js");


//vvvv PLAY THE CODE BELOW HERE vvvv
//====================================

let Demon = new Knight();
Demon.name = 'Demon';
Demon.talkKnight();
Demon.training(7); //input total training given to Demon
Demon.talkKnight();


let Beelzebub = new Knight();
Beelzebub.name = 'Beelzebub';
Beelzebub.talkKnight();
Beelzebub.training(5); //input total training given to Beelzebub
Beelzebub.talkKnight();


let Satan = new Spearman();
Satan.name = 'Satan';
Satan.talkSpearman();
Satan.training(2); //input total training given to Satan
Satan.talkSpearman();


let Lucifer = new Spearman();
Lucifer.name = 'Lucifer';
Lucifer.talkSpearman();
Lucifer.training(9); //input total training given to Lucifer
Lucifer.talkSpearman();

let DemonLord = new Archer();
DemonLord.name = 'Demon Lord';
DemonLord.talkArcher();
DemonLord.training(10); //input total training given to DemonLord
DemonLord.talkArcher();

let Ogre = new Archer();
Ogre.name = 'Ogre';
Ogre.talkArcher(); //Ogre doesn't want to train

let Oga = new Knight();
Oga.name = 'Oga';
Oga.talkKnight();
Oga.training(12); //input total training given to Oga
Oga.talkKnight();


let barrack = new Barrack();
barrack.recruit(Demon);
barrack.recruit(Beelzebub);
barrack.recruit(Satan);
barrack.recruit(Lucifer);
barrack.recruit(DemonLord);
barrack.recruit(Ogre);
barrack.recruit(Oga);

barrack.grouping();
barrack.summon();

barrack.disband(Ogre);
barrack.grouping();
barrack.summon();

//====================================
//^^^^ PLAY THE CODE UP HERE ^^^^