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

class Observer {
    constructor(fn) {
        this.fn = fn
    }

    refresh(data) {
        this.fn(data)
    }
}

const s = new Subject()
const o1 = new Observer(data => console.log("o1: ", data))
const o2 = new Observer(data => {
    div1.innerHTML = data
})
const o3 = new Observer(data => {
    console.log(typeof data)
    div2.innerHTML = data.split("").reverse().join("")
})
s.subscribe(o1)
s.subscribe(o2)
s.subscribe(o3)
function change() {
    s.notify(myText.value)
}