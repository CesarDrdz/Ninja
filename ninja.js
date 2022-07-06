
class Ninja{
    constructor(name,health,speed,strenth){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strenth = 3;
    }

    sayName(){
        console.log(`this is your name + ${this.name}`);
    }
    showStats(){
        console.log(`this is your stats + ${this.name}, ${this.strenth},${this.speed}, ${this.health}`);
    }
    drinkSake(){
      this.health += 10
    }

}

class superSensei extends Ninja{
    constructor(wisdom){
        this.health = 200
        this.speed = 10
        this.strenth = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.health += 10
    }

}

// example output
// const superSensei = new Sensei("Master Splinter", 200);
// superSensei.speakWisdom();
//  "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
superSensei.sayName();
//  "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.health);