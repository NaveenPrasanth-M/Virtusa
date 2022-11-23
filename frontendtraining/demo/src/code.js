class car{
    name;
    year;
    constructor(name,year){
        this.name=name;
        this.year=year; //this.year=year || 2018
    }
    display(){
        return `Name = ${this.name}`;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
    //let currentyear = new Date();
const car_obj1 = new car("Ford",2015);
const car_obj2 = new car("Hyundai",2020);

console.log(`${car_obj1.display()} Age = ${car_obj1.age()}`);
console.log(`${car_obj2.display()} Age = ${car_obj2.age()}`);