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