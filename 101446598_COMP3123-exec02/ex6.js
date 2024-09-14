class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    setModel(model) {
        this.model = model;
    }

    getModel() {
        return this.model;
    }

    setYear(year) {
        this.year = year;
    }

    getYear() {
        return this.year;
    }

    details() {
        var det = "Model " + this.model + " " + this.year;
        return det;
    }
}


class Sedan extends Car{
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {return this.getModel() + ' has a balance of ' + this.balance;}
}
const car2 = new Car(`Pontiac Firebird`, 1976);
console.log(car2.details());

const sedan = new Sedan(`Volvo SD`, 2018, 30000);
console.log(sedan.info());
