function calcularFactorial (num) {
    let fact = num
    let aux = fact 
    for (let i = num - 1; i > 1; i--) {
        for (let j = i; j > 1; j--) {
            fact += aux
        }
        aux = fact
    }
    return fact
}

console.log(calcularFactorial(3))
console.log(calcularFactorial(4))
console.log(calcularFactorial(5))
console.log(calcularFactorial(6))