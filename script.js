'use strict';
class ThePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showThePerson() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }

}
class Car {
    constructor(owner, brand , model, year, licenceplate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licenceplate = licenceplate;
        this.functionAge(owner);
    }
    functionAge(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Owner must be at least 18 years old.");
        }
        
    }
    showThePersonAndCar() {
        console.log(`Information about car: brand: ${this.brand}, model:${this.model}, year:${this.year}, licenceplate:${this.licenceplate}`);
        if (this.owner) {
            this.owner.showThePerson();
        } else {
            console.log('No suitable buyer');
        }
       
    
    }
}
const firstPerson = new ThePerson('john', 17);
const secondPerson = new ThePerson('mary', 19);
const firstCar = new Car(firstPerson, 'tesla', 'modelS', 2016, 'AA1234ZR');
const secondCar = new Car(secondPerson,'lexus', 'LX600', 2021, 'BA2588BA');
firstCar.showThePersonAndCar();
secondCar.showThePersonAndCar();


