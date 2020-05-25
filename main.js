function add (x, y){
    return x + y
}

console.log('add function:   ' + add(2,4))

function multiply ( x, y){
    let total = 0
    for (let counter = 0; counter < y; counter = add(counter,1)){
        total = add(total, x)
    }
    return total
}

console.log('multiply function:   ' + multiply(6,4))
console.log('multiply function:   ' + multiply(2,8))

function power(x,y){
    let total = multiply(x,x)
    for(let counter = 3; counter <=y; counter = add(counter,1)){
        total = multiply(total,x)
    }
    return total
}

console.log('power function:   ' + power(2,8))
console.log('power function:   ' + power(3,4))

function factorial (x){
    let total = 1
    for(x; x > 1; x--){
        total = multiply(total,x)
    }
    return total
}

console.log('factorial function:   ' + factorial(5))
console.log('factorial function:   ' + factorial(7))
console.log('factorial function:   ' + factorial(20))

function Fibonacci (n){
    let numberOne = 0
    let numberTwo = 1
    let total = 1
    for (let counter = 1; counter < n; counter = add(counter,1)){
        total = add(numberOne,numberTwo)
        numberOne = numberTwo
        numberTwo = total

    }
    return numberOne
}

console.log('Fibonacci function:   ' + Fibonacci(1))
console.log('Fibonacci function:   ' + Fibonacci(3))
console.log('Fibonacci function:   ' + Fibonacci(4))
console.log('Fibonacci function:   ' + Fibonacci(5))
console.log('Fibonacci function:   ' + Fibonacci(6))
console.log('Fibonacci function:   ' + Fibonacci(7))
console.log('Fibonacci function:   ' + Fibonacci(8))
console.log('Fibonacci function:   ' + Fibonacci(9))