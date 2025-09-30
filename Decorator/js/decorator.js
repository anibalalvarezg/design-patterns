//Component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }
}

//Decorator
class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradeName, brand) {
        super(productComponent);
        this.tradeName = tradeName;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradeName} ${this.brand} ${super.getDetail()}`;
    }
}

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ` $${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    getDetail() {
        return `
            <h1>Product Information</h1>
            <p>${super.getDetail()}</p>
        `;
    }
}

// Decorator 1
const productComponent = new ProductComponent('Beer');
console.log(productComponent.getDetail());

const commercialInfoProductDecorator = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProductDecorator.getDetail());

// Decorator 2
const storeProduct = new StoreProductDecorator(commercialInfoProductDecorator, 15.5);
console.log(storeProduct.getDetail());

// Decorator 3
const product = new StoreProductDecorator(commercialInfoProductDecorator, 15.5);
const htmlProductDecorator = new HTMLProductDecorator(product);

myDiv.innerHTML = htmlProductDecorator.getDetail();

