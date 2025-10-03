interface ListImpelemntor {
    elements: number[];

    add(num: number): void;
    getElements(): number[];
}

class OrderedList implements ListImpelemntor {
    elements: number[] = [];

    public add(num: number) {
        this.elements.push(num);
        this.elements.sort();
    }

    public getElements(): number[] {
        return this.elements;
    }
}

class UniqueList implements ListImpelemntor {
    elements: number[] = [];
    public add(num: number) {
        if (!this.elements.includes(num)) {
            this.elements.push(num);
            this.elements.sort();
        }
    }

    public getElements(): number[] {
        return this.elements;
    }
}

interface DataAbstraction {
    implementor: ListImpelemntor
    add(num: number): void;
    get(): number[];
    operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
    constructor(public implementor: ListImpelemntor) {}

    public add(num: number): void {
        this.implementor.add(num);
    }

    public get(): number[] {
        return this.implementor.getElements();
    }

    public operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }
}


const uniqueData = new DataRefinedAbstraction(new UniqueList());
uniqueData.add(5);
uniqueData.add(5);
uniqueData.add(3);
uniqueData.add(2);
uniqueData.add(1);

console.log(uniqueData.get());

const orderedList = new DataRefinedAbstraction(new OrderedList());
orderedList.add(5);
orderedList.add(6);
orderedList.add(7);
orderedList.add(2);
orderedList.add(3);

console.log(orderedList.get());

const uniqueItems = uniqueData.operation((n) => n * 2);
const orderedItems = orderedList.operation((n) => n * 2);
console.log(uniqueItems);
console.log(orderedItems);

