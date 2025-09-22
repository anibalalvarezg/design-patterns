console.log("hello world")

// Functions
function sum(a, b) {
    return a + b
}

let rest = sum(1,2)
console.log(rest)

// First-order fn
const fSum = sum
rest = fSum(5,6)

console.log(rest)

// High-order fn
function operation (fn, a, b) {
    return fn(a,b)
}

console.log(operation(fSum,1,4))

// Arrow function
let fA =  () => console.log("from anonymous fn")
fA()
console.log(operation((a, b) => a - b, 5, 5))

// Arrays

// Foreach
const names = ['Anibal', 'Nicolas', 'Luis']
names.forEach(name => console.log(name))

// Immutable method
names.forEach(name => console.log(name.toUpperCase()))
console.log(names)

// Mutable methods
names.push('Tino');
console.log(names)
names.sort()
console.log(names)

// Map
const namesUpper = names.map(name => name.toUpperCase())
console.log(namesUpper)
console.log(names)

// Reduce
const numbers = [5,4,7,1,10]
const total = numbers.reduce((acc, number) => acc + number, 0)
console.log(total)

// Classes and Objects (OOP)
class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        return "Drink's name is " + this.name;
    }
}

// Functional
function Drink2(name) {
    this.name = name;
    this.info = () => {
        return "Drink's name is " + this.name;
    }
}

const drink = new Drink("Negroni")
const drink2 = new Drink2("Agua")
console.log(drink.info())
console.log(drink2.info())

// Inheritance
class Beer extends Drink {
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
    }

    info() {
        return super.info() + " and AVB is " + this.alcohol;
    }
}

const beer = new Beer("Corona", 5.0)
console.log(beer.info())
