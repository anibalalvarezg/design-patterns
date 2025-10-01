interface Component {
    getDetail(): string;
}

class ProductComponent implements  Component {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getDetail(): string {
        return `${this.name}`;
    }
}

// Decorator
abstract class ProductDecorator implements Component {
    protected component: Component;
    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

// Decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
    private tradeName: string;
    private brand: string;

    constructor(component: Component, tradeName: string, brand: string) {
        super(component);
        this.tradeName = tradeName;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradeName} ${this.brand} ` + super.getDetail();
    }
}

// Decorator 2
class StoreProductDecorator extends ProductDecorator {
    private price: string;

    constructor(component: Component, price: string) {
        super(component);
        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + ` $${this.price}`;
    }
}

// Decorator 3
class HTMLProductDecorator extends ProductDecorator {
    getDetail(): string {
        return `
            <h1>Información del producto</h1>
            <p>
                ${super.getDetail()}
            </p>
        `;
    }
}

const component = new ProductComponent("Beer");
console.log(component.getDetail());

const commercialComponent = new CommercialInfoProductDecorator(component, 'London Porter', "Fuller's");
console.log(commercialComponent.getDetail());

const priceCommercialComponent = new StoreProductDecorator(commercialComponent, '15.5');
console.log(priceCommercialComponent.getDetail());

const htmlProductComponent = new HTMLProductDecorator(priceCommercialComponent);
console.log(htmlProductComponent.getDetail());
