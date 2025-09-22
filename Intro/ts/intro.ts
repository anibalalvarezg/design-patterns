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

// Interface
interface Product {
    price: number;
    getPrice(): string;
}

// Inheritance
class Beer extends Drink implements Product {
    private alcohol: number;
    price: number;
    constructor(name:string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    info(): string {
        return super.info() + " avb is " + this.alcohol;
    }

    getPrice(): string {
        return String(this.price);
    }
}

// Implement interfaces
class Snack implements Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "The snack's price is " + this.price;
    }
}

const beer = new Beer("Erdinger", 4, 100);
console.log(beer.info());

const products: Product[] = [];
products.push(new Snack("Sels", 100));
products.push(beer);
console.log(products);


function printPrices(items: Product[]) {
    items.forEach(item => console.log(item.getPrice()));
}

printPrices(products);