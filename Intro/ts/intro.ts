console.log("hello world");

// OOP
class Drink {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }
}

const drink = new Drink("Cristal");
console.log(drink.info());

// Inheritance
class Beer extends Drink {
    private alcohol: number;
    constructor(name:string, alcohol: number) {
        super(name);
        this.alcohol = alcohol;
    }

    info(): string {
        return super.info() + " avb is " + this.alcohol;
    }
}

const beer = new Beer("Erdinger", 4);
console.log(beer.info());