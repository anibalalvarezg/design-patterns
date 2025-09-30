class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(o => o !== observer)
    }

    notify(data) {
        this.observers.forEach(observer => {
            observer.refresh(data)
        })
    }
}

class ItemsSubject extends Subject {
    constructor() {
        super()
        this.data = []
    }

    add(item) {
        this.data.push(item)
        this.notify(this.data)
    }
}

class HtmlElementObserver {
    constructor(element) {
        this.element = element
    }

    refresh(data) {
        this.element.innerHTML = data.reduce((acc, el) => {
            return acc + `<p>${el}</p>`
        }, '')
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn
    }

    refresh(data) {
        this.fn(data)
    }
}

const item = new ItemsSubject()
const div1Observer = new HtmlElementObserver(div1)
const div2Observer = new HtmlElementObserver(div2)

const observer = new Observer((data) => {
    div3.innerHTML = data.length
})
item.subscribe(div1Observer)
item.subscribe(div2Observer)
item.subscribe(observer)

function addItem() {
    const name = txtName.value
    item.add(name)
}