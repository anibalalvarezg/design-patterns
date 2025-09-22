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