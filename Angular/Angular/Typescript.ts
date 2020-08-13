// tsc Typescript.ts --watch

console.log("Hello World");
let me :String = "Cormac";
me = "5463";

let random :any = true;
random = "Random";

let numbers : Array<Number> = [4,6];

function doStuff(name:String):Number {
    console.log("Name");
    return 123;
}

function doStuff2(name?:String):void {
    console.log("Name");
}

interface Person{
    name:String
}

let person:Person;

person = {
    name:"Cormac"
}

enum platform {
    PC,PS4,XBOX1,Switch,Mobile
}

interface gamer extends Person{
    gameTag : String,
    platform : platform
}
let gamer = {
    name:"Cormac",
    gamerTag:"Jib",
    platform:platform.PC
}

class Pet {
    name:String
    constructor(name:String) {
        this.name = name;
    }
    sleep(hours:Number = 6){
        console.log(`${this.name} has slept for ${hours}`);
    }
    eat():void{
        console.log(`${this.name} has slept`);
    }
}

class Dog extends Pet {
    constructor(name:String) {
        super(name);
    }
    sleep(hours = 7){
        super.sleep(hours);
    }
    bark(){
        console.log("Bark Bark");
    }
}

let lady = new Dog("Lady");
lady.bark();
