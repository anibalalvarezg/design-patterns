console.log("Singleton loaded!")

// Example 1
class Singleton {
    constructor() {
        console.log("entrando a constructor")
        this.random = Math.random()
        if (Singleton.instance) {
            console.log("Existe")
            return Singleton.instance
        }

        console.log("no existe y se crea")
        Singleton.instance = this
    }

    static getInstance() {
        return Singleton.instance
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()
const singleton3 = Singleton.getInstance()
console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton3.random)

console.log(singleton === singleton2)
console.log(singleton3 === singleton2)

// Example 2
class WeekDays {
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    daysEs = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']

    constructor(lang) {
        this.lang = lang

        if (WeekDays.instance) {
            return WeekDays.instance
        }

        WeekDays.instance = this
    }

    getDays() {
        return this.lang === 'es' ? this.daysEs : this.days
    }
}

const weekDays = new WeekDays('en')
const weekDays2 = new WeekDays()

console.log(weekDays.getDays())
console.log(weekDays2.getDays())
console.log(weekDays === weekDays2)