class SaleContext {
    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    calculate(amount) {
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax
    }

    calculate(amount) {
        return amount + (this.tax * amount)
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax
        this.discount = discount
    }

    calculate(amount) {
        return amount + (this.tax * amount) - this.discount
    }
}

class ForeignSaleStrategy {
    calculate(amount) {
        return amount * this.getDollarPrice()
    }
    getDollarPrice() {
        return 20
    }
}

const foreignSale = new ForeignSaleStrategy()
const regularSale = new RegularSaleStrategy(0.16)
const discountSale = new DiscountSaleStrategy(0.16, 3)

const sale = new SaleContext(regularSale)
console.log(sale.calculate(10))

sale.setStrategy(discountSale)
console.log(sale.calculate(10))

sale.setStrategy(foreignSale)
console.log(sale.calculate(10))

// Another example
const data = [
    {
        name: 'Erdinger Pikantus',
        country: 'Germany',
        info: 'Cerveza de trigo oscura, con notas maltosas, cuerpo robusto y 7.3% de alcohol.',
        img: 'https://www.erdinger.com/fileadmin/_processed_/7/3/csm_erdinger_pikantus_500ml_123456789.jpg'
    },
    {
        name: 'Guinness Draught',
        country: 'Ireland',
        info: 'Stout clásica con sabor a café y chocolate, espuma cremosa y baja carbonatación.',
        img: 'https://www.guinness.com/media/12345/guinness-draught.jpg'
    },
    {
        name: 'Corona Extra',
        country: 'Mexico',
        info: 'Lager ligera y refrescante, muy popular mundialmente, ideal para beber con limón.',
        img: 'https://www.corona.com/media/67890/corona-extra.jpg'
    }
]

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((acc, el) => {
            return acc + `
                <div>
                    <h2>${el.name}</h2>
                </div>
                <hr>`
        }, '')
    }
}

class ListDetailsStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((acc, el) => {
            return acc + `
                <div>
                    <h2>${el.name}</h2>
                    <p>${el.country}</p>
                    <p>${el.info}</p>
                </div>
                <hr>`
        }, '')
    }
}

const strategies = [new ListStrategy(), new ListDetailsStrategy()]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()

slcOptions.addEventListener('change', (event) => {
    const id = event.target.value
    info.setStrategy(strategies[id])
    info.show()
})