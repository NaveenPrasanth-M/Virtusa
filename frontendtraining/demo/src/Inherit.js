class vehicle{
    gear;
    speed;
    construct(gear,speed){
        this.gear=gear;
        this.speed=speed;
    }
    diplay1(){
        return `No of gears = ${this.gear} speed = ${this.speed}`;
    }
}

class Hyundai extends vehicle{
    drive;
    constructor(gear,speed,drive){
    super(gear,speed);
        this.drive = drive;
    }
    display2(){
        return `gear = ${this.gear} speed = ${this.speed} drive = ${this.drive}`;
    }
}
const a = new Hyundai(4,120,2);
console.log(`${a.display2()}`);
//map filter return
